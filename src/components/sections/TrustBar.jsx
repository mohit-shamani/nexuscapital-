import Container from '../ui/Container.jsx';
import Marquee from '../ui/Marquee.jsx';
import { clientTypes } from '../../data/stats.js';

/** A quiet strip naming the kinds of investor this service is built for. */
export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-ivory-50 py-10">
      <Container className="mb-8">
        <p className="eyebrow text-center text-ink/40">
          Built for long-horizon investors
        </p>
      </Container>
      <Marquee items={clientTypes} />
    </section>
  );
}
