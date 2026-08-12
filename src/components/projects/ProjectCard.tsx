"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/projects";
import { TechTag } from "@/components/ui/TechTag";

interface ProjectCardProps {
  project: Project;
}

const MODAL_TRANSITION_MS = 180;

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [entered, setEntered] = useState(false);
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const badgeLabel = project.category === "work" ? "Work" : "Personal";
  const badgeClasses =
    project.category === "work"
      ? "bg-gold/[0.12] text-gold"
      : "bg-accent/[0.12] text-accent";

  const closeModal = () => {
    if (closeTimeoutRef.current) return;
    setEntered(false);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    closeTimeoutRef.current = setTimeout(
      () => {
        setExpanded(false);
        closeTimeoutRef.current = null;
      },
      prefersReducedMotion ? 0 : MODAL_TRANSITION_MS
    );
  };

  useEffect(() => {
    if (!expanded) return;

    const frame = requestAnimationFrame(() => setEntered(true));
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      triggerButtonRef.current?.focus();
    };
  }, [expanded]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-surface-raised p-7 transition-colors duration-200 hover:border-border-strong">
      <div className="mb-4 flex items-center gap-2.5">
        <span className={`rounded-pill px-2.5 py-1 font-mono text-[11.5px] tracking-wide ${badgeClasses}`}>
          {badgeLabel}
        </span>
      </div>
      <h3 className="mb-2 text-[19px] font-bold text-text-primary">
        {project.name}
      </h3>
      <p className="mb-4 flex-grow text-[14.5px] leading-relaxed text-text-secondary line-clamp-3">
        {project.description}
      </p>
      <div className="mb-[18px] flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 text-[13.5px] font-semibold">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary transition-colors hover:text-text-primary"
        >
          View App ↗
        </a>
        <button
          ref={triggerButtonRef}
          type="button"
          onClick={() => setExpanded(true)}
          aria-haspopup="dialog"
          className="flex items-center gap-1.5 text-accent"
        >
          <span>View details</span>
          <span className="inline-block">⌄</span>
        </button>
      </div>

      {expanded &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            role="presentation"
            onClick={closeModal}
          >
            <div
              className={`fixed inset-0 bg-black/60 transition-opacity ease-out motion-reduce:transition-none ${
                entered ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDuration: `${MODAL_TRANSITION_MS}ms` }}
              aria-hidden="true"
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              onClick={(event) => event.stopPropagation()}
              className={`relative w-full max-w-lg rounded-card border border-border bg-surface-raised p-7 shadow-xl transition-[opacity,transform] ease-out motion-reduce:transition-none ${
                entered
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-2 scale-95 opacity-0"
              }`}
              style={{ transitionDuration: `${MODAL_TRANSITION_MS}ms` }}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <span className={`mb-3 inline-block rounded-pill px-2.5 py-1 font-mono text-[11.5px] tracking-wide ${badgeClasses}`}>
                    {badgeLabel}
                  </span>
                  <h3
                    id={titleId}
                    className="text-[19px] font-bold text-text-primary"
                  >
                    {project.name}
                  </h3>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeModal}
                  aria-label="Close details"
                  className="shrink-0 text-xl leading-none text-text-secondary transition-colors hover:text-text-primary"
                >
                  ×
                </button>
              </div>
              <p className="text-[14.5px] leading-relaxed text-text-secondary">
                {project.description}
              </p>
              <div className="my-[18px] flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TechTag key={tag} label={tag} />
                ))}
              </div>
              <p className="border-t border-border pt-3.5 text-sm leading-relaxed text-text-secondary">
                {project.detail}
              </p>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[13.5px] font-semibold text-text-secondary transition-colors hover:text-text-primary"
              >
                View App ↗
              </a>
            </div>
          </div>,
          document.body
        )}
    </article>
  );
}
