import { useEffect, useState } from 'react';

/**
 * Scroll-spy for the Table of Contents. Given an ordered list of heading ids,
 * returns the id of the heading currently nearest the top of the viewport.
 * Uses scroll position (fires with Lenis smooth scroll too) rather than
 * IntersectionObserver so the "active" state stays accurate at any scroll speed.
 *
 * @param {string[]} ids     Heading anchor ids in document order.
 * @param {number}   offset  Pixels from the top counted as "reached".
 */
export default function useScrollSpy(ids, offset = 120) {
  const key = ids.join('|');
  const [activeId, setActiveId] = useState(ids[0] || null);

  useEffect(() => {
    if (!ids.length) return undefined;

    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, offset]);

  return activeId;
}
