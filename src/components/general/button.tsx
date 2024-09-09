"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { mergeClasses } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={mergeClasses(
          "inline-flex items-center justify-center rounded-2xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors ease-in-out duration-200 hover:bg-grey-600 active:bg-gray-800",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
