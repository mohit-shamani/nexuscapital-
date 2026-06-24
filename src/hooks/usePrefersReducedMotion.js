import { useEffect, useState } from 'react';

/**
 * Tracks the user's reduced-motion preference so animation-heavy
 * components can gracefully degrade. Honouring this is essential to
 * keeping the experience accessible — and to a high Lighthouse score.
 */
export default function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(query.matches);

    const handler = (event) => setPrefersReduced(event.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}
