interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="mb-2.5 font-mono text-[13px] tracking-wide text-gold">
        {eyebrow}
      </p>
      <h2 className="text-[26px] font-bold tracking-tight text-text-primary sm:text-[32px] md:text-[36px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
