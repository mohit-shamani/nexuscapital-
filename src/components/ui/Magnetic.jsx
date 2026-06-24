import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

/**
 * Subtle magnetic hover — the element drifts toward the cursor and eases
 * back on leave. Used sparingly on key CTAs for a tactile, premium feel.
 */
export default function Magnetic({ children, strength = 0.35, className }) {
  const ref = useRef(null);
  const prefersReduced = usePrefersReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMove = (e) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
