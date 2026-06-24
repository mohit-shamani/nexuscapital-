/**
 * Lightweight className joiner — avoids pulling clsx/tailwind-merge
 * for a project of this scope while keeping call sites tidy.
 */
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

/** Format a number into a compact currency-style string. */
export function formatAUM(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}
