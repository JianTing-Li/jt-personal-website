"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  ProjectFilter,
  type FilterValue,
} from "@/components/projects/ProjectFilter";

const GRID_TRANSITION_MS = 180;

function filterProjects(filter: FilterValue): Project[] {
  return filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter);
}

export function Projects() {
  const [filter, setFilter] = useState<FilterValue>("All");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(() =>
    filterProjects("All")
  );
  const [gridEntered, setGridEntered] = useState(true);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleFilterChange = (nextFilter: FilterValue) => {
    if (nextFilter === filter || transitionTimeoutRef.current) return;
    setFilter(nextFilter);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisibleProjects(filterProjects(nextFilter));
      return;
    }

    setGridEntered(false);
    transitionTimeoutRef.current = setTimeout(() => {
      setVisibleProjects(filterProjects(nextFilter));
      transitionTimeoutRef.current = null;
      requestAnimationFrame(() => setGridEntered(true));
    }, GRID_TRANSITION_MS);
  };

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current);
    };
  }, []);

  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="03 — PROJECTS" title="Selected Work" />

          <div className="mt-9">
            <ProjectFilter active={filter} onChange={handleFilterChange} />
          </div>

          <ul
            className={`mt-9 grid grid-cols-1 items-stretch gap-6 transition-[opacity,transform] ease-out motion-reduce:transition-none md:grid-cols-2 lg:grid-cols-3 ${
              gridEntered
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-2 scale-[0.98] opacity-0"
            }`}
            style={{ transitionDuration: `${GRID_TRANSITION_MS}ms` }}
          >
            {visibleProjects.map((project) => (
              <li key={project.id} className="h-full">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
