import { motion } from 'framer-motion';
import Container from '../ui/Container.jsx';
import AnimatedCounter from '../ui/AnimatedCounter.jsx';
import { fadeUp } from '../../lib/motion.js';
import { stats } from '../../data/stats.js';

/** Headline figures on the deep navy field — the proof of scale. */
export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-ivory md:py-36">
      <Container>
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-5 text-brass-light">By the numbers</p>
          <h2 className="font-serif text-display font-light text-ivory">
            Scale, in service of stewardship.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-y-14 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l border-ivory/15 pl-6"
            >
              <div className="font-serif text-5xl font-light text-ivory md:text-6xl">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="mt-4 text-sm leading-snug text-ivory/55">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
