import Header from '@/features/home/components/header/Header';
import PainPoints from '@/features/home/components/pain-points/PainPoints';
import Features from '@/features/home/components/features/Features';
import Footer from '@/features/home/components/footer/Footer';

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
