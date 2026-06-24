import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import Container from '../components/ui/Container.jsx';
import CTA from '../components/sections/CTA.jsx';
import { insights } from '../data/insights.js';
import { fadeUp } from '../lib/motion.js';
import { cn } from '../lib/utils.js';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const categories = ['All', ...new Set(insights.map((p) => p.category))];

export default function Insights() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? insights : insights.filter((p) => p.category === filter);
  const [featured, ...rest] = visible;

  return (
    <PageWrapper>
      <PageHero
        eyebrow="Insights"
        title="Perspectives for the long horizon."
        intro="Our investment thinking, made transparent — measured analysis of the forces shaping markets, capital and the institutions we serve."
      />

      <section className="bg-ivory py-20 md:py-28">
        <Container>
          {/* Filters */}
          <div className="mb-14 flex flex-wrap gap-3 border-b border-ink/10 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  'rounded-full border px-5 py-2 text-sm transition-colors duration-300',
                  filter === cat
                    ? 'border-ink bg-ink text-ivory'
                    : 'border-ink/15 text-slatey hover:border-ink/40 hover:text-ink'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured */}
          {featured && (
            <motion.article
              key={featured.id}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="group mb-16 grid grid-cols-1 gap-8 border-b border-ink/10 pb-16 lg:grid-cols-12"
            >
              <div className="lg:col-span-7">
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-ink-600 via-ink to-ink-900" />
              </div>
              <div className="flex flex-col justify-center lg:col-span-5">
                <div className="mb-5 flex items-center gap-4 text-xs">
                  <span className="font-medium uppercase tracking-micro text-brass">
                    {featured.category}
                  </span>
                  <span className="text-slatey">{featured.readingTime}</span>
                </div>
                <h2 className="font-serif text-3xl font-light leading-snug text-ink md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slatey">{featured.excerpt}</p>
                <div className="mt-8 flex items-center gap-4 text-sm text-slatey">
                  <span>{featured.author}</span>
                  <span className="h-1 w-1 rounded-full bg-slatey/50" />
                  <span>{formatDate(featured.date)}</span>
                </div>
              </div>
            </motion.article>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <motion.article
                key={post.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col"
              >
                <div className="mb-6 aspect-[3/2] w-full overflow-hidden bg-gradient-to-br from-ink-600 to-ink-900">
                  <div className="h-full w-full transition-transform duration-700 ease-expo group-hover:scale-105" />
                </div>
                <div className="mb-3 flex items-center gap-3 text-xs">
                  <span className="font-medium uppercase tracking-micro text-brass">
                    {post.category}
                  </span>
                  <span className="text-slatey">{post.readingTime}</span>
                </div>
                <h3 className="font-serif text-xl font-light leading-snug text-ink transition-colors group-hover:text-brass">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-slatey">{post.excerpt}</p>
                <p className="mt-5 text-sm text-slatey">{formatDate(post.date)}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}
