'use client';
import { cn } from '@/shared/utils';
import { ComponentProps } from 'react';
import { Controller, ControllerProps, FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import { Button } from '@/shared/ui/button';

export type FormProps<T extends FieldValues> = {
  children: React.ReactNode;
  className?: string;
  onSubmit: () => void;
} & UseFormReturn<T>;

type FormFieldProps = {
  label?: string;
  htmlFor?: string;
} & ControllerProps;

type FormRowProps = ComponentProps<'div'>;
type FormInputProps = ComponentProps<'input'>;
type FormTextareaProps = ComponentProps<'textarea'>;
type FormSelectProps = ComponentProps<'select'>;
type FormButtonProps = ComponentProps<'button'>;

const formFieldClasses =
  'w-full px-4 py-3 border border-gray-border rounded-lg text-base bg-white transition duration-300 ease-in-out focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/10';

export function Form<T extends FieldValues>({ children, className, onSubmit, ...form }: FormProps<T>) {
  return (
    <FormProvider {...form}>
      <form className={cn('bg-white max-w-[600px] rounded-2xl py-[30px] px-5 md:p-10 w-full shadow-md',className)} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}

function FormField({ label, htmlFor, render, ...props }: FormFieldProps) {
  return (
    <Controller
      {...props}
      render={({ fieldState, field, formState }) => (
        <div
          className={cn(
            'flex flex-col gap-y-1.5',
            !!fieldState.error && '[&>*]:border-error',
            !!field.value && !fieldState.error && '[&>*]:border-green'
          )}
        >
          {label && (
            <label {...(htmlFor && { htmlFor })} className="text-gray-light text-[0.9rem] font-medium">
              {label}
            </label>
          )}
          {render({ fieldState, field, formState })}
        </div>
      )}
    />
  );
}

function FormRow({ className, children, ...props }: FormRowProps) {
  return (
    <div className={cn('flex items-center md:gap-4 gap-[15px] [&>*]:flex-1', className)} {...props}>
      {children}
    </div>
  );
}

function FormInput({ className, ...props }: FormInputProps) {
  return <input className={cn(formFieldClasses, className)} {...props} />;
}

function FormTextarea({ className, ...props }: FormTextareaProps) {
  return <textarea className={cn('resize-y min-h-[100px]', formFieldClasses, className)} {...props} />;
}

function FormSelect({ className, children, ...props }: FormSelectProps) {
  return (
    <select className={cn(formFieldClasses, className)} {...props}>
      {children}
    </select>
  );
}

function FormButton({className, children, ...props}: FormButtonProps) {
  return(
    <Button className={cn('font-semibold', className)} type='submit' {...props}>
      {children}
    </Button>
  )
}

Form.Field = FormField;
Form.Row = FormRow;
Form.Input = FormInput;
Form.Textarea = FormTextarea;
Form.Select = FormSelect;
Form.Button = FormButton;
