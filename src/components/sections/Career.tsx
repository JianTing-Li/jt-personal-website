import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { career } from "@/data/career";

export function Career() {
  return (
    <Section id="career" tone="surface">
      <Container maxWidth={900}>
        <Reveal>
          <SectionHeading eyebrow="04 — CAREER" title="How I got here" />

          <div className="mt-11 flex flex-col">
            {career.map((item) => (
              <div key={item.id} className="grid grid-cols-[24px_1fr] gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full ${
                      item.current
                        ? "bg-accent shadow-[0_0_0_4px_oklch(0.75_0.13_230_/_0.18)]"
                        : "bg-text-muted"
                    }`}
                  />
                  <div className="my-1.5 w-px flex-grow bg-border-strong" />
                </div>
                <div className="pb-[52px]">
                  {item.badge && (
                    <span className="mb-3 inline-block rounded-pill bg-accent px-2.5 py-[3px] font-mono text-[11.5px] tracking-wide text-bg">
                      {item.badge}
                    </span>
                  )}
                  <div className="mb-1 text-xl font-bold text-text-primary">
                    {item.title}
                  </div>
                  <div className="mb-1 text-[15px] font-medium text-gold">
                    {item.org}
                  </div>
                  <div className="mb-4 font-mono text-[13px] text-text-muted">
                    {item.dates}
                  </div>
                  <ul className="flex list-disc flex-col gap-2.5 pl-5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-[15px] leading-relaxed text-text-secondary"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
