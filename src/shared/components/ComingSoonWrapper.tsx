import React from 'react';
import { Tooltip, TooltipVariantProps } from '@/shared/ui';
import { cn } from '@/shared/utils';

type ComingSoonWrapperProps = {
  children: React.ReactNode;
  className?: string
} & TooltipVariantProps;

export const ComingSoonWrapper: React.FC<ComingSoonWrapperProps> = ({ children, className, variant }) => {
  return (
    <div className={cn("relative group inline-block cursor-not-allowed", className)}>
      <div className="pointer-events-none group-hover:opacity-70 transition-opacity duration-200">
        {children}
      </div>
      <Tooltip variant={variant}>Coming soon</Tooltip>
    </div>
  );
};
