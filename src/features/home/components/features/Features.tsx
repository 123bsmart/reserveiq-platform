import React from 'react';
import { FeatureCard } from './FeatureCard';
import { featuresData } from '@/shared/constants';

export const Features: React.FC = () => {
  return (
    <section className="bg-[#e2e8f0] text-[#0f172a] py-[80px] px-5 text-center sm:py-[80px] sm:px-[20px] px-[20px]">
      <h2 className="text-[1.8rem] mb-[40px] font-[700]">Meet ReserveIQ</h2>
      <div
        className="grid gap-[25px] md:gap-[30px] max-w-[1000px] mx-auto
        md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
        grid-cols-[1fr]"
      >
        {featuresData.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
      <div className="mt-[40px]">
        <div className="text-[2rem] font-[700] text-[#1f2937]">Your Brand. Our Engine.</div>
      </div>
    </section>
  );
};

export default Features;
