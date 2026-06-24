// Anchor scrolling that cooperates with Lenis smooth scroll when present,
// and falls back to native behaviour for reduced-motion users.

const NAV_OFFSET = -72; // sit just below the fixed navbar

export function scrollToId(id) {
  if (typeof document === 'undefined') return;

  const isTop = id === 'home' || id === 'top';
  const target = isTop ? null : document.getElementById(id);
  if (!isTop && !target) return;

  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(isTop ? 0 : target, {
      offset: isTop ? 0 : NAV_OFFSET,
      duration: 1.3,
    });
    return;
  }

  if (isTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
