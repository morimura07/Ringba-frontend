import {
  Award,
  BarChart2,
  Cpu,
  Eye,
  GitBranch,
  Handshake,
  Layers,
  Lock,
  Phone,
  Settings,
  Tag,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

export const leadGenerationFeatures = [
  {
    icon: Users,
    title: "World Class Team",
    description:
      "Made by seasoned AdTech engineers, product designers, and marketers. Your success is our priority.",
  },
  {
    icon: Award,
    title: "Award Winning Support",
    description:
      "Our support engineering team is standing by to help anytime you need it at no extra cost.",
  },
  {
    icon: Handshake,
    title: "Partner Centric",
    description:
      "No contracts, features gatekeeping, or price gouging. Use what you need. We grow as you grow.",
  },
  {
    icon: Lock,
    title: "Completely Open Framework",
    description:
      "Use the same API's we do to create seamless integrations and powerful workflow.",
  },
];

export const platformCapabilities = [
  {
    title: "On Demand Global Access",
    description:
      "Instant telecommunications network access to connect with consumers in 60+ countries",
    imageSrc: "/images/On Demand Global Access.png",
  },
  {
    title: "Intelligent Call Routing",
    description:
      "Achieve the maximum yield across all of your advertising channels with automated call routing.",
    imageSrc: "/images/Intelligent Call Routing.png",
  },
  {
    title: "Unparalleled Analytics",
    description:
      "Weaponize your data with reporting and analytics light years ahead of the competition.",
    imageSrc: "/images/Unparalleled Analytics.png",
  },
];

export const advancedCapabilities = [
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description:
      "Harness the power of ground breaking AI to improve your business with automated decisions.",
  },
  {
    icon: Eye,
    title: "Consumer Insights",
    description:
      "Access Key conversion insights for personalizing the caller experience and optimizing your campaigns.",
  },
  {
    icon: Settings,
    title: "Automated Complince",
    description:
      "Keep your business compliant with automated monitoring of your calls for behavior patterns and compliance flags.",
  },
];

export const productCards = [
  {
    icon: Phone,
    title: "Call Tracking",
    description:
      "Automate your call flow, dynamically route based on performance, manage your partners, and load balance your calls in real-time with Ringba's Industry leading Call Tracking.",
  },
  {
    icon: BarChart2,
    title: "Interactive Voice Response",
    description:
      "Pre-qualify potential clients, craft incredible customer experiences, and automate your customer service workflows with our easy to use IVR builder.",
  },
  {
    icon: GitBranch,
    title: "Ring Tree®",
    description:
      "Integrate with the world's largest call buyers inside your own private real time bidding marketplace.",
  },
  {
    icon: Tag,
    title: "White Label",
    description:
      "Power your Pay Per Call Network or Digital Agency with Ringba's Revolutionary technology all under your own brand.",
  },
  {
    icon: UserCheck,
    title: "Instant Caller Profile",
    description:
      "Make extraordinary data driven decisions before the phone ever rings with Ringba's real-time caller data enrichment.",
  },
];

export const reportingShowcase = {
  reportingRows: [
    { label: "THE CAMPAIGN", date: "Apr 19, 2026", nested: false },
    { label: "YOUR TARGET", date: "Apr 19, 2026", nested: true },
    { label: "DUPLICATE", date: "Apr 19, 2026", nested: false },
    { label: "NUMBER POOL", date: "Apr 19, 2026", nested: false },
  ],
  topPerformers: [
    { name: "Adburst Media", value: "1,012,558" },
    { name: "Ringtronic", value: "861,773" },
    { name: "GTD Media", value: "634,241" },
  ],
  targets: [
    { name: "Call BPO", live: "123", hour: "522", statusColor: "bg-indigo-600" },
    { name: "VoiceLogix", live: "86", hour: "282", statusColor: "bg-yellow-400" },
    { name: "Mark Insurance", live: "48", hour: "345", statusColor: "bg-red-500" },
    { name: "GoLive Telesales", live: "39", hour: "124", statusColor: "bg-indigo-600" },
  ],
};

export const productHighlights = [
  {
    title: "Call tracking",
    body: "Attribute every call to the exact source that produced it—down to the keyword.",
  },
  {
    title: "Intelligent routing",
    body: "Match high-value callers to the right destination with live rules and fallbacks.",
  },
  {
    title: "Quality & compliance",
    body: "Record, redact, and retain calls to the standard your legal team expects.",
  },
  {
    title: "Integrations",
    body: "Push events to your CRM, data lake, and ad platforms without fragile scripts.",
  },
  {
    title: "Analytics suite",
    body: "Prebuilt views for marketing, operations, and leadership with exportable detail.",
  },
];

export const sectionBadges = {
  leadGeneration: { emoji: "💡", label: "Why Choose Us?" },
  platform: { label: "Platform" },
  advanced: { icon: Zap, label: "Advanced Capabilities" },
  products: { icon: Layers, label: "Product" },
};
