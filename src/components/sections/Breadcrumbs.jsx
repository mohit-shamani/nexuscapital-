import { Link } from 'react-router-dom';

/**
 * Accessible breadcrumb trail (Home → Insights → Article). Purely visual — the
 * matching BreadcrumbList JSON-LD is generated centrally in lib/schema.js so the
 * markup and structured data stay in sync without duplication.
 *
 * @param {{ label: string, to?: string }[]} items  Last item is the current page.
 */
export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-slatey">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="transition-colors hover:text-brass"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden className="text-slatey/40">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
