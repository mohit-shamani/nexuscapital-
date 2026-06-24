import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import Container from '../components/ui/Container.jsx';
import CTA from '../components/sections/CTA.jsx';
import { strategies } from '../data/strategies.js';
import { fadeUp } from '../lib/motion.js';

export default function Strategies() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Strategies"
        title="Four disciplines, one philosophy."
        intro="Across public and private markets, every Nexus strategy is an expression of the same belief: that patient, research-led ownership compounds into enduring outcomes."
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container className="space-y-px">
          {strategies.map((s, i) => (
            <motion.article
              key={s.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8% 0px' }}
              className="grid grid-cols-1 gap-10 border-t border-ink/10 py-16 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-1">
                <span className="font-serif text-lg text-brass">{s.index}</span>
              </div>

              <div className="lg:col-span-5">
                <h2 className="font-serif text-4xl font-light text-ink md:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slatey">{s.summary}</p>
              </div>

              <div className="lg:col-span-6">
                <p className="leading-relaxed text-slatey">{s.detail}</p>
                <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
                  {s.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-serif text-3xl font-light text-ink">{m.value}</div>
                      <div className="mt-2 text-xs uppercase tracking-wide text-slatey">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </Container>
      </section>

      {/* Process strip */}
      <section className="bg-ivory-50 py-24 md:py-32">
        <Container>
          <p className="eyebrow mb-12 text-center">A single, repeatable process</p>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-4">
            {[
              { n: '01', t: 'Originate', d: 'Independent, fundamental research across our global team.' },
              { n: '02', t: 'Underwrite', d: 'Rigorous downside analysis before any capital is committed.' },
              { n: '03', t: 'Own', d: 'Patient, low-turnover stewardship measured in years.' },
              { n: '04', t: 'Engage', d: 'Active ownership and governance to protect long-term value.' },
            ].map((step) => (
              <div key={step.n} className="bg-ivory-50 p-8">
                <span className="font-serif text-sm text-brass">{step.n}</span>
                <h3 className="mt-4 font-serif text-xl font-normal text-ink">{step.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slatey">{step.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}
