import { callTrackingMetadata, callTrackingPageContent } from "@/constants/callTracking";
import { ProductMarketingPage } from "@/sections/product";

export const metadata = callTrackingMetadata;

export default function CallTrackingPage() {
  return <ProductMarketingPage content={callTrackingPageContent} />;
}
