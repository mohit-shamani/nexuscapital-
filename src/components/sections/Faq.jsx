import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Container from '../ui/Container.jsx';
import RevealText from '../ui/RevealText.jsx';
import { fadeUp, EASE_EXPO } from '../../lib/motion.js';

/**
 * Frequently asked questions, rendered as an accordion and mirrored into
 * FAQPage JSON-LD so the answers are eligible for rich results in Google and
 * AI search. Drafted to avoid hard claims (minimums, custody partners, fees) —
 * verify and refine the flagged answers before relying on them publicly.
 */
const faqs = [
  {
    q: 'What does NexusCapital do?',
    a: 'We provide institutional-grade digital asset management for high-net-worth individuals, family offices and institutions — spanning portfolio strategy, secure custody coordination, long-term allocation and ongoing wealth consulting. Every mandate is built around your objectives, time horizon and risk tolerance.',
  },
  {
    q: 'Who do you work with?',
    a: 'Our clients are typically high-net-worth individuals, family offices and institutional allocators seeking considered exposure to digital assets. We work best with investors who think in market cycles rather than headlines, and who value research, discipline and security over speculation.',
  },
  {
    q: 'How are client assets secured?',
    a: 'Assets are held using institutional-grade custody with segregation, multi-layer access controls and rigorous operational procedures. Safeguarding capital is the foundation of how we operate — security is engineered into every layer rather than added as an afterthought.',
  },
  {
    q: 'Is there a minimum to get started?',
    a: 'Mandates are tailored to each client, and we work across a range of portfolio sizes appropriate to institutional and high-net-worth allocation. The most reliable way to understand fit is a confidential portfolio review, where we discuss your objectives and outline how we would approach your allocation.',
  },
  {
    q: 'How do you approach risk and volatility?',
    a: 'We treat volatility as a characteristic of the asset class, not a reason to abandon a thesis. Allocations are sized deliberately, diversified across our research convictions and measured over full market cycles. The discipline to stay invested through turbulence, with a clear plan, is our most durable advantage.',
  },
  {
    q: 'How do I begin?',
    a: 'Start by scheduling a confidential consultation. We will review your goals, time horizon and existing exposure, then propose a tailored approach. There is no obligation — the first conversation is simply about understanding whether we are the right partner for your wealth.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

function FaqItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

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
          className="group flex w-full items-start justify-between gap-8 py-7 text-left transition-colors duration-300"
        >
          <span className="font-serif text-xl font-normal leading-snug text-ink md:text-2xl">
            {item.q}
          </span>
          {/* Gold plus/minus that rotates open */}
          <span
            aria-hidden
            className="relative mt-1.5 h-4 w-4 shrink-0 text-brass"
          >
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
            <p className="max-w-2xl pb-8 pr-8 text-base leading-relaxed text-slatey md:text-lg">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-ivory py-28 md:py-40">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">FAQ</p>
            <h2 className="font-serif text-display font-light leading-[1.05] text-ink">
              <RevealText text="Frequently Asked Questions" />
            </h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 text-lg leading-relaxed text-slatey text-balance"
            >
              A few of the questions investors most often ask before beginning a
              conversation with us. For anything else, we welcome a direct discussion.
            </motion.p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
