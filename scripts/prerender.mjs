// Build-time static prerendering (runs after `vite build`).
//
// This is a client-rendered React SPA. Vite emits a single dist/index.html whose
// body is nothing but <div id="root"></div>, so a crawler that does not execute
// JavaScript sees an empty page on every route — no headings, no copy. That
// includes GPTBot and the other AI crawlers robots.txt explicitly allows.
//
// This script fixes that in two passes:
//
//   PASS 1 — head. Write one dist/<route>/index.html per route, each with its
//     own <title>, description, canonical, Open Graph / Twitter tags and JSON-LD.
//     Schema comes from src/lib/schema.js, the same module the React app uses,
//     so prerendered and client-rendered structured data cannot drift.
//
//   PASS 2 — body. Serve dist over localhost, load every route in headless
//     Chrome, let the real app render, then write the resulting DOM into
//     <div id="root">. A real browser is used rather than react-dom/server
//     because the app renders WebGL (@react-three/fiber), Lenis smooth scroll
//     and framer-motion — all of which touch window/WebGL and are unsafe under
//     Node SSR. Snapshotting the real thing needs no application changes.
//
// PASS 2 is fail-soft: if Chrome cannot launch (a build image without one, say),
// the script warns and leaves the PASS 1 output in place rather than failing the
// deploy. The site degrades to head-only metadata — never to a broken build.
//
// On Vercel the generated dist/<route>/index.html files are served directly (the
// filesystem is checked before vercel.json rewrites); the SPA-fallback rewrite
// only handles routes that were not prerendered. main.jsx uses createRoot(), not
// hydrateRoot(), so React replaces the prerendered DOM on boot — crawlers get
// full HTML, users get paint before JS, and there is no hydration mismatch.

import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { insights } from '../src/data/insights.js';
import { legalPages } from '../src/data/legal.js';
import { strategies } from '../src/data/strategies.js';
import { expertiseAreas } from '../src/data/expertise.js';
import { SITE, BASE_URL, DEFAULT_DESCRIPTION, OG_IMAGE } from '../src/lib/site.js';
import { articleGraph, pageGraph } from '../src/lib/schema.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4178;

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
// Static pages mirror the <Seo> props set inside each page component. `label`
// feeds the BreadcrumbList; `services` feeds Service schema and is drawn from
// the page's own visible content.
const staticRoutes = [
  { path: '/', label: 'Home', title: null, description:
      'NexusCapital delivers institutional-grade crypto asset management for high-net-worth investors. Secure portfolio management, digital asset trading & wealth consulting. Book your portfolio review today.' },
  { path: '/firm', label: 'About', title: 'About Us — Disciplined Digital Wealth Management', description:
      'NexusCapital is an independent, partner-owned asset manager bringing decades of institutional discipline, bank-grade security and full transparency to digital asset management.' },
  { path: '/strategies', label: 'Strategies', title: 'Strategies — Crypto Portfolio Management & Risk', description:
      'Actively managed crypto portfolios, wealth preservation, alternative investments and risk-first management — institutional digital asset strategies built around your mandate.',
    services: strategies },
  { path: '/insights', label: 'Insights', title: 'Insights & Research — Digital Asset Market Analysis', description:
      'Institutional research and market outlook on crypto asset allocation, custody, on-chain yield, risk management and regulation from the NexusCapital investment team.' },
  { path: '/expertise', label: 'Our Expertise', title: 'Our Expertise — Digital Asset Custody & Research', description:
      'From portfolio construction to bank-grade custody, NexusCapital applies institutional rigor to every stage of the digital-asset lifecycle — research, trading, security and governance.',
    services: expertiseAreas },
  { path: '/contact', label: 'Contact', title: 'Contact — Book a Portfolio Review', description:
      'Begin a confidential conversation with NexusCapital. Contact our institutional team to discuss your mandate and book a portfolio review. Email info@nexuscapital.in.' },
];

// Legal stubs mirror <Seo title={page.title} description={page.intro} />.
for (const slug of Object.keys(legalPages)) {
  const page = legalPages[slug];
  staticRoutes.push({ path: `/${slug}`, label: page.title, title: page.title, description: page.intro });
}

// Insight articles mirror <Seo title={post.seoTitle || post.title} … />.
const articleRoutes = insights.map((post) => ({
  path: `/insights/${post.id}`,
  title: post.seoTitle || post.title,
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

  // Share card on every route, so no shared link renders without a preview.
  const raw = route.article?.image || OG_IMAGE;
  const cardImage = raw.startsWith('http') ? raw : `${BASE_URL}${raw}`;
  const alt = `${SITE} — ${route.title || 'Institutional Crypto Asset Management'}`;
  tags.push(
    `<meta property="og:image" content="${escapeHtml(cardImage)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeHtml(alt)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(cardImage)}" />`
  );

  if (route.article) {
    const a = route.article;
    tags.push(
      `<meta property="article:published_time" content="${escapeHtml(a.date)}" />`,
      `<meta property="article:modified_time" content="${escapeHtml(a.updated || a.date)}" />`
    );
    if (a.category) tags.push(`<meta property="article:section" content="${escapeHtml(a.category)}" />`);
    if (a.author) tags.push(`<meta property="article:author" content="${escapeHtml(a.author)}" />`);
  }

  // Structured data. Articles get the full BlogPosting graph; every other route
  // gets Organization + WebSite + BreadcrumbList (+ Service where the page lists
  // services). Tagged so the client strips it on hydration — never duplicated.
  const graph = route.article
    ? articleGraph(route.article)
    : pageGraph({ path: route.path, label: route.label, services: route.services });
  tags.push(
    `<script type="application/ld+json" data-prerendered-jsonld>${JSON.stringify(graph).replace(/</g, '\\u003c')}</script>`
  );

  return tags.join('\n    ');
}

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

// '/' -> dist/index.html ; '/foo' -> dist/foo/index.html
function outPathFor(routePath) {
  return routePath === '/'
    ? join(DIST, 'index.html')
    : join(DIST, ...routePath.split('/').filter(Boolean), 'index.html');
}

// --- PASS 2 helpers ---------------------------------------------------------
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.woff2': 'font/woff2', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain',
};

/** Static server over dist that mirrors Vercel: filesystem first, SPA fallback. */
function serveDist() {
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const candidates = [join(DIST, urlPath), join(DIST, urlPath, 'index.html'), join(DIST, 'index.html')];
    for (const file of candidates) {
      try {
        const s = await stat(file);
        if (!s.isFile()) continue;
        res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
        createReadStream(file).pipe(res);
        return;
      } catch {
        /* try the next candidate */
      }
    }
    res.writeHead(404).end('not found');
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

/**
 * Render one route in the browser and return the settled #root markup.
 *
 * The page is scrolled top to bottom first so framer-motion's `whileInView`
 * animations fire; anything still mid-flight then has its inline opacity and
 * transform neutralised. Without this the snapshot would contain text that is in
 * the DOM but painted at opacity 0, or translated out of its overflow-hidden
 * mask (RevealText starts every word at y:110%).
 */
async function snapshotRoute(page, routePath) {
  await page.goto(`http://127.0.0.1:${PORT}${routePath}`, { waitUntil: 'networkidle0', timeout: 45000 });
  await page.waitForSelector('#root h1', { timeout: 20000 }).catch(() => {});

  await page.evaluate(async () => {
    // Drive the whole page through the viewport to trigger in-view animations.
    const step = Math.round(window.innerHeight * 0.6);
    const limit = document.body.scrollHeight + window.innerHeight;
    for (let y = 0; y < limit; y += step) {
      window.scrollTo(0, y);
      document.documentElement.scrollTop = y;
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    await new Promise((r) => setTimeout(r, 400));
  });

  return page.evaluate(() => {
    // Settle anything framer-motion left part-way through.
    document.querySelectorAll('#root [style]').forEach((el) => {
      const s = el.style;
      if (s.opacity !== '' && parseFloat(s.opacity) < 1) s.opacity = '1';
      if (s.transform && s.transform !== 'none') s.transform = 'none';
      if (s.visibility === 'hidden') s.visibility = 'visible';
      if (s.height === '0px') s.removeProperty('height');
    });
    // The WebGL hero paints to a canvas that cannot serialise; drop its buffer
    // attributes so the static file stays small and valid.
    document.querySelectorAll('#root canvas').forEach((c) => {
      c.removeAttribute('width');
      c.removeAttribute('height');
    });
    return document.getElementById('root').innerHTML;
  });
}

// --- Run --------------------------------------------------------------------
async function run() {
  const templatePath = join(DIST, 'index.html');
  const template = await readFile(templatePath, 'utf8');

  // PASS 1 — per-route <head>.
  const heads = new Map();
  for (const route of routes) {
    const html = applyHead(template, route);
    heads.set(route.path, html);
    const outPath = outPathFor(route.path);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf8');
  }
  console.log(`Prerendered ${routes.length} routes with unique <head> metadata.`);

  // PASS 2 — body snapshot. Fail-soft: a missing browser must not break the build.
  let server;
  let browser;
  try {
    const { default: puppeteer } = await import('puppeteer');
    server = await serveDist();
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();
    // A tall viewport puts more of each page in view at once, so fewer
    // scroll-triggered animations are still running when we snapshot.
    await page.setViewport({ width: 1440, height: 2200, deviceScaleFactor: 1 });

    let done = 0;
    let skipped = 0;
    for (const route of routes) {
      const body = await snapshotRoute(page, route.path);
      if (!body || body.length < 500) {
        skipped += 1;
        console.warn(`  ! ${route.path} produced ${body ? body.length : 0} bytes — left as shell`);
        continue;
      }
      const html = heads.get(route.path).replace('<div id="root"></div>', `<div id="root">${body}</div>`);
      await writeFile(outPathFor(route.path), html, 'utf8');
      done += 1;
    }
    console.log(`Prerendered ${done}/${routes.length} route bodies to static HTML.`);
    if (skipped > 0) throw new Error(`${skipped} route(s) produced no body`);
  } catch (err) {
    // Loud by design. An earlier version swallowed this and shipped head-only
    // HTML, which looked like a successful deploy while every route still
    // served an empty <div id="root"></div>. A build that cannot produce the
    // static content it exists to produce must fail, not degrade quietly.
    // Set PRERENDER_OPTIONAL=1 to downgrade this to a warning deliberately.
    console.error('\n=========================================================');
    console.error('  PRERENDER FAILED — route bodies were NOT written.');
    console.error(`  ${err.message}`);
    console.error('');
    console.error('  Every route would ship an empty <div id="root"></div>.');
    console.error('  Chromium is expected in node_modules/.cache/puppeteer');
    console.error('  (see .puppeteerrc.cjs). Fix with:');
    console.error('    npx puppeteer browsers install chrome');
    console.error('=========================================================\n');
    if (!process.env.PRERENDER_OPTIONAL) {
      if (browser) await browser.close().catch(() => {});
      if (server) server.close();
      process.exit(1);
    }
  } finally {
    if (browser) await browser.close().catch(() => {});
    if (server) server.close();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
