import { Helmet } from 'react-helmet-async';

const SITE = 'NexusCapital';
const BASE_URL = 'https://nexuscapital.in';
const DEFAULT_DESCRIPTION =
  'NexusCapital delivers institutional-grade crypto asset management for high-net-worth investors — secure portfolio management, digital asset trading and wealth consulting.';

/**
 * Per-page SEO metadata. Renders a unique <title>, meta description,
 * canonical URL and Open Graph / Twitter tags for each route.
 *
 * @param {string} title    Page-specific title (composed with the brand).
 * @param {string} [description]  Meta description; falls back to the brand default.
 * @param {string} [path]   Route path, used to build the canonical URL.
 * @param {boolean} [noindex]  When true, instructs crawlers not to index the page.
 */
export default function Seo({ title, description = DEFAULT_DESCRIPTION, path = '', noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE}` : `${SITE} | Institutional Crypto Asset Management & Digital Wealth`;
  const canonical = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
