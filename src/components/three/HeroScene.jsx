import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, AdaptiveDpr, PerformanceMonitor } from '@react-three/drei';
import ParticleGlobe from './ParticleGlobe.jsx';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

/**
 * The hero's WebGL layer: a single particle globe, softly lit by the
 * materials themselves. Capped, adaptive pixel ratio keeps it light;
 * disabled entirely for reduced-motion users.
 */
export default function HeroScene() {
  const pointer = useRef({ x: 0, y: 0 });
  const [dpr, setDpr] = useState(1.5);
  const prefersReduced = usePrefersReducedMotion();

  const handlePointerMove = (e) => {
    pointer.current = {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1,
    };
  };

  if (prefersReduced) return null;

  return (
    <div
      className="absolute inset-0 h-full w-full"
      onPointerMove={handlePointerMove}
      aria-hidden
    >
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 6], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop="always"
      >
        <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)} />
        <AdaptiveDpr pixelated={false} />

        <Suspense fallback={null}>
          <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.35}>
            <ParticleGlobe pointer={pointer} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
