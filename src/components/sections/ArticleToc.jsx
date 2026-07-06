import { scrollToId } from '../../lib/scroll.js';

/**
 * Table of Contents for an article. Renders the H2/H3 headings extracted from
 * the post content, smooth-scrolls to anchors (via the shared Lenis-aware
 * helper) and marks the active heading. Presentation-only — the caller owns the
 * active id (see useScrollSpy) so the same list can appear in multiple slots.
 *
 * @param {{ id, text, level }[]} headings
 * @param {string} activeId
 */
export default function ArticleToc({ headings = [], activeId }) {
  if (headings.length < 2) return null;

  const handleClick = (event, id) => {
    event.preventDefault();
    scrollToId(id);
    if (typeof history !== 'undefined') {
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <nav aria-label="Table of contents">
      <p className="eyebrow mb-4">On this page</p>
      <ul className="space-y-1">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <li key={h.id} className={h.level === 3 ? 'pl-4' : ''}>
              <a
                href={`#${h.id}`}
                onClick={(e) => handleClick(e, h.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`block border-l-2 py-1 pl-3 text-sm leading-snug transition-colors ${
                  isActive
                    ? 'border-brass text-ink'
                    : 'border-ink/10 text-slatey hover:text-ink'
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
