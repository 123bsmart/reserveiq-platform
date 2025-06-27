import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/cn';

const buttonVariants = cva(
  // Base styles applied to all buttons
  'font-[800] outline-none cursor-pointer text-[#fff] text-[1rem] transition-all duration-300 rounded-[6px] no-underline inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        default: 'bg-[#3b82f6] hover:bg-[#2563eb] hover:-translate-y-[2px] border-none',
        outline: 'bg-transparent border border-[#cbd5e1] hover:bg-white/10 hover:bg-[#ffffff1a]',
        secondary:
          'bg-green text-white border-none rounded-lg text-[1.1rem] font-semibold py-4 px-8 w-full hover:bg-green-dark',
      },
      size: {
        default: 'py-[12px] px-[20px]',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  fullWidth?: boolean;
}

/**
 * Button component with multiple variants
 *
 * @example
 * ```tsx
 * <Button variant="default" size="large">Click me</Button>
 * <Button variant="outline" fullWidth>Cancel</Button>
 * <Button variant="secondary" fullWidth>Submit</Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, fullWidth }), className)} ref={ref} {...props} />;
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
