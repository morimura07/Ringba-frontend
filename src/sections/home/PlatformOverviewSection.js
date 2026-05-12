import Image from "next/image";
import { Download } from "lucide-react";
import { platformCapabilities } from "@/constants/home";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionContainer } from "@/components/ui/Section";

function PlatformCard({ title, description, imageSrc }) {
  return (
    <Card
      variant="glass"
      className="flex min-h-[360px] flex-col items-start p-6 transition-colors hover:bg-white/10"
    >
      <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">{title}</h3>
      <p className="mb-8 text-sm leading-relaxed text-purple-100/70">{description}</p>
      <div className="mt-auto flex w-full justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={144}
          height={144}
          className="h-32 w-32 object-contain opacity-90 md:h-36 md:w-36"
        />
      </div>
    </Card>
  );
}

export function PlatformOverviewSection() {
  return (
    <Section className="bg-[#4c28d7] py-16">
      <SectionContainer size="lg" className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-1 shadow-lg">
            <div className="rounded bg-purple-100 p-1">
              <div className="h-3 w-3 rounded-sm border-2 border-purple-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-tight text-brand-deep">
              Platform
            </span>
          </div>
        </div>

        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Simple Call Tracking and Routing
        </h2>
        <p className="mb-12 font-mono text-base text-purple-100/80 md:text-lg">
          Track, route, and analyze every call from one simple platform.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {platformCapabilities.map((capability) => (
            <PlatformCard key={capability.title} {...capability} />
          ))}
        </div>

        <Button
          variant="secondary"
          className="bg-white text-[#4c28d7] shadow-xl hover:bg-purple-50"
        >
          Ringba Overview
          <span className="ml-3 rounded-full bg-purple-100 p-1.5">
            <Download size={18} className="text-[#4c28d7]" />
          </span>
        </Button>
      </SectionContainer>
    </Section>
  );
}
