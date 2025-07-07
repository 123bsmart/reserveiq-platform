import React from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type FormCheckboxProps = {
  label: React.ReactNode;
  id?: string;
} & ControllerRenderProps<FieldValues, string>;

export const FormCheckbox = React.forwardRef<HTMLInputElement, FormCheckboxProps>(({ label, id, ...props }, ref) => {
  const checkboxId = id ?? props.name;

  return (
    <div className="flex items-center gap-3 mt-4">
      <input
        type="checkbox"
        id={checkboxId}
        {...props}
        ref={ref}
        className="shrink-0 w-[18px] h-[18px] border border-gray-300 rounded-sm accent-blue focus:ring-blue/20"
      />
      <label htmlFor={checkboxId} className="text-[0.9rem] text-gray-muted [&_a]:text-blue font-normal leading-5">
        {label}
      </label>
    </div>
  );
});
