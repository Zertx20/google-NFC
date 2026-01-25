import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import UseCases from './components/UseCases';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

export default function Home() {

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
