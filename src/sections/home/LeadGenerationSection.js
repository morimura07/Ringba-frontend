import { ArrowRight } from "lucide-react";
import { leadGenerationFeatures } from "@/constants/home";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Section,
  SectionContainer,
  SectionDescription,
  SectionHeader,
  SectionHeading,
} from "@/components/ui/Section";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card variant="feature" className="flex min-h-[320px] flex-col gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-deep">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-4 text-2xl font-bold text-brand-deep">{title}</h3>
      <p className="text-[15px] leading-relaxed text-gray-600">{description}</p>
    </Card>
  );
}

export function LeadGenerationSection() {
  return (
    <Section className="min-h-screen bg-white py-24 text-white">
      <SectionContainer size="lg">
        <SectionHeader>
          <div className="mb-8 inline-flex items-center gap-2 rounded-md bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-black">
            <span className="text-purple-700">💡</span> Why Choose Us?
          </div>
          <SectionHeading className="mb-6 text-4xl text-purple-700 md:text-5xl">
            <span className="text-purple-700">Power Your</span> Entire Business
          </SectionHeading>
          <SectionDescription className="mx-auto max-w-2xl font-medium text-[#333333]">
            Ringba was designed to push the limits of innovation. Our Team is the
            future of voice and changing how businesses connect with consumers.
          </SectionDescription>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {leadGenerationFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}

          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#5333cf] via-[#3d21a5] to-[#210d6e] p-12 text-center md:col-span-2">
            <h2 className="relative z-10 mb-3 text-3xl font-bold text-white md:text-4xl">
              Ready to get started?
            </h2>
            <p className="relative z-10 mb-10 text-md text-purple-100/70">
              See how it works and start tracking your calls.
            </p>
            <div className="relative z-10 flex flex-col items-center gap-6 sm:flex-row">
              <Button variant="secondary" className="bg-white text-brand-deep hover:bg-gray-100">
                Contact Us
              </Button>
              <button type="button" className="group flex items-center gap-2 text-white">
                <span className="border-b border-transparent font-semibold transition-all group-hover:border-white">
                  Book Live Demo
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 p-1.5 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
