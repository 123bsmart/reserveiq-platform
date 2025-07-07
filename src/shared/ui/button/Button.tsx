import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/cn';

const buttonVariants = cva(
  'font-bold outline-none cursor-pointer text-white text-base/[1.2] transition-all duration-300 rounded-md no-underline inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        default: 'bg-blue hover:bg-[#2563eb] hover:-translate-y-0.5 border-2 border-blue hover:border-[#2563eb',
        'outline-ghost': 'bg-transparent border-2 border-gray-lighter hover:bg-white/10 hover:bg-[#ffffff1a]',
        outline: 'bg-transparent text-blue border-2 border-blue hover:bg-blue hover:text-white hover:-translate-y-0.5',
        secondary:
          'bg-green text-white border-2 border-green rounded-lg font-semibold py-4 px-8 w-full hover:bg-green-dark hover:border-green-dark hover:-translate-y-0.5',
        gradient: 'rounded-lg font-semibold transition-all duration-300 bg-[linear-gradient(135deg,_#1e3a8a_0%,_#3b82f6_100%)] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-none'
  
      },
      size: {
        default: 'py-3 px-5',
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
 * <Button variant="outline-ghost" fullWidth>Cancel</Button>
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
