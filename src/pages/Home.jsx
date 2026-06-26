import PageWrapper from '../components/layout/PageWrapper.jsx';
import Seo from '../components/utils/Seo.jsx';
import Hero from '../components/sections/Hero.jsx';
import TrustBar from '../components/sections/TrustBar.jsx';
import Philosophy from '../components/sections/Philosophy.jsx';
import Stats from '../components/sections/Stats.jsx';
import StrategiesPreview from '../components/sections/StrategiesPreview.jsx';
import InsightsPreview from '../components/sections/InsightsPreview.jsx';
import Faq from '../components/sections/Faq.jsx';
import CTA from '../components/sections/CTA.jsx';

export default function Home() {
  return (
    <PageWrapper>
      <Seo
        path="/"
        description="NexusCapital delivers institutional-grade crypto asset management for high-net-worth investors. Secure portfolio management, digital asset trading & wealth consulting. Book your portfolio review today."
      />
      <Hero />
      <TrustBar />
      <Philosophy />
      <Stats />
      <StrategiesPreview />
      <InsightsPreview />
      <Faq />
      <CTA />
    </PageWrapper>
  );
}
