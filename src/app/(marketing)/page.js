import {
  AdvancedCapabilitiesSection,
  CallManagementSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  LeadGenerationSection,
  PlatformOverviewSection,
  PricingSection,
  ProductExplorationSection,
} from "@/sections/home";

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <LeadGenerationSection />
      <PlatformOverviewSection />
      <CallManagementSection />
      <AdvancedCapabilitiesSection />
      <ProductExplorationSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
