import React from 'react';
import { Triangle } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/cn';

const tooltipVariants = cva(
  'text-sm px-3 py-[6px] rounded whitespace-nowrap shadow-md',
  {
    variants: {
      variant: {
        dark: 'bg-gray-800 text-white',
        light: 'bg-white text-gray-800 border',
      },
    },
    defaultVariants: {
      variant: 'dark',
    },
  }
);

export type TooltipVariantProps = VariantProps<typeof tooltipVariants>

export type TooltipProps = {
  children: string;
} & TooltipVariantProps

/**
 * Tooltip component with light/dark variants and a triangular tip.
 *
 * @example
 * <Tooltip variant="dark">Coming soon</Tooltip>
 * <Tooltip variant="light">Coming soon</Tooltip>
 */
export const Tooltip: React.FC<TooltipProps> = ({ children, variant }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-10 z-50 flex flex-col items-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
      <div className={cn(tooltipVariants({ variant }))}>
        {children}
      </div>
      <Triangle
        size={10}
        className={cn(
          'mt-[-4px] rotate-180',
          variant === 'light' ? 'text-white fill-white' : 'text-gray-800 fill-gray-800'
        )}
      />
    </div>
  );
};
