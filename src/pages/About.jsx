import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import Container from '../components/ui/Container.jsx';
import CTA from '../components/sections/CTA.jsx';
import Seo from '../components/utils/Seo.jsx';
import { fadeUp } from '../lib/motion.js';

export default function About() {
  return (
    <PageWrapper>
      <Seo
        title="About Nexus Capital"
        path="/firm"
        description="Nexus Capital offers digital asset management: portfolio construction, custody coordination and risk management for investors allocating to digital assets."
      />
      <PageHero
        eyebrow="About"
        title="About Nexus Capital"
        intro="What we do, in plain terms."
      />

      <section className="bg-ivory py-28 md:py-36">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl space-y-6 text-lg leading-relaxed text-slatey"
          >
            <p>
              Nexus Capital offers digital asset management. Digital asset management
              means deciding which digital assets a portfolio holds, in what proportion,
              how those assets are safeguarded, and when the position is adjusted — the
              same set of decisions that applies to any other asset class.
            </p>
            <p>
              Our approach to custody is that assets should be held so that no single
              person, device or location can move them. That means distributed
              key-management — multi-signature or multi-party computation — with
              segregation of duties and independent reconciliation around it.
            </p>
            <p>
              Our approach to risk is that position size is decided by the risk a
              position contributes, not the capital committed. Digital assets are
              volatile, and a portfolio should be built to survive a drawdown rather
              than to avoid one.
            </p>
            <p className="text-base">
              Nexus Capital is not a licensed or registered investment adviser. Nothing
              on this site is investment advice or an offer to provide investment
              services. Digital assets carry a high risk of loss, including total loss
              of capital.
            </p>
          </motion.div>
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}
