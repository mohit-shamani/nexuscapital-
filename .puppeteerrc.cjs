const { join } = require('path');

/**
 * Keep Puppeteer's Chromium inside node_modules.
 *
 * By default Puppeteer downloads the browser to ~/.cache/puppeteer at install
 * time. Vercel restores a cached node_modules between builds, which makes
 * `npm install` a no-op — so Puppeteer's postinstall never re-runs and that
 * home-directory cache is empty when the build starts. `puppeteer.launch()`
 * then fails and the prerender step cannot produce static HTML.
 *
 * Pointing the cache inside node_modules ties the browser's lifetime to the
 * dependency tree, so it is preserved and restored together with it.
 * This is Puppeteer's own documented fix for hosts that cache node_modules.
 */
module.exports = {
  cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
};
