import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import { MathUtils } from 'three';

/**
 * A slowly rotating, gently distorting faceted form rendered as a
 * fine wireframe over a near-black core. It reads as an abstract
 * institution — structured, quiet, in perpetual slow motion. It drifts
 * subtly toward the pointer but never reacts sharply.
 */
export default function NexusObject({ pointer }) {
  const group = useRef(null);
  const wire = useRef(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    // Continuous, very slow base rotation.
    group.current.rotation.y += delta * 0.08;
    group.current.rotation.x += delta * 0.02;

    // Subtle parallax drift toward the pointer — eased, never abrupt.
    const targetX = pointer.current.y * 0.12;
    const targetY = pointer.current.x * 0.18;
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, group.current.rotation.x + targetX, 0.02);
    group.current.position.x = MathUtils.lerp(group.current.position.x, pointer.current.x * 0.25, 0.04);
    group.current.position.y = MathUtils.lerp(group.current.position.y, pointer.current.y * -0.2, 0.04);

    if (wire.current) {
      wire.current.rotation.y -= delta * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Solid core with a slow organic distortion */}
      <Icosahedron args={[1.5, 6]}>
        <MeshDistortMaterial
          color="#0F1E2E"
          roughness={0.35}
          metalness={0.6}
          distort={0.18}
          speed={0.8}
          envMapIntensity={0.6}
        />
      </Icosahedron>

      {/* Faceted brass wireframe shell, slightly larger, counter-rotating */}
      <Icosahedron ref={wire} args={[1.62, 1]}>
        <meshBasicMaterial color="#B08D57" wireframe transparent opacity={0.25} />
      </Icosahedron>
    </group>
  );
}
