import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';
import Magnetic from '../ui/Magnetic.jsx';
import { fadeUp, EASE_EXPO } from '../../lib/motion.js';
import { scrollToId } from '../../lib/scroll.js';

// The WebGL layer is heavy — load it lazily so first paint isn't blocked.
const HeroScene = lazy(() => import('../three/HeroScene.jsx'));

const HEADLINE = ['Institutional', 'Digital Asset Management', 'For Long-Term', 'Wealth Creation'];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ivory pt-28"
    >
      <Container className="relative z-10 grid w-full grid-cols-1 items-center gap-10 py-16 lg:grid-cols-12 lg:gap-8">
        {/* Left — the message */}
        <div className="lg:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_EXPO }}
            className="eyebrow mb-8 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-brass" />
            Nexus Capital
          </motion.p>

          <h1 className="font-serif text-display font-light leading-[1.04] text-ink">
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden text-clip">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1, ease: EASE_EXPO, delay: 0.1 + i * 0.12 }}
                >
                  {i === 2 ? (
                    <>
                      For <span className="italic text-brass">Long-Term</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-slatey text-balance"
          >
            We help institutions and high-net-worth investors allocate to digital assets
            with confidence — through disciplined strategy, rigorous research and
            institutional-grade security.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.85 }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <Magnetic>
              <Button variant="primary" onClick={() => scrollToId('contact')}>
                Schedule Consultation
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </Magnetic>
            <Button variant="outline" onClick={() => scrollToId('services')}>
              Explore Strategies
            </Button>
          </motion.div>
        </div>

        {/* Right — the subtle 3D particle globe */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
            {/* soft radial halo behind the globe */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 50% 45%, rgba(176,141,87,0.14), transparent 62%)',
              }}
            />
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </div>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-micro text-ink/40">Scroll</span>
        <span className="h-12 w-px overflow-hidden bg-ink/15">
          <motion.span
            className="block h-1/2 w-full bg-brass"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          />
        </span>
      </motion.div>
    </section>
  );
}
