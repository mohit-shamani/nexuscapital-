import Container from '../ui/Container.jsx';
import Marquee from '../ui/Marquee.jsx';
import { clientTypes } from '../../data/stats.js';

/** A quiet strip naming the kinds of institutions Nexus serves. */
export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-ivory-50 py-10">
      <Container className="mb-8">
        <p className="eyebrow text-center text-ink/40">
          Trusted by the institutions that shape markets
        </p>
      </Container>
      <Marquee items={clientTypes} />
    </section>
  );
}
