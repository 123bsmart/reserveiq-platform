import React from 'react';
import { cn } from '@/shared/utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, children, animate = true, shadow = true }) => {
  return (
    <div
      className={cn(
        'bg-[#fff] p-[30px_20px] rounded-[12px] text-center',
        shadow && 'shadow-[0_4px_6px_rgba(0,0,0,0.05)]',
        animate && 'transition-transform duration-300 ease-in-out hover:translate-y-[-8px]',
        animate && shadow && 'hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)]',
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardIconProps {
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
  shadow?: boolean;
}

export const CardIcon: React.FC<CardIconProps> = ({ className, children, animate = true, shadow = true }) => {
  return (
    <div
      className={cn(
        'text-[2.5rem] mb-[16px] block p-[30px_20px] rounded-[12px]',
        shadow && 'shadow-[0_4px_6px_rgba(0,0,0,0.05)]',
        animate && 'duration-300 ease-in-out hover:translate-y-[-4px]',
        animate && shadow && 'hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)]',
        className
      )}
    >
      {children}
    </div>
  );
};
