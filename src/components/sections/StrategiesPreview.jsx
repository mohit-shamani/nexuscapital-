import { Link } from 'react-router-dom';
import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { strategies } from '../../data/strategies.js';

/**
 * An editorial index of strategies — an interactive table, not a grid of
 * cards. Each row lifts and tints toward brass on hover.
 */
export default function StrategiesPreview() {
  return (
    <section className="bg-ivory-50 py-28 md:py-40">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Four disciplines. One standard."
            className="max-w-xl"
          />
          <Link
            to="/strategies"
            className="link-underline shrink-0 text-sm font-medium text-ink"
          >
            All strategies →
          </Link>
        </div>

        <div className="border-t border-ink/10">
          {strategies.map((s) => (
            <Link
              key={s.id}
              to="/strategies"
              className="group block border-b border-ink/10"
            >
              <div className="grid grid-cols-12 items-center gap-4 py-8 transition-all duration-500 ease-expo group-hover:px-4">
                <span className="col-span-2 font-serif text-sm text-brass md:col-span-1">
                  {s.index}
                </span>
                <h3 className="col-span-10 font-serif text-3xl font-light text-ink transition-colors duration-300 group-hover:text-brass md:col-span-4 md:text-4xl">
                  {s.title}
                </h3>
                <div className="col-span-12 md:col-span-6 md:pl-8">
                  <p className="max-w-md text-slatey">{s.summary}</p>
                </div>
                <span
                  aria-hidden
                  className="col-span-12 hidden text-right text-2xl text-ink/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-brass md:col-span-1 md:block"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
