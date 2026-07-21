import type { AnchorHTMLAttributes } from "react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-btn px-[26px] py-[14px] text-[15px] font-semibold no-underline transition-all duration-150 ease-out active:translate-y-0";

  const variants = {
    primary:
      "bg-accent text-bg hover:-translate-y-0.5 hover:shadow-[0_8px_20px_oklch(0.75_0.13_230_/_0.25)]",
    secondary:
      "border border-border-strong text-text-primary hover:border-gold/50 hover:bg-white/[0.03]",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
