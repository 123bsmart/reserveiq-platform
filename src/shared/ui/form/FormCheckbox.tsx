import React from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type FormCheckboxProps = {
  label: string;
  id?: string;
} & ControllerRenderProps<FieldValues, string>;

export const FormCheckbox = React.forwardRef<HTMLInputElement, FormCheckboxProps>(({ label, id, ...props }, ref) => {
  const checkboxId = id ?? props.name;

  return (
    <div className="flex items-start gap-3 mt-4">
      <input
        type="checkbox"
        id={checkboxId}
        {...props}
        ref={ref}
        className="mt-0.5 shrink-0 w-auto border border-gray-300 rounded-sm text-blue focus:ring-blue/20"
      />
      <label htmlFor={checkboxId} className="text-sm text-gray-light font-medium leading-5">
        {label}
      </label>
    </div>
  );
});
