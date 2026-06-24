import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

gsap.registerPlugin(ScrollTrigger);

/**
 * Provides buttery, inertial smooth scrolling via Lenis and keeps GSAP
 * ScrollTrigger in lockstep with it. Disabled entirely for users who
 * prefer reduced motion.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    lenisRef.current = lenis;
    // Expose for anchor navigation (see lib/scroll.js).
    window.__lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, [prefersReduced]);

  return children;
}
