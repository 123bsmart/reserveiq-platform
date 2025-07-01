import React from 'react';
import { PainPointCard } from './PainPointCard';
import { painPointsData } from '@/shared/constants';

export const PainPoints: React.FC = () => {
  return (
    <section className="bg-[#f1f5f9] text-[#0f172a] py-[60px]  mt-[24px] px-[20px] text-center sm:py-[50px] sm:px-[20px]">
      <h2 className="text-[1.8rem] mb-[40px]  font-[700] mt-[24px]">Why Property Managers Lose Buildings</h2>
      <div
        className="grid gap-[25px] md:gap-[30px] max-w-[1000px] mx-auto
       md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
       grid-cols-[1fr]"
      >
        {painPointsData.map((item, index) => (
          <PainPointCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PainPoints;
