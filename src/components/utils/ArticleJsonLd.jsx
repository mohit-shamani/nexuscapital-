import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { articleGraph } from '../../lib/schema.js';

/**
 * Emits the article's combined JSON-LD graph (Organization + Breadcrumb +
 * Article + FAQ) as a single script — the same graph the prerenderer bakes into
 * the static HTML.
 *
 * To avoid duplicate schema after hydration, on mount we strip the prerendered
 * block (tagged `data-prerendered-jsonld`) and let this Helmet-managed copy take
 * over. No-JS crawlers keep the static block; JS clients end up with exactly one.
 */
export default function ArticleJsonLd({ post }) {
  useEffect(() => {
    document
      .querySelectorAll('script[data-prerendered-jsonld]')
      .forEach((node) => node.remove());
  }, []);

  const graph = articleGraph(post);

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
}
