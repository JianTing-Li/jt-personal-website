"use client";

export type FilterValue = "All" | "work" | "personal";

const filters: { value: FilterValue; label: string }[] = [
  { value: "All", label: "All" },
  { value: "work", label: "Work" },
  { value: "personal", label: "Personal" },
];

interface ProjectFilterProps {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2.5"
    >
      {filters.map((filter) => {
        const isActive = active === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            aria-pressed={isActive}
            className={`rounded-pill border px-[18px] py-[9px] text-sm font-semibold transition-colors duration-150 ${
              isActive
                ? "border-accent bg-accent text-bg"
                : "border-border-strong text-text-secondary hover:text-text-primary"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
