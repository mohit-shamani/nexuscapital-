import { motion } from 'framer-motion';
import { EASE_EXPO } from '../../lib/motion.js';
import { cn } from '../../lib/utils.js';

/**
 * Splits text into words and reveals them line-by-line from behind a
 * mask on scroll into view. The cornerstone of the site's editorial feel.
 */
export default function RevealText({
  text,
  as: Tag = 'span',
  className,
  delay = 0,
  stagger = 0.06,
}) {
  const words = text.split(' ');
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      className={cn('inline', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden text-clip align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              visible: { y: '0%', transition: { duration: 0.85, ease: EASE_EXPO } },
            }}
          >
            {word}
            {i < words.length - 1 && ' '}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
