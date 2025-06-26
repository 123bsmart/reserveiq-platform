import Header from '@/shared/layouts/header/Header';
import PainPoints from '@/features/home/components/pain-points/PainPoints';
import Features from '@/features/home/components/features/Features';
import Footer from '@/shared/layouts/footer/Footer';

export default function Home(): JSX.Element {
  return (
    <main className=" bg-gradient-to-b from-background to-background-dark">
      <Header />
      <PainPoints />
      <Features />
      <Footer />
    </main>
  );
}
