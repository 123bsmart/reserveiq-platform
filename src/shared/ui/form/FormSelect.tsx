import { cn } from '@/shared/utils';
import { formFieldClasses } from './Form';
import React from 'react';

type FormSelectProps = React.ComponentProps<'select'>;

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select ref={ref} className={cn(formFieldClasses, className)} {...props}>
        {children}
      </select>
    );
  }
);
