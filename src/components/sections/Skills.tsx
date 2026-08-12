import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aiSkills, mobileSkills } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills-section">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="01 — SKILLS" title="What I work with" />

          <div className="mt-10">
            <div className="mb-4 flex items-center gap-2.5 text-[15px] font-semibold text-text-primary">
              <span className="h-2 w-2 rounded-full bg-accent" />
              AI Tools & Products
            </div>
            <div className="flex flex-wrap gap-3">
              {aiSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-pill border border-accent/28 bg-accent/[0.06] px-4 py-2.5 text-sm text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9">
            <div className="mb-4 flex items-center gap-2.5 text-[15px] font-semibold text-text-primary">
              <span className="h-2 w-2 rounded-full bg-gold" />
              iOS & Android Engineering
            </div>
            <div className="flex flex-wrap gap-3">
              {mobileSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-pill border border-accent/28 bg-accent/[0.06] px-4 py-2.5 text-sm text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
