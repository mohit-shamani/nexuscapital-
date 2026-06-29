// Build-time static HTML generation (post-`vite build`).
//
// This is a pure client-side React SPA, so the single built dist/index.html
// ships the homepage's <title>/description/canonical for EVERY route. JS-less
// crawlers therefore see all pages as duplicates of the homepage. To fix that
// without server-side-rendering the WebGL/animation components (which reference
// window/WebGL and are unsafe under react-dom/server), we generate one static
// index.html per route here, each with its OWN <head>: unique title, meta
// description, canonical, Open Graph / Twitter tags, and (for articles)
// BlogPosting JSON-LD.
//
// On Vercel the generated dist/<route>/index.html files are served directly
// (the filesystem is checked before vercel.json rewrites), and the existing
// SPA-fallback rewrite only handles routes that were not prerendered. The React
// app still boots and renders the full interactive page on the client.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { insights } from '../src/data/insights.js';
import { legalPages } from '../src/data/legal.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const SITE = 'NexusCapital';
const BASE_URL = 'https://nexuscapital.in';
const DEFAULT_DESCRIPTION =
  'NexusCapital delivers institutional-grade crypto asset management for high-net-worth investors — secure portfolio management, digital asset trading and wealth consulting.';

// Compose the brand title exactly as src/components/utils/Seo.jsx does, so the
// prerendered <head> matches what react-helmet-async renders on the client.
function fullTitle(title) {
  return title ? `${title} | ${SITE}` : `${SITE} | Institutional Crypto Asset Management & Digital Wealth`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// --- Route → metadata -------------------------------------------------------
// Static pages mirror the <Seo> props set inside each page component.
const staticRoutes = [
  { path: '/', title: null, description:
      'NexusCapital delivers institutional-grade crypto asset management for high-net-worth investors. Secure portfolio management, digital asset trading & wealth consulting. Book your portfolio review today.' },
  { path: '/firm', title: 'About Us — Disciplined Digital Wealth Management', description:
      'NexusCapital is an independent, partner-owned asset manager bringing decades of institutional discipline, bank-grade security and full transparency to digital asset management.' },
  { path: '/strategies', title: 'Strategies — Crypto Portfolio Management & Risk', description:
      'Actively managed crypto portfolios, wealth preservation, alternative investments and risk-first management — institutional digital asset strategies built around your mandate.' },
  { path: '/insights', title: 'Insights & Research — Digital Asset Market Analysis', description:
      'Institutional research and market outlook on crypto asset allocation, custody, on-chain yield, risk management and regulation from the NexusCapital investment team.' },
  { path: '/expertise', title: 'Our Expertise — Digital Asset Custody & Research', description:
      'From portfolio construction to bank-grade custody, NexusCapital applies institutional rigor to every stage of the digital-asset lifecycle — research, trading, security and governance.' },
  { path: '/contact', title: 'Contact — Book a Portfolio Review', description:
      'Begin a confidential conversation with NexusCapital. Contact our institutional team to discuss your mandate and book a portfolio review. Email info@nexuscapital.in.' },
];

// Legal stubs mirror <Seo title={page.title} description={page.intro} />.
for (const slug of Object.keys(legalPages)) {
  const page = legalPages[slug];
  staticRoutes.push({ path: `/${slug}`, title: page.title, description: page.intro });
}

// Insight articles mirror <Seo title={post.title} description={post.excerpt} />.
const articleRoutes = insights.map((post) => ({
  path: `/insights/${post.id}`,
  title: post.title,
  description: post.excerpt,
  article: post,
}));

const routes = [...staticRoutes, ...articleRoutes];

// --- Head rewriting ---------------------------------------------------------
function buildHead(route) {
  const title = fullTitle(route.title);
  const canonical = `${BASE_URL}${route.path}`;
  const description = route.description || DEFAULT_DESCRIPTION;
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const tags = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:type" content="${route.article ? 'article' : 'website'}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:site_name" content="${SITE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
  ];

  if (route.article) {
    const a = route.article;
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: a.title,
      description: a.excerpt,
      datePublished: a.date,
      author: { '@type': 'Person', name: a.author },
      publisher: { '@type': 'Organization', name: SITE },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      articleSection: a.category,
    };
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`
    );
  }

  return tags.join('\n    ');
}

// Replace the homepage head block (between the two markers in index.html) with
// the route-specific tags. Markers are injected into index.html so this stays a
// single, robust string replacement rather than brittle per-tag regexes.
const START = '<!-- prerender:head:start -->';
const END = '<!-- prerender:head:end -->';

function applyHead(template, route) {
  const startIdx = template.indexOf(START);
  const endIdx = template.indexOf(END);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error('index.html is missing the prerender head markers.');
  }
  const before = template.slice(0, startIdx + START.length);
  const after = template.slice(endIdx);
  return `${before}\n    ${buildHead(route)}\n    ${after}`;
}

async function run() {
  const templatePath = join(DIST, 'index.html');
  const template = await readFile(templatePath, 'utf8');

  let count = 0;
  for (const route of routes) {
    const html = applyHead(template, route);
    // '/' -> dist/index.html ; '/foo' -> dist/foo/index.html
    const outPath =
      route.path === '/'
        ? join(DIST, 'index.html')
        : join(DIST, ...route.path.split('/').filter(Boolean), 'index.html');
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf8');
    count += 1;
  }

  console.log(`Prerendered ${count} routes with unique <head> metadata.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
