import { cn } from '@/shared/utils';
import React from 'react';

type FormRowProps = React.ComponentProps<'div'>;

export const FormRow: React.FC<FormRowProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn('flex flex-col md:flex-row md:gap-4 gap-[15px] [&>*]:flex-1', className)} {...props}>
      {children}
    </div>
  );
};
