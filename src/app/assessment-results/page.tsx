import Header from '@/features/assessment/components/header/Header';
import { Metadata } from 'next';
import { AssessmentProcessing } from '@/features/assessment/components/assessment-processing/AssessmentProcessing';
import { FooterLinks } from '@/features/assessment/components/footer-links/FooterLinks';

export const metadata: Metadata = {
  title: 'Assessment Processing - ReserveIQ',
};

export default function AssessmentResults(): JSX.Element {
  return (
    <main className="px-5 md:px-10 pb-10 bg-gradient-to-b from-background to-background-dark">
      <Header />
      <AssessmentProcessing />
      <FooterLinks />
    </main>
  );
}
