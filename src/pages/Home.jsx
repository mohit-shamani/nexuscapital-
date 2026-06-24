import PageWrapper from '../components/layout/PageWrapper.jsx';
import Hero from '../components/sections/Hero.jsx';
import TrustBar from '../components/sections/TrustBar.jsx';
import Philosophy from '../components/sections/Philosophy.jsx';
import Stats from '../components/sections/Stats.jsx';
import StrategiesPreview from '../components/sections/StrategiesPreview.jsx';
import InsightsPreview from '../components/sections/InsightsPreview.jsx';
import CTA from '../components/sections/CTA.jsx';

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <TrustBar />
      <Philosophy />
      <Stats />
      <StrategiesPreview />
      <InsightsPreview />
      <CTA />
    </PageWrapper>
  );
}
