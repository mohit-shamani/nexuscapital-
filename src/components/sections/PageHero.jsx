import { motion } from 'framer-motion';
import Container from '../ui/Container.jsx';
import RevealText from '../ui/RevealText.jsx';
import { fadeUp, EASE_EXPO } from '../../lib/motion.js';

/** Consistent masthead for interior pages. */
export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="relative bg-ink pb-20 pt-44 text-ivory md:pb-28 md:pt-52">
      {/* Faint brass grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#B08D57 1px, transparent 1px), linear-gradient(90deg, #B08D57 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <Container className="relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
          className="eyebrow mb-7 flex items-center gap-4 text-brass-light"
        >
          <span className="h-px w-10 bg-brass" />
          {eyebrow}
        </motion.p>
        <h1 className="max-w-4xl font-serif text-display font-light leading-[1.04]">
          <RevealText text={title} />
        </h1>
        {intro && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/65 text-balance"
          >
            {intro}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
