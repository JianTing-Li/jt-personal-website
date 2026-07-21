import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 900 | 1000 | 1100 | 1200;
}

const maxWidthClasses: Record<NonNullable<ContainerProps["maxWidth"]>, string> = {
  900: "max-w-[900px]",
  1000: "max-w-[1000px]",
  1100: "max-w-[1100px]",
  1200: "max-w-[1200px]",
};

export function Container({
  children,
  className = "",
  maxWidth = 1200,
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-7 ${maxWidthClasses[maxWidth]} ${className}`}
    >
      {children}
    </div>
  );
}
