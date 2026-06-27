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

export default function InsightPost() {
  const { id } = useParams();
  const post = insights.find((p) => p.id === id);

  // Unknown slug — fall through to the 404 experience.
  if (!post) return <NotFound />;

  const related = insights.filter((p) => p.id !== post.id).slice(0, 3);

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
            {post.content?.map((block, i) =>
              typeof block === 'string' ? (
                <p key={i} className="text-lg leading-relaxed text-slatey">
                  {block}
                </p>
              ) : (
                <h2 key={i} className="pt-6 font-serif text-2xl font-light text-ink md:text-3xl">
                  {block.h}
                </h2>
              )
            )}
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
            <p className="eyebrow mb-12">Continue reading</p>
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
