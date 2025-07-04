'use client';
import { Form } from '@/shared/ui';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { ContactInformationSection } from './ContactInformationSection';
import { BuildingInformationSection } from './BuildingInformationSection';
import { ReserveStudyUploadSection } from './ReserveStudyUploadSection';
import { CurrentSituationSection } from './CurrentSituation';
import { AIAnalysisSummary } from './AIAnalysisSummary';
import { assessmentDefaultValues, assessmentFormSchema } from '@/features/assessment/form/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ComingSoonWrapper } from '@/shared/components/ComingSoonWrapper';

const CalculatorFormHeader: React.FC = () => {
  return (
    <section className="mb-[30px]">
      <Link
        href="/"
        className="text-blue-accent no-underline font-medium transition-colors duration-300 hover:text-blue-accent-hover mb-5 block"
      >
        ← Back to Board Resources
      </Link>
      <h2 className="font-semibold text-2xl text-gray-text mb-2">Free Reserve Fund Assessment</h2>
      <p className="font-normal text-base text-gray-muted">
        Upload your reserve study and building information to get instant AI analysis of your reserve fund health and
        actionable recommendations.
      </p>
    </section>
  );
};

const CalculatorFormFooter: React.FC = () => {
  return (
    <p className="text-gray-muted text-[0.8rem] text-center mt-4">
      🔒 Your information and documents are secure and confidential. We never share your data.
    </p>
  );
};

export const CalculatorForm: React.FC = () => {
  const form = useForm({
    defaultValues: assessmentDefaultValues,
    resolver: zodResolver(assessmentFormSchema),
    mode: 'all',
  });
  return (
    <div className="px-[10px]">
      <Form
        {...form}
        onSubmit={() => {}}
        containerClassName="max-w-[700px] mt-10"
        renderHeader={() => <CalculatorFormHeader />}
        renderFooter={() => <CalculatorFormFooter />}
      >
        <ContactInformationSection />
        <BuildingInformationSection />
        <ReserveStudyUploadSection />
        <CurrentSituationSection />
        <AIAnalysisSummary />
        <Form.Field
          name="newsletter"
          render={({ field }) => (
            <Form.Checkbox {...field} label="I'd like to receive ReserveIQ updates and reserve fund management tips" />
          )}
        />
        <ComingSoonWrapper className="w-full">
          <Form.Button className="w-full text-[1.1rem]">🚀 Get My Free Assessment</Form.Button>
        </ComingSoonWrapper>
      </Form>
    </div>
  );
};
