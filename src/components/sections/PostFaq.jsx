import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { fadeUp, EASE_EXPO } from '../../lib/motion.js';

/**
 * Per-article FAQ accordion. Takes a `faqs` array ([{ q, a }]) defined on each
 * insight post and mirrors the answers into FAQPage JSON-LD so they are eligible
 * for rich results. Sized for the article reading column, not a full-width band.
 */
function PostFaqItem({ item, isOpen, onToggle, index }) {
  const panelId = `post-faq-panel-${index}`;
  const buttonId = `post-faq-button-${index}`;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ delay: index * 0.06 }}
      className="border-t border-ink/10 last:border-b"
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-start justify-between gap-8 py-6 text-left transition-colors duration-300"
        >
          <span className="font-serif text-lg font-normal leading-snug text-ink md:text-xl">
            {item.q}
          </span>
          {/* Gold plus/minus that rotates open */}
          <span aria-hidden className="relative mt-1.5 h-4 w-4 shrink-0 text-brass">
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
            <motion.span
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current"
              animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.4, ease: EASE_EXPO }}
            />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_EXPO }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 pr-8 text-base leading-relaxed text-slatey">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PostFaq({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <section className="mt-16 border-t border-ink/10 pt-12">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <p className="eyebrow mb-6">FAQ</p>
      <h2 className="mb-8 font-serif text-2xl font-light text-ink md:text-3xl">
        Frequently asked questions
      </h2>

      <div>
        {faqs.map((item, i) => (
          <PostFaqItem
            key={item.q}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
