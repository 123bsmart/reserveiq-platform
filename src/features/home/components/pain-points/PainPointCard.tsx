import React from 'react';
import { Card, CardIcon } from '@/shared/ui';

interface IPainPointCard {
  emoji: string;
  title: string;
  quote: string;
  description: string;
}

export const PainPointCard: React.FC<IPainPointCard> = ({ emoji, title, quote, description }) => {
  return (
    <Card>
      <CardIcon>{emoji}</CardIcon>
      <h3 className="mt-0 mb-[12px] text-[1.2rem] font-[600] text-[#1f2937]">{title}</h3>
      <p className="italic text-[#6b7280]">"{quote}"</p>
      <p className="text-[1rem] leading-[1.5] text-[#6b7280]">{description}</p>
    </Card>
  );
};
