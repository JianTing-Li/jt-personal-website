"use client";

import { useId, useState } from "react";
import type { Project } from "@/data/projects";
import { TechTag } from "@/components/ui/TechTag";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-surface-raised p-7 transition-colors duration-200 hover:border-border-strong">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="rounded-pill bg-gold/[0.12] px-2.5 py-1 font-mono text-[11.5px] tracking-wide text-gold">
          Work
        </span>
      </div>
      <h3 className="mb-2 text-[19px] font-bold text-text-primary">
        {project.name}
      </h3>
      <p className="mb-4 flex-grow text-[14.5px] leading-relaxed text-text-secondary">
        {project.description}
      </p>
      <div className="mb-[18px] flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>
      <div className="mb-3.5 flex gap-4 text-[13.5px] font-semibold">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary transition-colors hover:text-text-primary"
        >
          View App ↗
        </a>
      </div>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="flex items-center gap-1.5 self-start text-[13.5px] font-semibold text-accent"
      >
        <span>{expanded ? "Hide details" : "View details"}</span>
        <span
          className={`inline-block transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        >
          ⌄
        </span>
      </button>
      {expanded && (
        <p
          id={panelId}
          className="mt-3.5 border-t border-border pt-3.5 text-sm leading-relaxed text-text-secondary"
        >
          {project.detail}
        </p>
      )}
    </article>
  );
}
