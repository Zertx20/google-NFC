import { useEffect } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import UseCases from './components/UseCases';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import { trackViewContent } from '../../utils/metaPixel';

export default function Home() {
  useEffect(() => {
    // Track ViewContent when page loads
    trackViewContent({
      content_name: 'Plaque Avis Google NFC',
      content_category: 'Product',
      content_ids: ['nfc-google-plaque'],
      value: 3500,
      currency: 'DZD'
    });
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      <Benefits />
      <HowItWorks />
      <SocialProof />
      <UseCases />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
