import { HTMLAttributes } from "react";

interface CartoonCardProps extends HTMLAttributes<HTMLDivElement> {
  shadow?: "sm" | "md" | "lg" | "xl";
  noBg?: boolean;
}

const shadowMap = {
  sm: "shadow-cartoon",
  md: "shadow-cartoon",
  lg: "shadow-cartoon-lg",
  xl: "shadow-cartoon-xl",
};

export default function CartoonCard({
  shadow = "md",
  noBg = false,
  className = "",
  children,
  ...props
}: CartoonCardProps) {
  return (
    <div
      className={[
        "border-[3px] border-pure-outline",
        shadowMap[shadow],
        noBg ? "" : "bg-white",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
