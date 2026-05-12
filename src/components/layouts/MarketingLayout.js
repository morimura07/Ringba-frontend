import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/**
 * Shared marketing shell for public-facing pages.
 */
export function MarketingLayout({ children, showFooter = true }) {
  return (
    <>
      <SiteHeader />
      {children}
      {showFooter ? <SiteFooter /> : null}
    </>
  );
}
