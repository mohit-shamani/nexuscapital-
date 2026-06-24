import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils.js';

/** Wordmark with a brass full-stop — quiet, confident, typographic. */
export default function Logo({ light = false, className }) {
  return (
    <Link
      to="/"
      aria-label="Nexus Capital — home"
      className={cn(
        'font-serif text-xl font-medium tracking-tight transition-colors duration-300',
        light ? 'text-ivory' : 'text-ink',
        className
      )}
    >
      Nexus<span className="text-brass">.</span>
      <span className="ml-1 text-[0.65em] font-sans font-medium uppercase tracking-micro opacity-50">
        Capital
      </span>
    </Link>
  );
}
