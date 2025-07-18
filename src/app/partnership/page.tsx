import PartnershipLayout from '@/features/partnership/components/PartnershipLayout';
import ScrollProgressIndicator from '@/features/partnership/components/ScrollProgressIndicator';
import Navbar from '@/features/partnership/components/Navbar';
import Hero from '@/features/partnership/components/Hero';
import Overview from '@/features/partnership/components/Overview';
import Platform from '@/features/partnership/components/Platform';
import Templates from '@/features/partnership/components/Templates';
import Pricing from '@/features/partnership/components/Pricing';
import Implementation from '@/features/partnership/components/Implementation';
import Contact from '@/features/partnership/components/Contact';
import Footer from '@/features/partnership/components/Footer';

export default function PartnershipPage(): JSX.Element {
  return (
    <PartnershipLayout>
      <ScrollProgressIndicator />
      <Navbar />
      <Hero />
      <Overview />
      <Platform />
      <Templates />
      <Pricing />
      <Implementation />
      <Contact />
      <Footer />
    </PartnershipLayout>
  );
}
