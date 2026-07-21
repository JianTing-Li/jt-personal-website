import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aboutChapters } from "@/data/about";

export function About() {
  return (
    <Section id="about">
      <Container maxWidth={900}>
        <Reveal>
          <SectionHeading
            eyebrow="05 — ABOUT"
            title="A little more about me"
          />

          <div className="mt-10 flex flex-col gap-9">
            {aboutChapters.map((chapter) => (
              <div key={chapter.number} className="grid grid-cols-[56px_1fr] gap-5">
                <div className="pt-[3px] font-mono text-[15px] text-text-muted">
                  {chapter.number}
                </div>
                <div>
                  <div className="mb-2 text-lg font-bold text-text-primary">
                    {chapter.title}
                  </div>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {chapter.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-11 border-t border-border pt-7 text-sm text-text-muted">
            Outside of work, you&apos;ll usually find me meditating, cooking,
            playing pickleball, traveling, or following the markets.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
