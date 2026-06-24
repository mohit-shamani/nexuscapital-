import { cn } from '../../lib/utils.js';

/** Centered max-width wrapper with responsive horizontal padding. */
export default function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={cn('mx-container container-px', className)} {...props}>
      {children}
    </Tag>
  );
}
