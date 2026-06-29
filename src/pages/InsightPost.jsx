import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper.jsx';
import Seo from '../components/utils/Seo.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import Container from '../components/ui/Container.jsx';
import CTA from '../components/sections/CTA.jsx';
import PostFaq from '../components/sections/PostFaq.jsx';
import InsightVisual from '../components/ui/InsightVisual.jsx';
import NotFound from './NotFound.jsx';
import { insights } from '../data/insights.js';
import { fadeUp } from '../lib/motion.js';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// A paragraph segment is a plain string, an internal link ({ to, text }), an
// external link ({ href, text }) or a to-be-filled source marker ({ source }).
function renderSegment(seg, key) {
  if (typeof seg === 'string') return seg;
  if (seg.to) {
    return (
      <Link
        key={key}
        to={seg.to}
        className="font-medium text-ink underline decoration-brass/40 underline-offset-4 transition-colors hover:text-brass hover:decoration-brass"
      >
        {seg.text}
      </Link>
    );
  }
  if (seg.href) {
    return (
      <a
        key={key}
        href={seg.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-ink underline decoration-brass/40 underline-offset-4 transition-colors hover:text-brass hover:decoration-brass"
      >
        {seg.text}
      </a>
    );
  }
  // Unfilled external source — visibly marked so it is easy to find and replace.
  if (seg.source) {
    return (
      <sup
        key={key}
        title="Add an authoritative source"
        className="mx-0.5 whitespace-nowrap rounded bg-brass/15 px-1 align-super text-[0.65em] font-medium text-brass"
      >
        {`{{ADD AUTHORITATIVE SOURCE: ${seg.source}}}`}
      </sup>
    );
  }
  return null;
}

// Resolve the curated "Related Insights" list, falling back to other posts so
// the section always renders at least two cards.
function relatedPosts(post, all) {
  const picked = (post.related || [])
    .map((id) => all.find((p) => p.id === id))
    .filter(Boolean);
  for (const p of all) {
    if (picked.length >= 3) break;
    if (p.id !== post.id && !picked.includes(p)) picked.push(p);
  }
  return picked.slice(0, 3);
}

export default function InsightPost() {
  const { id } = useParams();
  const post = insights.find((p) => p.id === id);

  // Unknown slug — fall through to the 404 experience.
  if (!post) return <NotFound />;

  const related = relatedPosts(post, insights);

  return (
    <PageWrapper>
      <Seo
        title={post.title}
        path={`/insights/${post.id}`}
        description={post.excerpt}
      />

      <PageHero eyebrow={post.category} title={post.title} intro={post.excerpt} />

      <article className="bg-ivory py-20 md:py-28">
        <Container className="max-w-3xl">
          {/* Byline */}
          <div className="flex flex-wrap items-center gap-4 border-b border-ink/10 pb-8 text-sm text-slatey">
            <span className="text-ink">{post.author}</span>
            <span className="h-1 w-1 rounded-full bg-slatey/50" />
            <span>{formatDate(post.date)}</span>
            <span className="h-1 w-1 rounded-full bg-slatey/50" />
            <span>{post.readingTime} read</span>
          </div>

          {/* Lead artwork */}
          <div className="mt-10 aspect-[16/9] w-full overflow-hidden">
            <InsightVisual category={post.category} />
          </div>

          {/* Body */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-8% 0px' }}
            className="mt-12 space-y-6"
          >
            {post.content?.map((block, i) => {
              if (typeof block === 'string') {
                return (
                  <p key={i} className="text-lg leading-relaxed text-slatey">
                    {block}
                  </p>
                );
              }
              if (block.h) {
                return (
                  <h2 key={i} className="pt-6 font-serif text-2xl font-light text-ink md:text-3xl">
                    {block.h}
                  </h2>
                );
              }
              // Paragraph carrying inline links and/or source markers.
              return (
                <p key={i} className="text-lg leading-relaxed text-slatey">
                  {block.p.map((seg, j) => renderSegment(seg, j))}
                </p>
              );
            })}
          </motion.div>

          {/* Per-article FAQ + FAQPage JSON-LD */}
          <PostFaq faqs={post.faqs} />

          <div className="mt-16 border-t border-ink/10 pt-8">
            <Link to="/insights" className="link-underline text-sm font-medium text-ink">
              ← All insights
            </Link>
          </div>
        </Container>
      </article>

      {/* Related reading */}
      {related.length > 0 && (
        <section className="bg-ivory-50 py-20 md:py-28">
          <Container>
            <p className="eyebrow mb-12">Related insights</p>
            <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
              {related.map((rel, i) => (
                <motion.div
                  key={rel.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link to={`/insights/${rel.id}`} className="group flex flex-col">
                    <div className="mb-6 aspect-[3/2] w-full overflow-hidden">
                      <InsightVisual
                        category={rel.category}
                        className="transition-transform duration-700 ease-expo group-hover:scale-105"
                      />
                    </div>
                    <span className="mb-3 text-xs font-medium uppercase tracking-micro text-brass">
                      {rel.category}
                    </span>
                    <h3 className="font-serif text-xl font-light leading-snug text-ink transition-colors group-hover:text-brass">
                      {rel.title}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTA />
    </PageWrapper>
  );
}
