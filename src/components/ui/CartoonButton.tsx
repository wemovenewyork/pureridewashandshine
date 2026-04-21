"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "red" | "yellow" | "dark" | "white";
type Size = "sm" | "md" | "lg";

interface CartoonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  red: "bg-pure-red text-white border-pure-outline",
  yellow: "bg-pure-yellow text-pure-outline border-pure-outline",
  dark: "bg-pure-outline text-white border-pure-outline",
  white: "bg-white text-pure-outline border-pure-outline",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const CartoonButton = forwardRef<HTMLButtonElement, CartoonButtonProps>(
  ({ variant = "red", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          "font-cartoon font-bold uppercase tracking-wider",
          "border-[3px] rounded-none",
          "shadow-cartoon",
          "transition-all duration-100 ease-in-out",
          "hover:shadow-[6px_6px_0px_0px_#111827]",
          "active:translate-x-1 active:translate-y-1 active:shadow-none",
          "cursor-pointer select-none",
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CartoonButton.displayName = "CartoonButton";
export default CartoonButton;
