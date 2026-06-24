import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * A digital "earth from space": a Fibonacci-lattice sphere with an ocean-blue
 * gradient core, an electric-blue network of hairlines accented with gold, soft
 * pulsing nodes that suggest transaction activity, a few faint connection arcs,
 * and a blue atmospheric rim. Turns slowly and breathes — premium, never busy.
 */
export default function ParticleGlobe({ pointer }) {
  const group = useRef(null);
  const blueNodeMat = useRef(null);
  const goldNodeMat = useRef(null);

  const RADIUS = 2.05;
  const CORE_R = RADIUS * 0.92;
  const COUNT = 340;
  const NEIGHBOURS = 3; // links drawn from each node to its nearest few

  // Brand palette.
  const C_DEEP = '#0D2137'; // deep navy (poles / shadow)
  const C_BLUE = '#0072CE'; // electric blue (lit edge / network)
  const C_GOLD = '#C8972A'; // gold accent
  const C_ATMO = '#2A8FE0'; // slightly lighter blue for the atmosphere

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

  // Split nodes into a blue majority and a gold accent set (~1 in 4).
  const { bluePositions, goldPositions } = useMemo(() => {
    const blue = [];
    const gold = [];
    points.forEach((p, i) => {
      const target = i % 4 === 0 ? gold : blue;
      target.push(p.x, p.y, p.z);
    });
    return {
      bluePositions: new Float32Array(blue),
      goldPositions: new Float32Array(gold),
    };
  }, [points]);

  // Build hairline segments to each point's nearest neighbours (deduped),
  // splitting most into electric blue with an occasional gold accent line.
  const { blueLines, goldLines } = useMemo(() => {
    const blue = [];
    const gold = [];
    const seen = new Set();
    let edge = 0;
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
        const target = edge % 7 === 0 ? gold : blue; // ~14% gold accents
        edge += 1;
        target.push(
          points[i].x, points[i].y, points[i].z,
          points[j].x, points[j].y, points[j].z
        );
      }
    }
    return { blueLines: new Float32Array(blue), goldLines: new Float32Array(gold) };
  }, [points]);

  // A handful of lofted connection arcs between distant nodes — alternating
  // blue and gold — reading as cross-network transaction flows.
  const { blueArcs, goldArcs } = useMemo(() => {
    const blue = [];
    const gold = [];
    const SEG = 26;
    const pairs = [
      [10, 188], [44, 300], [96, 250], [150, 22], [210, 332], [70, 160],
    ];
    pairs.forEach(([ai, bi], idx) => {
      const a = points[ai % points.length];
      const b = points[bi % points.length];
      const ctrl = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(RADIUS * 1.42);
      const target = idx % 2 === 0 ? blue : gold;
      let prev = null;
      for (let k = 0; k <= SEG; k += 1) {
        const t = k / SEG;
        const it = 1 - t;
        const p = a.clone().multiplyScalar(it * it)
          .add(ctrl.clone().multiplyScalar(2 * it * t))
          .add(b.clone().multiplyScalar(t * t));
        if (prev) target.push(prev.x, prev.y, prev.z, p.x, p.y, p.z);
        prev = p;
      }
    });
    return { blueArcs: new Float32Array(blue), goldArcs: new Float32Array(gold) };
  }, [points]);

  // Gradient ocean core: deep navy at the poles → electric blue toward the lit
  // edge, with a faint fresnel rim for the "earth from space" read.
  const coreMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
          cDeep: { value: new THREE.Color(C_DEEP) },
          cBlue: { value: new THREE.Color(C_BLUE) },
          uRadius: { value: CORE_R },
          uOpacity: { value: 0.9 },
        },
        vertexShader: /* glsl */ `
          varying vec3 vN;
          varying float vY;
          void main() {
            vN = normalize(normalMatrix * normal);
            vY = position.y;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform vec3 cDeep;
          uniform vec3 cBlue;
          uniform float uRadius;
          uniform float uOpacity;
          varying vec3 vN;
          varying float vY;
          void main() {
            float t = clamp(vY / uRadius * 0.5 + 0.5, 0.0, 1.0);
            vec3 col = mix(cDeep, cBlue, smoothstep(0.05, 0.95, t));
            float fres = pow(1.0 - abs(vN.z), 1.5);
            col = mix(col, cBlue, fres * 0.35);
            gl_FragColor = vec4(col, uOpacity);
          }
        `,
      }),
    [CORE_R]
  );

  // Blue atmospheric halo: a back-side shell that lights up only at the rim.
  const atmosphereMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.BackSide,
        depthWrite: false,
        uniforms: {
          cGlow: { value: new THREE.Color(C_ATMO) },
          uStrength: { value: 0.6 },
        },
        vertexShader: /* glsl */ `
          varying vec3 vN;
          void main() {
            vN = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform vec3 cGlow;
          uniform float uStrength;
          varying vec3 vN;
          void main() {
            float i = pow(1.0 - abs(vN.z), 3.0);
            gl_FragColor = vec4(cGlow, i * uStrength);
          }
        `,
      }),
    []
  );

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

    // Subtle node pulse — blue and gold breathe out of phase, like activity.
    const t = state.clock.elapsedTime;
    if (blueNodeMat.current) blueNodeMat.current.opacity = 0.6 + Math.sin(t * 1.4) * 0.22;
    if (goldNodeMat.current) goldNodeMat.current.opacity = 0.7 + Math.sin(t * 1.4 + 2.0) * 0.25;
  });

  return (
    <group ref={group}>
      {/* Blue atmosphere halo */}
      <mesh>
        <sphereGeometry args={[RADIUS * 1.06, 48, 48]} />
        <primitive object={atmosphereMaterial} attach="material" />
      </mesh>

      {/* Gradient ocean core */}
      <mesh>
        <sphereGeometry args={[CORE_R, 64, 64]} />
        <primitive object={coreMaterial} attach="material" />
      </mesh>

      {/* Electric-blue network hairlines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[blueLines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={C_BLUE} transparent opacity={0.32} depthWrite={false} />
      </lineSegments>

      {/* Gold accent lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[goldLines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={C_GOLD} transparent opacity={0.5} depthWrite={false} />
      </lineSegments>

      {/* Faint connection arcs */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[blueArcs, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={C_BLUE} transparent opacity={0.28} depthWrite={false} />
      </lineSegments>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[goldArcs, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={C_GOLD} transparent opacity={0.34} depthWrite={false} />
      </lineSegments>

      {/* Blue nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[bluePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={blueNodeMat}
          color={C_BLUE}
          size={0.045}
          sizeAttenuation
          transparent
          opacity={0.75}
          depthWrite={false}
        />
      </points>

      {/* Gold nodes — slightly larger, the "active" intersections */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[goldPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={goldNodeMat}
          color={C_GOLD}
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
