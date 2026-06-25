import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper.jsx';
import Seo from '../components/utils/Seo.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import Container from '../components/ui/Container.jsx';
import CTA from '../components/sections/CTA.jsx';
import { fadeUp } from '../lib/motion.js';
import { legalPages } from '../data/legal.js';

/** Shared layout for the legal / regulatory stub pages. */
export default function Legal({ slug }) {
  const page = legalPages[slug];
  if (!page) return null;

  return (
    <PageWrapper>
      <Seo title={page.title} path={`/${slug}`} description={page.intro} />
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} />

      <section className="bg-ivory py-24 md:py-32">
        <Container className="max-w-3xl">
          {page.sections.map((s) => (
            <motion.div
              key={s.heading}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8% 0px' }}
              className="border-t border-ink/10 py-10 first:border-t-0 first:pt-0"
            >
              <h2 className="font-serif text-2xl font-light text-ink">{s.heading}</h2>
              <p className="mt-4 leading-relaxed text-slatey">{s.body}</p>
            </motion.div>
          ))}

          <p className="mt-12 text-xs leading-relaxed text-slatey">
            Last updated 24 June 2026. This page is provided for general information and
            will be expanded with full documentation in due course.
          </p>
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}
