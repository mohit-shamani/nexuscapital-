import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { insights } from '../../data/insights.js';
import { fadeUp } from '../../lib/motion.js';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function InsightsPreview() {
  const featured = insights.slice(0, 3);

  return (
    <section className="bg-ivory py-28 md:py-40">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="Thinking, made transparent."
            className="max-w-xl"
          />
          <Link to="/insights" className="link-underline shrink-0 text-sm font-medium text-ink">
            All insights →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
          {featured.map((post, i) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-ivory p-8 transition-colors duration-500 hover:bg-ivory-50 md:p-10"
            >
              <Link to={`/insights/${post.id}`} className="flex flex-1 flex-col">
                <div className="mb-6 flex items-center justify-between text-xs">
                  <span className="font-medium uppercase tracking-micro text-brass">
                    {post.category}
                  </span>
                  <span className="text-slatey">{post.readingTime}</span>
                </div>
                <h3 className="font-serif text-2xl font-light leading-snug text-ink transition-colors group-hover:text-brass">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-slatey">{post.excerpt}</p>
                <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-5 text-sm text-slatey">
                  <span>{formatDate(post.date)}</span>
                  <span className="link-underline text-ink">Read →</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
