import { motion } from 'framer-motion';
import { pageTransition } from '../../lib/motion.js';

/** Wraps each page to animate enter/exit under AnimatePresence. */
export default function PageWrapper({ children, className }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}
