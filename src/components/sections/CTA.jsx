import { motion } from 'framer-motion';
import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';
import Magnetic from '../ui/Magnetic.jsx';
import RevealText from '../ui/RevealText.jsx';
import { fadeUp } from '../../lib/motion.js';

/** Closing invitation, set on warm ivory above the navy footer. */
export default function CTA() {
  return (
    <section className="bg-ivory-200 py-28 md:py-40">
      <Container className="text-center">
        <p className="eyebrow mb-8">Begin a conversation</p>
        <h2 className="mx-auto max-w-4xl font-serif text-display font-light leading-[1.05] text-ink">
          <RevealText text="Let us discuss your allocation to digital assets." />
        </h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slatey text-balance"
        >
          Our institutional team partners with a select number of clients. We would welcome
          a confidential, no-obligation conversation.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-12 flex justify-center"
        >
          <Magnetic>
            <Button to="/contact" variant="primary">
              Request a meeting
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Button>
          </Magnetic>
        </motion.div>
      </Container>
    </section>
  );
}
