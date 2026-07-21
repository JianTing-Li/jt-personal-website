import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface";
}

export function Section({
  id,
  children,
  className = "",
  tone = "default",
}: SectionProps) {
  const toneClasses = tone === "surface" ? "bg-surface" : "";

  return (
    <section
      id={id}
      className={`scroll-mt-[76px] py-16 md:py-[100px] ${toneClasses} ${className}`}
    >
      {children}
    </section>
  );
}
