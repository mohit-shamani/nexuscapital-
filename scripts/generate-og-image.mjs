// One-off generator for the site's social share card (public/og-image.png).
//
// Run with: node scripts/generate-og-image.mjs
//
// Not part of `npm run build` — the PNG is committed, so the build stays fast
// and deterministic. Re-run only when the brand or tagline changes.
//
// The card is composed in HTML using the site's own palette and typefaces, then
// screenshotted at exactly 1200x630 (the Open Graph / Twitter summary_large_image
// size). It states nothing that is not already on the site.

import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'og-image.png');

const INK = '#0A1420';
const IVORY = '#F6F3EC';
const BRASS = '#B08D57';

const html = `<!doctype html>
<html><head><meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500&display=swap" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; background: ${INK}; color: ${IVORY};
         font-family: Inter, system-ui, sans-serif; overflow: hidden; }
  .grid { position: absolute; inset: 0; opacity: 0.05;
          background-image: linear-gradient(${BRASS} 1px, transparent 1px),
                            linear-gradient(90deg, ${BRASS} 1px, transparent 1px);
          background-size: 64px 64px; }
  .rule { position: absolute; top: 0; left: 0; right: 0; height: 4px; background: ${BRASS}; }
  .wrap { position: relative; height: 100%; display: flex; flex-direction: column;
          justify-content: space-between; padding: 84px 90px; }
  .mark { font-family: Fraunces, Georgia, serif; font-size: 34px; font-weight: 500;
          letter-spacing: -0.02em; }
  .mark .dot { color: ${BRASS}; }
  .mark .sub { font-family: Inter, sans-serif; font-size: 15px; font-weight: 500;
               text-transform: uppercase; letter-spacing: 0.18em; opacity: 0.5;
               margin-left: 8px; }
  h1 { font-family: Fraunces, Georgia, serif; font-size: 74px; font-weight: 300;
       line-height: 1.08; letter-spacing: -0.015em; max-width: 940px; }
  .dash { width: 74px; height: 2px; background: ${BRASS}; margin-bottom: 34px; }
  .foot { display: flex; align-items: center; gap: 18px; font-size: 19px;
          letter-spacing: 0.02em; color: rgba(246,243,236,0.6); }
  .foot .sep { width: 5px; height: 5px; border-radius: 50%; background: ${BRASS}; }
</style></head>
<body>
  <div class="grid"></div><div class="rule"></div>
  <div class="wrap">
    <div class="mark">Nexus<span class="dot">.</span><span class="sub">Capital</span></div>
    <div>
      <div class="dash"></div>
      <h1>Institutional Crypto<br />Asset Management</h1>
    </div>
    <div class="foot"><span>Portfolio Management</span><span class="sep"></span><span>Custody</span><span class="sep"></span><span>Research</span></div>
  </div>
</body></html>`;

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.evaluateHandle('document.fonts.ready');
const buf = await page.screenshot({ type: 'png' });
await writeFile(OUT, buf);
await browser.close();
console.log(`Wrote ${OUT} (${(buf.length / 1024).toFixed(1)} KB, 1200x630)`);
