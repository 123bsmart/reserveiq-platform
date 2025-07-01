import React from 'react';
import { AssessmentHeader } from './AssessmentHeader';
import { WhatsHappeningNow } from './WhatsHappeningNow';
import { ReportIncludes } from './ReportIncludes';
import { AssessmentActions } from './AssessmentActions';

export const AssessmentProcessing: React.FC = () => {
  return (
    <section className="px-[10px] mt-5">
      <div className="bg-white rounded-2xl px-6 md:px-10 md:py-[50px] py-10 w-full shadow-[0_25px_50px_rgba(0,0,0,0.3)] mx-auto max-w-[600px]">
        <AssessmentHeader />
        <WhatsHappeningNow />
        <ReportIncludes />
        <AssessmentActions />
      </div>
    </section>
  );
};
