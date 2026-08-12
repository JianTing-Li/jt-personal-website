"use client";

import { useLayoutEffect, useRef, useState } from "react";

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

interface IndicatorRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<FilterValue, HTMLButtonElement>>(new Map());
  const [indicator, setIndicator] = useState<IndicatorRect | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const button = buttonRefs.current.get(active);
    if (!container || !button) return;

    const updateIndicator = () => {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      setIndicator({
        top: buttonRect.top - containerRect.top,
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
        height: buttonRect.height,
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [active]);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label="Filter projects by category"
      className="relative flex flex-wrap gap-2.5"
    >
      {indicator && (
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 rounded-pill bg-accent transition-[transform,width,height] duration-200 ease-out motion-reduce:transition-none"
          style={{
            width: `${indicator.width}px`,
            height: `${indicator.height}px`,
            transform: `translate(${indicator.left}px, ${indicator.top}px)`,
          }}
        />
      )}
      {filters.map((filter) => {
        const isActive = active === filter.value;
        return (
          <button
            key={filter.value}
            ref={(node) => {
              if (node) buttonRefs.current.set(filter.value, node);
              else buttonRefs.current.delete(filter.value);
            }}
            type="button"
            onClick={() => onChange(filter.value)}
            aria-pressed={isActive}
            className={`relative z-10 rounded-pill border px-[18px] py-[9px] text-sm font-semibold transition-colors duration-200 ease-out ${
              isActive
                ? "border-accent text-bg"
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
