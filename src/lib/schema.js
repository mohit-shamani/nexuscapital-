// Single source of truth for article JSON-LD. Every schema node is generated
// from a post object here, so the client component (ArticleJsonLd) and the
// build-time prerenderer emit byte-identical structured data and can never
// diverge. Everything is combined into one @graph per article, which keeps the
// nodes cross-referenced (Article → publisher → Organization, Article →
// breadcrumb) and guarantees a single, non-duplicated schema block per page.

import { SITE, BASE_URL, LOGO_URL, DEFAULT_DESCRIPTION, ORG_SAME_AS } from './site.js';
import { getWordCount, parseAuthor } from './article.js';

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

  return node;
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
  const faq = faqNode(post);
  if (faq) graph.push(faq);
  return { '@context': 'https://schema.org', '@graph': graph };
}
