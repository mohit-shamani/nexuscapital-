import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * Counts up to a target value once it scrolls into view. Used for the
 * headline statistics — restrained, single-run, no looping.
 */
export default function AnimatedCounter({ value, prefix = '', suffix = '', decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + latest.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
      }
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}0{suffix}
    </span>
  );
}
