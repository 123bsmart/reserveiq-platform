'use client';

import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
import { cn } from '@/shared/utils';
import React from 'react';

export type FormFieldProps<TFieldValues extends FieldValues = FieldValues> = {
  label?: string;
  htmlFor?: string;
  text?: string;
} & ControllerProps<TFieldValues>;

export function FormField<TFieldValues extends FieldValues = FieldValues>({
  label,
  htmlFor,
  text,
  render,
  ...props
}: FormFieldProps<TFieldValues>): React.ReactElement {
  return (
    <Controller
      {...props}
      render={({ field, fieldState, formState }) => (
        <div
          className={cn(
            'flex flex-col gap-y-1',
            fieldState.error && '[&>*:not(div)]:border-error',
            field.value && !fieldState.error && '[&>*:not(div)]:border-green'
          )}
        >
          {label && (
            <label htmlFor={htmlFor ?? props.name} className="text-gray-light text-[0.9rem] font-medium mb-0.5">
              {label}
            </label>
          )}
          {render({ field, fieldState, formState })}
          {text && <p className="text-[0.8rem] text-gray-muted">{text}</p>}
        </div>
      )}
    />
  );
}
