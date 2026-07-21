interface TechTagProps {
  label: string;
}

export function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-flex items-center rounded-[5px] bg-white/5 px-2.5 py-1 font-mono text-xs text-text-secondary">
      {label}
    </span>
  );
}
