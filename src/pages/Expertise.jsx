import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import Container from '../components/ui/Container.jsx';
import CTA from '../components/sections/CTA.jsx';
import { expertiseAreas, coverage } from '../data/expertise.js';
import { fadeUp } from '../lib/motion.js';

export default function Expertise() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Our Expertise"
        title="Institutional rigor, applied to digital assets."
        intro="From portfolio construction to safekeeping, we bring the discipline of institutional finance to every stage of the digital-asset lifecycle — so capital is managed, and protected, with the same care."
      />

      {/* Areas of expertise */}
      <section className="bg-ivory py-24 md:py-32">
        <Container className="space-y-px">
          {expertiseAreas.map((a) => (
            <motion.article
              key={a.index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8% 0px' }}
              className="grid grid-cols-1 gap-10 border-t border-ink/10 py-16 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-1">
                <span className="font-serif text-lg text-brass">{a.index}</span>
              </div>

              <div className="lg:col-span-5">
                <h2 className="font-serif text-4xl font-light text-ink md:text-5xl">
                  {a.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slatey">{a.summary}</p>
              </div>

              <div className="lg:col-span-6">
                <p className="leading-relaxed text-slatey">{a.detail}</p>
              </div>
            </motion.article>
          ))}
        </Container>
      </section>

      {/* Asset coverage */}
      <section className="bg-ivory-50 py-24 md:py-32">
        <Container>
          <p className="eyebrow mb-12 text-center">Where we invest</p>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {coverage.map((c) => (
              <div key={c.title} className="bg-ivory-50 p-8">
                <h3 className="font-serif text-xl font-normal text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slatey">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}
