import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils";
import React from "react";

type FormButtonProps = React.ComponentProps<'button'>;

export const FormButton: React.FC<FormButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button className={cn('font-semibold', className)} type="submit" variant='secondary' {...props}>
      {children}
    </Button>
  );
}