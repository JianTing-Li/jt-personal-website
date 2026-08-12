import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { AppleIcon, AndroidIcon, SparkleIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export function Home() {
  return (
    <section
      id="home"
      className="relative flex scroll-mt-[76px] items-center overflow-hidden px-7 pb-16 pt-[140px] md:pb-[100px] md:pt-[176px]"
    >
      <div
        aria-hidden="true"
        className="bg-glow pointer-events-none absolute right-[8%] top-[12%] h-[480px] max-h-[60vw] w-[480px] max-w-[60vw] rounded-full bg-accent/35 blur-[10px]"
      />
      <div aria-hidden="true" className="bg-dot-grid pointer-events-none absolute inset-0" />

      <Container maxWidth={1100} className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1fr_300px]">
          <div>
            <div className="mb-[18px] font-mono text-sm tracking-wide text-gold">
              {siteConfig.name}
            </div>
            <h1 className="text-[32px] font-extrabold leading-[1.15] tracking-tight text-text-primary sm:text-[42px] md:text-[52px]">
              Mobile Shaped My Craft.{" "}
              <span className="text-accent">AI Is Expanding It.</span>
            </h1>
            <p className="mt-6 max-w-[580px] text-lg leading-relaxed text-text-secondary">
              I&apos;ve spent the past six years helping build production
              mobile applications, including the Goldman Sachs Marquee app.
              Today, I&apos;m combining that experience with AI product
              development to build products that solve meaningful problems.
              For me, AI isn&apos;t a career pivot. It&apos;s the next step
              in becoming a better engineer and product builder.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="#projects" variant="primary">
                Explore My Projects
              </ButtonLink>
              <ButtonLink href="#career" variant="secondary">
                View My Experience
              </ButtonLink>
            </div>
          </div>

          <div className="order-first flex flex-col items-center md:order-last md:items-end">
            <div className="relative h-[280px] w-[280px] shrink-0">
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-accent/50 to-gold/20" />
              <Image
                src="/headshot.png"
                alt="Jian Ting Li"
                width={280}
                height={280}
                priority
                unoptimized
                className="relative z-10 h-full w-full rounded-full object-cover object-top"
              />
            </div>
            <div className="mt-5 flex items-center gap-1 rounded-pill border border-border-strong bg-surface-raised px-4 py-2">
              <span className="flex items-center gap-1.5 px-1.5 text-text-secondary">
                <AppleIcon className="h-4 w-4" />
                <span className="text-xs font-medium">iOS</span>
              </span>
              <span className="h-3.5 w-px bg-border-strong" />
              <span className="flex items-center gap-1.5 px-1.5 text-text-secondary">
                <AndroidIcon className="h-4 w-4" />
                <span className="text-xs font-medium">Android</span>
              </span>
              <span className="h-3.5 w-px bg-border-strong" />
              <span className="flex items-center gap-1.5 px-1.5 text-gold">
                <SparkleIcon className="h-4 w-4" />
                <span className="text-xs font-medium">AI</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
