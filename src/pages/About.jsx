import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper.jsx';
import Seo from '../components/utils/Seo.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import Container from '../components/ui/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import CTA from '../components/sections/CTA.jsx';
import { fadeUp } from '../lib/motion.js';

const timeline = [
  { year: '1987', text: 'Founded in London with a single, concentrated equities mandate and a contrarian, long-horizon mandate.' },
  { year: '1998', text: 'Established our fixed income franchise, built around fundamental credit research.' },
  { year: '2009', text: 'Launched private markets, deploying permanent capital through the cycle.' },
  { year: '2016', text: 'Opened offices across Asia-Pacific and the Middle East to serve sovereign institutions.' },
  { year: '2026', text: 'Stewarding over half a trillion dollars for more than 320 institutions worldwide.' },
];

const differentiators = [
  { title: 'Research-Driven', body: 'Every decision begins with independent, fundamental research — grounded in network adoption, security and real utility, never noise or momentum.' },
  { title: 'Disciplined Risk', body: 'Capital preservation is the discipline beneath everything we do. We enforce diversification, position limits and continuous downside monitoring across every mandate.' },
  { title: 'Full Transparency', body: 'Clients receive regular reporting and complete visibility of their portfolio. How assets are held and how they are performing is never a black box.' },
  { title: 'Secure Custody', body: 'Holdings are protected with bank-grade, multi-signature custody and rigorous operational controls — institutional-grade safekeeping by default.' },
];

const values = [
  { title: 'Fiduciary first', body: 'A legal and moral duty that precedes every decision. Our clients’ interests are not a consideration — they are the consideration.' },
  { title: 'Intellectual honesty', body: 'We seek to be right, not to appear right. Dissent is welcomed; conviction is earned through scrutiny.' },
  { title: 'Quiet conviction', body: 'We let outcomes speak. No noise, no theatre — only disciplined, repeatable process.' },
];

export default function About() {
  return (
    <PageWrapper>
      <Seo
        title="About Us — Disciplined Digital Wealth Management"
        path="/firm"
        description="NexusCapital is an independent, partner-owned asset manager bringing decades of institutional discipline, bank-grade security and full transparency to digital asset management."
      />
      <PageHero
        eyebrow="The Firm"
        title="Thirty-eight years of disciplined stewardship."
        intro="Nexus Capital was founded on a simple premise: that the patient, rigorous ownership of quality assets is the surest path to enduring institutional outcomes. That premise has not changed."
      />

      {/* Narrative */}
      <section className="bg-ivory py-28 md:py-36">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Who we are" title="An independent partnership." />
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed text-slatey lg:col-span-6 lg:col-start-7"
          >
            <p>
              We are independent and partner-owned — a structure we have deliberately
              preserved. It frees us from the short-term pressures of public ownership and
              aligns our partners with the institutions we serve.
            </p>
            <p>
              Our scale is meaningful but our culture remains intimate. We invest as a single
              team, with a shared research language and a common standard of rigour applied
              to every asset class we touch.
            </p>
            <p>
              We grow deliberately and accept a limited number of new relationships each year —
              because stewardship of this kind cannot be industrialised.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-ivory-50 py-28 md:py-36">
        <Container>
          <SectionHeading eyebrow="What we value" title="The principles beneath the process." className="mb-16" />
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-ivory-50 p-10"
              >
                <span className="font-serif text-sm text-brass">0{i + 1}</span>
                <h3 className="mt-5 font-serif text-2xl font-light text-ink">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-slatey">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-ink py-28 text-ivory md:py-36">
        <Container>
          <SectionHeading eyebrow="Our history" title="A long line, drawn patiently." light className="mb-16" />
          <div className="border-t border-ivory/15">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-12 gap-4 border-b border-ivory/15 py-8"
              >
                <span className="col-span-3 font-serif text-2xl font-light text-brass-light md:col-span-2">
                  {item.year}
                </span>
                <p className="col-span-9 max-w-2xl leading-relaxed text-ivory/70 md:col-span-10">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Nexus */}
      <section className="bg-ivory py-28 md:py-36">
        <Container>
          <SectionHeading eyebrow="Why Nexus" title="What sets our stewardship apart." className="mb-16" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="font-serif text-sm text-brass">0{i + 1}</span>
                <h3 className="mt-5 font-serif text-xl font-normal text-ink">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-slatey">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}
