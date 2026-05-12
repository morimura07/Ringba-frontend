import { ProductCapabilitiesSection } from "./ProductCapabilitiesSection";
import { ProductFeaturesSection } from "./ProductFeaturesSection";
import { ProductFinalCtaSection } from "./ProductFinalCtaSection";
import { ProductFrameworkSection } from "./ProductFrameworkSection";
import { ProductHeroSection } from "./ProductHeroSection";
import { ProductPerformanceSection } from "./ProductPerformanceSection";
import { ProductScaleBannerSection } from "./ProductScaleBannerSection";
import { ProductSolutionsSection } from "./ProductSolutionsSection";

export function ProductMarketingPage({ content }) {
  return (
    <main className="overflow-hidden bg-white font-sans text-foreground">
      <ProductHeroSection content={content.hero} />
      <ProductPerformanceSection content={content.performance} />
      <ProductScaleBannerSection content={content.scaleBanner} />
      <ProductFrameworkSection content={content.framework} />
      <ProductCapabilitiesSection content={content.capabilities} />
      <ProductFeaturesSection content={content.features} />
      <ProductSolutionsSection content={content.solutions} />
      <ProductFinalCtaSection content={content.finalCta} />
    </main>
  );
}

export {
  ProductCapabilitiesSection,
  ProductFeaturesSection,
  ProductFinalCtaSection,
  ProductFrameworkSection,
  ProductHeroSection,
  ProductPerformanceSection,
  ProductScaleBannerSection,
  ProductSolutionsSection,
};
