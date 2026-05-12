import { siteConfig } from "@/constants/site";
import { Button } from "@/components/ui/Button";
import { Section, SectionContainer } from "@/components/ui/Section";

export function FinalCtaSection() {
  return (
    <Section className="py-20">
      <SectionContainer size="md">
        <div
          className="overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-10"
          style={{
            backgroundColor: "#4c1d95",
            backgroundImage: `repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.04) 0px,
              rgba(255,255,255,0.04) 1px,
              transparent 1px,
              transparent 10px
            )`,
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Try Ringba Now
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
            See how teams replace disconnected tools with one platform for
            tracking, routing, and revenue reporting.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Button href="#get-started" variant="secondary" className="min-w-[200px]">
              Get Started
            </Button>
            <Button
              href={`tel:${siteConfig.supportPhone}`}
              variant="outline"
              className="min-w-[200px] border-2"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
