'use client';
import { cn } from '@/shared/utils';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import React from 'react';
import { FormButton } from './FormButton';
import { FormCheckbox } from './FormCheckbox';
import { FormUploadInput } from './FormUploadInput';
import { FormSelect } from './FormSelect';
import { FormTextarea } from './FormTextarea';
import { FormInput } from './FormInput';
import { FormRow } from './FormRow';
import { FormField } from './FormField';

export type FormProps<T extends FieldValues> = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  onSubmit: () => void;
  renderHeader?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
} & UseFormReturn<T>;

export const formFieldClasses =
  'w-full px-4 py-[14px] border-2 border-[#e2e8f0] bg-[#fafafa] rounded-lg text-base/[1] transition duration-300 ease-in-out focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/10';

export function Form<T extends FieldValues>({
  children,
  className,
  containerClassName,
  onSubmit,
  renderHeader,
  renderFooter,
  ...form
}: FormProps<T>): React.ReactElement {
  return (
    <div className={cn('w-full mx-auto', containerClassName)}>
      {renderHeader ? renderHeader() : null}
      <FormProvider {...form}>
        <form className={cn(className)} onSubmit={form.handleSubmit(onSubmit)}>
          {children}
        </form>
      </FormProvider>
      {renderFooter ? renderFooter() : null}
    </div>
  );
}

Form.Field = FormField;
Form.Row = FormRow;
Form.Input = FormInput;
Form.Textarea = FormTextarea;
Form.Select = FormSelect;
Form.UploadInput = FormUploadInput;
Form.Checkbox = FormCheckbox;
Form.Button = FormButton;
