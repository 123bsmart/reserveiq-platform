import React from 'react';
import { cn } from '@/shared/utils';
import { formFieldClasses } from './Form';

type FormTextareaProps = React.ComponentProps<'textarea'>;

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(({ className, ...props }, ref) => {
  return <textarea ref={ref} className={cn('resize-y min-h-[100px] font-mono', formFieldClasses, className)} {...props} />;
});
