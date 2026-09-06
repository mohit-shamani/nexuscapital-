/**
 * Lightweight className joiner — avoids pulling clsx/tailwind-merge
 * for a project of this scope while keeping call sites tidy.
 */
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

