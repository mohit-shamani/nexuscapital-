import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * A 3D globe described entirely by interconnected particles: points
 * distributed evenly across a sphere (Fibonacci lattice) with hairline
 * segments drawn between near neighbours. It turns slowly and breathes
 * gently — elegant, never busy. Brass nodes over a faint navy core.
 */
export default function ParticleGlobe({ pointer }) {
  const group = useRef(null);
  const RADIUS = 2.05;
  const COUNT = 340;
  const NEIGHBOURS = 3; // links drawn from each node to its nearest few

  // Evenly distribute points on the sphere with the golden-angle spiral.
  const points = useMemo(() => {
    const arr = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < COUNT; i += 1) {
      const y = 1 - (i / (COUNT - 1)) * 2; // 1 → -1
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      arr.push(
        new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(RADIUS)
      );
    }
    return arr;
  }, []);

  const pointPositions = useMemo(() => {
    const a = new Float32Array(points.length * 3);
    points.forEach((p, i) => {
      a[i * 3] = p.x;
      a[i * 3 + 1] = p.y;
      a[i * 3 + 2] = p.z;
    });
    return a;
  }, [points]);

  // Build hairline segments to each point's nearest neighbours (deduped).
  const linePositions = useMemo(() => {
    const segs = [];
    const seen = new Set();
    for (let i = 0; i < points.length; i += 1) {
      const dists = [];
      for (let j = 0; j < points.length; j += 1) {
        if (i === j) continue;
        dists.push([j, points[i].distanceToSquared(points[j])]);
      }
      dists.sort((a, b) => a[1] - b[1]);
      for (let k = 0; k < NEIGHBOURS; k += 1) {
        const j = dists[k][0];
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (seen.has(key)) continue;
        seen.add(key);
        segs.push(points[i].x, points[i].y, points[i].z, points[j].x, points[j].y, points[j].z);
      }
    }
    return new Float32Array(segs);
  }, [points]);

  useFrame((state, delta) => {
    if (!group.current) return;
    // Slow, continuous rotation — the core of the elegance.
    group.current.rotation.y += delta * 0.06;

    // Gentle parallax toward the pointer, heavily eased so it never snaps.
    const px = pointer?.current?.x ?? 0;
    const py = pointer?.current?.y ?? 0;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, py * 0.18 - 0.12, 0.03);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, px * 0.15, 0.04);

    // Faint breathing scale.
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.4) * 0.012;
    group.current.scale.setScalar(s);
  });

  return (
    <group ref={group}>
      {/* Faint solid core for depth */}
      <mesh>
        <sphereGeometry args={[RADIUS * 0.92, 48, 48]} />
        <meshBasicMaterial color="#0F1E2E" transparent opacity={0.55} />
      </mesh>

      {/* Interconnecting hairlines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#B08D57" transparent opacity={0.16} />
      </lineSegments>

      {/* Particle nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pointPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#C5A572"
          size={0.045}
          sizeAttenuation
          transparent
          opacity={0.95}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
