// Framework-free helpers that derive everything the article template needs
// straight from a post object in src/data/insights.js. Pure functions only, so
// they are shared by the React page, the JSON-LD builders and the prerenderer.
//
// Content model (see insights.js): a `content` entry is either
//   - a string                    → paragraph
//   - { h: '…' }                  → H2 sub-heading
//   - { h3: '…' }                 → H3 sub-heading (optional, future articles)
//   - { p: [ …segments… ] }       → paragraph with inline links/markers
// A segment is a string, { to, text }, { href, text } or { source }.

const WORDS_PER_MINUTE = 200;

/** Turn heading text into a stable, URL-safe anchor id. */
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Extract an ordered list of headings for the Table of Contents.
 * Returns `[{ index, id, text, level }]` where `index` is the position in the
 * original content array (so the renderer can attach the matching anchor id)
 * and duplicate slugs are de-duped deterministically.
 */
export function extractHeadings(content = []) {
  const seen = new Map();
  const headings = [];

  content.forEach((block, index) => {
    if (!block || typeof block !== 'object') return;
    let text;
    let level;
    if (typeof block.h === 'string') {
      text = block.h;
      level = 2;
    } else if (typeof block.h3 === 'string') {
      text = block.h3;
      level = 3;
    } else {
      return;
    }

    const base = slugify(text) || 'section';
    const count = seen.get(base) || 0;
    seen.set(base, count + 1);
    const id = count === 0 ? base : `${base}-${count + 1}`;

    headings.push({ index, id, text, level });
  });

  return headings;
}

/** Flatten article content to plain text (headings + paragraph copy). */
export function getPlainText(content = []) {
  const parts = [];
  for (const block of content) {
    if (typeof block === 'string') {
      parts.push(block);
    } else if (block && typeof block === 'object') {
      if (typeof block.h === 'string') parts.push(block.h);
      else if (typeof block.h3 === 'string') parts.push(block.h3);
      else if (Array.isArray(block.p)) {
        for (const seg of block.p) {
          if (typeof seg === 'string') parts.push(seg);
          else if (seg && typeof seg.text === 'string') parts.push(seg.text);
        }
      }
    }
  }
  return parts.join(' ');
}

/** Word count of the article body — used for reading time and schema. */
export function getWordCount(content = []) {
  const text = getPlainText(content).trim();
  if (!text) return 0;
  return text.split(/\s+/).length;
}

/**
 * Estimated reading time in whole minutes, computed from the content — never
 * hardcoded. Display as `${computeReadingTime(post.content)} min read`.
 */
export function computeReadingTime(content = [], wpm = WORDS_PER_MINUTE) {
  return Math.max(1, Math.round(getWordCount(content) / wpm));
}

/** Split an "Name, Role" author string into a structured author. */
export function parseAuthor(author) {
  if (!author) return { name: '' };
  const [name, ...rest] = String(author).split(',');
  const jobTitle = rest.join(',').trim();
  return { name: name.trim(), jobTitle: jobTitle || undefined };
}

/**
 * Automatically choose related articles — never hardcoded. Ranks other posts by
 * shared category (strong signal) and shared `tags` (if present), then falls
 * back to recency so the list is always full. Deterministic and content-driven.
 */
export function getRelatedPosts(post, all = [], limit = 3) {
  const tags = Array.isArray(post.tags) ? post.tags : [];

  const scored = all
    .filter((p) => p.id !== post.id)
    .map((p) => {
      let score = 0;
      if (p.category && p.category === post.category) score += 2;
      if (tags.length && Array.isArray(p.tags)) {
        score += p.tags.filter((t) => tags.includes(t)).length;
      }
      return { post: p, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      // Tie-break on recency (newest first).
      return new Date(b.post.date) - new Date(a.post.date);
    });

  return scored.slice(0, limit).map((s) => s.post);
}
