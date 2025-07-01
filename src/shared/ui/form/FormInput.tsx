import { cn } from '@/shared/utils';
import { formFieldClasses } from './Form';
import React from 'react';

type FormInputProps = React.ComponentProps<'input'>;

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({ className, ...props }, ref) => {
  return <input ref={ref} className={cn(formFieldClasses, className)} {...props} />;
});
