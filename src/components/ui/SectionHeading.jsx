import { motion } from 'framer-motion';
import RevealText from './RevealText.jsx';
import { fadeUp } from '../../lib/motion.js';
import { cn } from '../../lib/utils.js';

/** Eyebrow label + serif heading, the standard section opener. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  light = false,
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="eyebrow mb-5"
        >
          {eyebrow}
        </motion.p>
      )}
      <h2
        className={cn(
          'font-serif text-display font-light',
          light ? 'text-ivory' : 'text-ink'
        )}
      >
        <RevealText text={title} />
      </h2>
      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className={cn(
            'mt-6 text-lg leading-relaxed text-balance',
            light ? 'text-ivory/70' : 'text-slatey'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
