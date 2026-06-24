import { motion } from 'framer-motion';
import Container from '../ui/Container.jsx';
import RevealText from '../ui/RevealText.jsx';
import { fadeUp } from '../../lib/motion.js';

const principles = [
  {
    n: '01',
    title: 'Patience as an edge',
    body: 'We measure outcomes in market cycles, not headlines. The discipline to stay invested through volatility is our most durable advantage in digital assets.',
  },
  {
    n: '02',
    title: 'Research before conviction',
    body: 'Every allocation is earned through original, fundamental work. We invest only where our understanding is deep and our thesis is differentiated.',
  },
  {
    n: '03',
    title: 'Security as a foundation',
    body: 'Assets are held with institutional-grade custody, segregation and controls. Trust is engineered into every layer of how we operate.',
  },
];

export default function Philosophy() {
  return (
    <section className="bg-ivory py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Our Philosophy</p>
            <h2 className="font-serif text-display font-light leading-[1.05] text-ink">
              <RevealText text="A single belief, held with conviction." />
            </h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 text-lg leading-relaxed text-slatey text-balance"
            >
              That digital assets, approached with institutional rigor and held with
              patience, become a durable allocation rather than a speculation. Everything
              we do flows from that conviction.
            </motion.p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col">
              {principles.map((p, i) => (
                <motion.div
                  key={p.n}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-8 border-t border-ink/10 py-9 transition-colors duration-500 hover:border-brass/50"
                >
                  <span className="font-serif text-sm text-brass">{p.n}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-ink">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-slatey">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
