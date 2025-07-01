import React from 'react';
import { Button } from '@/shared/ui';
import { ComingSoonWrapper } from '@/shared/components/ComingSoonWrapper';

export const AssessmentActions: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center gap-4 mt-8">
      <ComingSoonWrapper className='w-full max-w-[250px] md:w-fit'>
        <Button variant="secondary" className='md:w-fit w-full'>Explore Interactive Demo</Button>
      </ComingSoonWrapper>
      <ComingSoonWrapper className='w-full max-w-[250px] md:w-fit'>
        <Button variant="outline" className='md:w-fit w-full'>Learn More</Button>
      </ComingSoonWrapper>
    </div>
  );
};
