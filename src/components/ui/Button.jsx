import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils.js';

const base =
  'group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-500 ease-expo focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-ink text-ivory hover:text-ink',
  light: 'bg-ivory text-ink hover:text-ivory',
  outline: 'border border-ink/20 text-ink hover:border-ink hover:text-ivory',
  ghost: 'text-ink hover:text-brass px-0',
};

const fillColor = {
  primary: 'bg-brass',
  light: 'bg-ink',
  outline: 'bg-ink',
  ghost: '',
};

function Inner({ variant, children }) {
  return (
    <>
      {variant !== 'ghost' && (
        <span
          aria-hidden
          className={cn(
            'absolute inset-0 z-0 origin-bottom scale-y-0 transition-transform duration-500 ease-expo group-hover:scale-y-100',
            fillColor[variant]
          )}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );
}

/** Polymorphic button: renders a router Link, anchor, or button. */
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className,
  ...props
}) {
  const classes = cn(base, variants[variant], className);
  const inner = <Inner variant={variant}>{children}</Inner>;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {inner}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  );
}
