import { Helmet } from 'react-helmet-async';
import { SITE, BASE_URL, DEFAULT_DESCRIPTION } from '../../lib/site.js';

/**
 * Per-page SEO metadata. Renders a unique <title>, meta description, canonical
 * URL and Open Graph / Twitter tags for each route. When `type="article"` and an
 * `article` object are passed, it also emits article-specific Open Graph tags —
 * all derived automatically from the post, so no per-article editing is needed.
 *
 * @param {string}  title         Page-specific title (composed with the brand).
 * @param {string}  [description] Meta description; falls back to the brand default.
 * @param {string}  [path]        Route path, used to build the canonical URL.
 * @param {boolean} [noindex]     When true, instructs crawlers not to index.
 * @param {'website'|'article'} [type]  Open Graph object type.
 * @param {string}  [image]       Social share image (absolute or root-relative).
 * @param {object}  [article]     Post object; enables article:* Open Graph tags.
 */
export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  noindex = false,
  type = 'website',
  image,
  article,
}) {
  const fullTitle = title
    ? `${title} | ${SITE}`
    : `${SITE} | Institutional Crypto Asset Management & Digital Wealth`;
  const canonical = `${BASE_URL}${path}`;
  const ogImage = image ? (image.startsWith('http') ? image : `${BASE_URL}${image}`) : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Article-specific Open Graph (only for blog posts) */}
      {article && <meta property="article:published_time" content={article.date} />}
      {article && (
        <meta property="article:modified_time" content={article.updated || article.date} />
      )}
      {article?.category && <meta property="article:section" content={article.category} />}
      {article?.author && <meta property="article:author" content={article.author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
