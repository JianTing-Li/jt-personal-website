"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  ProjectFilter,
  type FilterValue,
} from "@/components/projects/ProjectFilter";

export function Projects() {
  const [filter, setFilter] = useState<FilterValue>("All");

  const visibleProjects = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="03 — PROJECTS" title="Selected Work" />

          <div className="mt-9">
            <ProjectFilter active={filter} onChange={setFilter} />
          </div>

          <ul className="mt-9 grid grid-cols-1 gap-6 [grid-template-columns:repeat(auto-fill,minmax(320px,1fr))]">
            {visibleProjects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
