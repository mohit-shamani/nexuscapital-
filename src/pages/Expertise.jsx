import PageWrapper from '../components/layout/PageWrapper.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import Container from '../components/ui/Container.jsx';
import CTA from '../components/sections/CTA.jsx';

// Placeholder masthead + body — real content to follow.
export default function Expertise() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Our Expertise"
        title="Depth, earned over decades."
        intro="A fuller account of our expertise is being prepared and will appear here shortly."
      />

      <section className="bg-ivory py-28 md:py-36">
        <Container>
          <p className="max-w-2xl text-lg leading-relaxed text-slatey">
            This page is in preparation. Detailed content on our areas of expertise
            will be added here next.
          </p>
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}
