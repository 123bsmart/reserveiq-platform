'use client';

import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
import { cn } from '@/shared/utils';
import React from 'react';

export type FormFieldProps<TFieldValues extends FieldValues = FieldValues> = {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  text?: string;
} & ControllerProps<TFieldValues>;

export function FormField<TFieldValues extends FieldValues = FieldValues>({
  label,
  htmlFor,
  text,
  render,
  required = false,
  ...props
}: FormFieldProps<TFieldValues>): React.ReactElement {
  return (
    <Controller
      {...props}
      render={({ field, fieldState, formState }) => (
        <div className={cn('flex flex-col gap-y-1')}>
          {label && (
            <label htmlFor={htmlFor ?? props.name} className="text-gray-light text-[0.9rem] font-semibold mb-0.5">
              {label} {required ? <span className="text-error">*</span> : null}
            </label>
          )}
          {render({ field, fieldState, formState })}
          {text && <p className="text-[0.8rem] text-gray-muted">{text}</p>}
        </div>
      )}
    />
  );
}
