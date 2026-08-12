import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const focusAreas = [
  {
    title: "Practical AI Tools for Everyday Work",
    description:
      "I build small AI-powered tools that save people real time — turning a pile of messy spreadsheets into clear answers, or automating a step that used to take hours of manual work.",
  },
  {
    title: "Production Mobile Engineering",
    description:
      "Six years shipping and maintaining iOS and Android software used daily by institutional traders and investors — professional engineering work, not side-project apps.",
  },
];

export function WhatIBuild() {
  return (
    <Section id="what-i-build" tone="surface">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="02 — WHAT I BUILD"
            title="Products for people, built with care underneath"
            description="I start by talking to the people who'll actually use what I'm building, then work backward to the simplest thing that solves it — sometimes that's a mobile feature, sometimes a small AI-powered tool, sometimes just fixing what's already there."
          />

          <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="flex flex-col justify-center rounded-card border border-border bg-surface-raised p-8"
              >
                <div className="mb-3 text-xl font-bold text-text-primary">
                  {area.title}
                </div>
                <p className="text-[15px] leading-relaxed text-text-secondary">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
