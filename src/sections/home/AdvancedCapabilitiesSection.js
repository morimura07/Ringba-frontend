import { Zap } from "lucide-react";
import { advancedCapabilities } from "@/constants/home";
import { Card } from "@/components/ui/Card";
import {
  Section,
  SectionBadge,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "@/components/ui/Section";

function CapabilityCard({ icon: Icon, title, description }) {
  return (
    <Card className="flex flex-col items-start gap-6 rounded-[32px] bg-[#f8f9fa] p-10 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
        <Icon className="h-6 w-6 text-brand-primary" />
      </div>
      <div className="mt-4">
        <h3 className="mb-4 text-2xl font-bold text-brand-deep">{title}</h3>
        <p className="max-w-[280px] text-[15px] leading-relaxed text-brand-muted">
          {description}
        </p>
      </div>
    </Card>
  );
}

export function AdvancedCapabilitiesSection() {
  return (
    <Section className="rounded-[40px] bg-white">
      <SectionContainer size="xl">
        <div className="mb-20">
          <SectionBadge className="mb-8 bg-[#f0ecff] text-brand-primary">
            <Zap size={14} fill="currentColor" />
            Advanced Capabilities
          </SectionBadge>
          <SectionHeading className="mb-8">
            Go Beyond Basic Call Tracking
          </SectionHeading>
          <SectionDescription className="font-mono opacity-80">
            Use AI, Insights and Automations to make smarter decisions and
            improve perfromance at scale
          </SectionDescription>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {advancedCapabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
}
