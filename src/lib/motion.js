// Shared Framer Motion variants and easings for a consistent motion language.

export const EASE_EXPO = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_EXPO },
  },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

// Word/line reveal sliding up from behind a mask.
export const maskReveal = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.9, ease: EASE_EXPO },
  },
};

// Page-level enter/exit used with AnimatePresence.
export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_EXPO },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.4, ease: EASE_EXPO },
  },
};
