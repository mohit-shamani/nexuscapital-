// Single source of truth for site-wide identity used by SEO metadata, JSON-LD
// schema and the build-time prerenderer. Keeping these here (framework-free)
// lets both the React app and scripts/prerender.mjs import the exact same
// values, so client-rendered and prerendered output can never drift.

export const SITE = 'NexusCapital';
export const BASE_URL = 'https://nexuscapital.in';

export const DEFAULT_DESCRIPTION =
  'NexusCapital delivers institutional-grade crypto asset management for high-net-worth investors — secure portfolio management, digital asset trading and wealth consulting.';

// Absolute URL to the brand mark, used as the Organization logo in JSON-LD.
export const LOGO_URL = `${BASE_URL}/favicon.svg`;

// Public profiles, surfaced as Organization.sameAs for entity disambiguation.
// Add real URLs here as they come online — every schema graph picks them up.
export const ORG_SAME_AS = [];
