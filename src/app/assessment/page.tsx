import Header from '@/features/assessment/components/header/Header';
import { WhatYoullGet } from '@/features/assessment/components/what-youll-get/WhatYoullGet';
import { CalculatorForm } from '@/features/assessment/components/calculator-form/CalculatorForm';
import { Metadata } from 'next';
import TitleSection from '@/features/assessment/components/title-section/TitleSection';

export const metadata: Metadata = {
  title: 'Get Your Free Reserve Fund Assessment - ReserveIQ',
};

export default function Assessment(): JSX.Element {
  return (
    <main className="px-5 md:px-10 pb-10 bg-gradient-to-b from-background to-background-dark">
      <Header />
      <TitleSection />
      <WhatYoullGet />
      <CalculatorForm />
    </main>
  );
}
