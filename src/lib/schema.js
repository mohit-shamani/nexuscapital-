// Single source of truth for article JSON-LD. Every schema node is generated
// from a post object here, so the client component (ArticleJsonLd) and the
// build-time prerenderer emit byte-identical structured data and can never
// diverge. Everything is combined into one @graph per article, which keeps the
// nodes cross-referenced (Article → publisher → Organization, Article →
// breadcrumb) and guarantees a single, non-duplicated schema block per page.

import { SITE, BASE_URL, LOGO_URL, DEFAULT_DESCRIPTION, ORG_SAME_AS } from './site.js';
import { getWordCount, parseAuthor, getDefinition } from './article.js';

const ORG_ID = `${BASE_URL}/#organization`;

function articleUrl(post) {
  return `${BASE_URL}/insights/${post.id}`;
}

function absolute(url) {
  if (!url) return undefined;
  return url.startsWith('http') ? url : `${BASE_URL}${url}`;
}

/** Publisher/brand entity, referenced by every article via @id. */
export function organizationNode() {
  const node = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE,
    url: `${BASE_URL}/`,
    description: DEFAULT_DESCRIPTION,
    logo: { '@type': 'ImageObject', url: LOGO_URL },
  };
  if (ORG_SAME_AS.length) node.sameAs = ORG_SAME_AS;
  return node;
}

/** Home → Insights → Article trail. */
export function breadcrumbNode(post) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${articleUrl(post)}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${BASE_URL}/insights` },
      { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl(post) },
    ],
  };
}

/** The article itself (BlogPosting), enriched for EEAT and AEO. */
export function articleNode(post) {
  const url = articleUrl(post);
  const author = parseAuthor(post.author);
  const authorNode = { '@type': 'Person', name: author.name };
  if (author.jobTitle) authorNode.jobTitle = author.jobTitle;

  const node = {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.excerpt,
    articleSection: post.category,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: authorNode,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
    wordCount: getWordCount(post.content),
    isPartOf: { '@id': `${BASE_URL}/insights#blog` },
  };

  const image = absolute(post.image);
  if (image) node.image = [image];
  if (Array.isArray(post.tags) && post.tags.length) node.keywords = post.tags.join(', ');

  // Link the article to the concept it defines (see definitionNode).
  if (getDefinition(post)) node.about = { '@id': `${url}#definition` };

  return node;
}

/**
 * DefinedTerm node for the article's "What is …?" definition — structured data
 * for answer engines, mirroring the visible Definition Block. Returns null when
 * the post has no definition, so nothing empty is emitted.
 */
export function definitionNode(post) {
  const def = getDefinition(post);
  if (!def) return null;
  return {
    '@type': 'DefinedTerm',
    '@id': `${articleUrl(post)}#definition`,
    name: def.term,
    description: def.text,
    inDefinedTermSet: `${BASE_URL}/insights`,
  };
}

/** FAQPage node from the post's `faqs`, or null when there are none. */
export function faqNode(post) {
  if (!Array.isArray(post.faqs) || post.faqs.length === 0) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${articleUrl(post)}#faq`,
    mainEntity: post.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/**
 * The full, de-duplicated schema graph for an article: Organization, breadcrumb,
 * the Article, and (when present) the FAQ — emitted as ONE <script>.
 */
export function articleGraph(post) {
  const graph = [organizationNode(), breadcrumbNode(post), articleNode(post)];
  const definition = definitionNode(post);
  if (definition) graph.push(definition);
  const faq = faqNode(post);
  if (faq) graph.push(faq);
  return { '@context': 'https://schema.org', '@graph': graph };
}

// ---------------------------------------------------------------------------
// Non-article routes. Articles get `articleGraph` above; every other page gets
// `pageGraph` below, so the whole site carries structured data rather than just
// the Insights posts. Same rule as the article graph: one <script> per page,
// nodes cross-referenced by @id, and nothing asserted that is not visible on
// the site. No address, founding date, headcount or registration number is
// emitted, because none is published anywhere on the site.

const WEBSITE_ID = `${BASE_URL}/#website`;

/** The site itself — gives search engines an explicit site name. */
export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE,
    url: `${BASE_URL}/`,
    description: DEFAULT_DESCRIPTION,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

/** Home → <page> trail for an interior route. */
export function pageBreadcrumbNode(path, label) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}${path}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: label, item: `${BASE_URL}${path}` },
    ],
  };
}

/**
 * One Service node per offering listed on a page, provided by the Organization.
 * `items` are the page's own `{ title, summary }` entries — the same copy the
 * visitor reads — so the markup never claims a service the page does not show.
 */
export function serviceNodes(path, items = []) {
  return items
    .filter((item) => item && item.title)
    .map((item) => ({
      '@type': 'Service',
      '@id': `${BASE_URL}${path}#service-${slugifyId(item.title)}`,
      name: item.title,
      serviceType: item.title,
      description: item.summary,
      provider: { '@id': ORG_ID },
      isPartOf: { '@id': WEBSITE_ID },
    }));
}

function slugifyId(text) {
  return String(text)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Full graph for a non-article route.
 *  - Home: Organization + WebSite (no breadcrumb — it is the root).
 *  - Interior: Organization + WebSite + BreadcrumbList, plus Service nodes
 *    where the page lists services.
 */
export function pageGraph({ path, label, services = [] }) {
  const graph = [organizationNode(), websiteNode()];
  if (path !== '/') graph.push(pageBreadcrumbNode(path, label));
  graph.push(...serviceNodes(path, services));
  return { '@context': 'https://schema.org', '@graph': graph };
}
