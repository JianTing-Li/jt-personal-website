import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const focusAreas = [
  {
    title: "AI Products for Real Workflows",
    description:
      "Thoughtful AI experiences designed around genuine user needs — helping people understand information, make decisions, and complete work more effectively.",
  },
  {
    title: "Production Mobile Experiences",
    description:
      "Reliable iOS and Android products that make complex workflows feel clear, responsive, and intuitive for the people using them.",
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
            description="Every product starts with understanding someone's problem. From there, I choose the right mix of mobile engineering, AI, and thoughtful design. Not because it's trendy, but because it genuinely makes the experience better."
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
