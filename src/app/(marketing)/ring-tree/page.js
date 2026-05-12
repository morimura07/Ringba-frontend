import { ringTreeMetadata, ringTreePageContent } from "@/constants/productPages";
import { ProductMarketingPage } from "@/sections/product";

export const metadata = ringTreeMetadata;

export default function RingTreePage() {
  return <ProductMarketingPage content={ringTreePageContent} />;
}
