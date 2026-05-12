export const primaryNavLinks = [
  {
    href: "#products",
    label: "Products",
    chevron: true,
    dropdown: [
      { label: "Call Tracking", href: "/call-tracking" },
      { label: "IVR", href: "/ivr" },
      { label: "Ring Tree", href: "/ring-tree" },
      { label: "Routing", href: "#routing" },
      { label: "Reporting", href: "#reporting" },
      { label: "Security", href: "#security" },
    ],
  },
  {
    href: "#resources",
    label: "Resources",
    chevron: true,
    dropdown: [
      { label: "Documentation", href: "#docs" },
      { label: "API Reference", href: "#api" },
      { label: "Blog", href: "#blog" },
      { label: "Support", href: "#support" },
    ],
  },
  {
    href: "#legal",
    label: "Legal",
    chevron: true,
    dropdown: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
  },
  { href: "#pricing", label: "Pricing", chevron: false },
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Call tracking", href: "/call-tracking" },
      { label: "Routing", href: "#products" },
      { label: "Reporting", href: "#resources" },
      { label: "Security", href: "#resources" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Lead generation", href: "#solutions" },
      { label: "Performance marketing", href: "#solutions" },
      { label: "Partner programs", href: "#solutions" },
      { label: "Enterprise", href: "#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#resources" },
      { label: "API reference", href: "#resources" },
      { label: "Blog", href: "#resources" },
      { label: "Support", href: "#resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
];
