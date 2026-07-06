import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin, fixed reading-progress bar pinned to the very top of the viewport.
 * Driven by scroll position and eased with a spring for a premium feel. Uses a
 * transform (scaleX) only, so it never triggers layout or reflow.
 */
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-brass"
    />
  );
}
