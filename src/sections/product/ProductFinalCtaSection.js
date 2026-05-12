import { Button } from "@/components/ui/Button";
import { Section, SectionContainer } from "@/components/ui/Section";

export function ProductFinalCtaSection({ content }) {
  return (
    <Section className="bg-white py-16 lg:py-20">
      <SectionContainer size="full">
        <div className="rounded-[32px] bg-brand-primary px-6 py-12 text-center text-white sm:px-10 sm:py-14">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{content.heading}</h2>
          <p className="mx-auto mb-8 max-w-xl text-sm text-purple-100 opacity-80 sm:text-base">
            {content.description}
          </p>
          <Button variant="secondary" size="sm" className="text-brand-primary">
            {content.cta}
          </Button>
        </div>
      </SectionContainer>
    </Section>
  );
}
