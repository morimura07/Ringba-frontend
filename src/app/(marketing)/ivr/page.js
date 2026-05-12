import { ivrMetadata, ivrPageContent } from "@/constants/productPages";
import { ProductMarketingPage } from "@/sections/product";

export const metadata = ivrMetadata;

export default function IvrPage() {
  return <ProductMarketingPage content={ivrPageContent} />;
}
