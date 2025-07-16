'use client';
import { cn } from '@/shared/utils';
import { formFieldClasses } from './Form';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type FormInputProps = React.ComponentProps<'input'> & {
  togglePassword?: boolean;
};

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, type = 'text', togglePassword = false, ...props }, ref) => {
    const [show, setShow] = useState(false);
    const isPassword = togglePassword && type === 'password';

    return (
      <div className="relative">
        <input
          ref={ref}
          className={cn(formFieldClasses, className, isPassword && 'pr-10')}
          type={isPassword ? (show ? 'text' : 'password') : type}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={() => setShow((prev) => !prev)}
            tabIndex={-1}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    );
  }
);
