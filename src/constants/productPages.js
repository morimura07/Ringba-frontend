import {
  BarChart2,
  BarChart3,
  CreditCard,
  GitBranch,
  Globe,
  Handshake,
  Layers,
  Link2,
  MessageCircleMore,
  Phone,
  Puzzle,
  Scale,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

export const ivrMetadata = {
  title: "Interactive Voice Response - Ringba",
  description:
    "Pre-qualify callers, automate customer service workflows, and build powerful IVR experiences with Ringba.",
  keywords: ["ivr", "interactive voice response", "call automation", "ringba"],
};

export const ivrPageContent = {
  hero: {
    breadcrumb: "Products » IVR",
    badgeIcon: BarChart2,
    titleLines: ["Interactive Voice", "Response Software"],
    description:
      "Pre-qualify potential clients, craft incredible customer experiences, and automate your customer service workflows with our easy to use IVR builder.",
    primaryCta: "Get Started",
    secondaryCta: "Book Live Demo",
  },
  performance: {
    badgeIcon: Wrench,
    badge: "Built for Automation",
    heading: "Purpose Built for IVR Workflows",
    description:
      "Design, launch, and optimize voice experiences with flexible call flows and real-time insights.",
    cards: [
      {
        icon: Globe,
        title: "Global Call\nExperiences",
        description:
          "Launch IVR journeys across markets with carrier access and routing built in.",
      },
      {
        icon: Handshake,
        title: "Partner Ready\nFlows",
        description:
          "Connect buyers, sellers, and teams with routing rules that adapt to every caller.",
      },
      {
        icon: Workflow,
        title: "Visual Flow\nBuilder",
        description:
          "Build and update IVR paths quickly without rebuilding your entire call stack.",
      },
      {
        icon: TrendingUp,
        title: "Actionable Voice\nAnalytics",
        description:
          "See where callers drop off, convert, or need a live agent before the next call arrives.",
      },
    ],
  },
  scaleBanner: {
    titleLines: ["Automate Every", "Caller Journey"],
    description:
      "Turn repetitive phone handling into guided experiences that qualify leads, route callers, and protect compliance at scale.",
    cta: "Product Overview",
  },
  framework: {
    heading: "Built-In IVR Framework",
    cards: [
      {
        icon: Phone,
        title: "Caller Qualification",
        description:
          "Capture intent, route high-value callers, and reduce wasted agent time.",
      },
      {
        icon: ShieldCheck,
        title: "Compliance Guardrails",
        description:
          "Keep every voice journey aligned with your business and industry requirements.",
      },
      {
        icon: BarChart3,
        title: "Journey Reporting",
        description:
          "Measure every branch, prompt, and handoff with reporting built for operators.",
      },
    ],
  },
  capabilities: {
    badge: "IVR Capabilities",
    heading: "Design and control every voice path",
    cards: [
      {
        title: "Drag-and-Drop IVR Builder",
        description:
          "Create call trees, prompts, and routing logic without waiting on engineering cycles.",
        image: "/images/routing.png",
      },
      {
        title: "Smart Caller Routing",
        description:
          "Send callers to the right queue, buyer, or workflow based on live performance and availability.",
        image: "/images/tracking.png",
      },
      {
        title: "Real-Time Voice Analytics",
        description:
          "Understand caller behavior across prompts, branches, and outcomes as calls happen.",
        image: "/images/analytics.png",
      },
    ],
  },
  features: {
    badge: "IVR Features",
    heading: "Everything You Need to Run Voice Automation",
    description:
      "Launch faster with weekly product updates shaped by operator feedback and market demand.",
    items: [
      {
        icon: BarChart3,
        title: "Prompt Performance",
        description:
          "Track which prompts convert, stall, or create abandon risk across every campaign.",
      },
      {
        icon: CreditCard,
        title: "Number Management",
        description:
          "Provision toll-free and local numbers for every IVR entry point worldwide.",
      },
      {
        icon: Link2,
        title: "Source Attribution",
        description:
          "Tie IVR outcomes back to traffic sources, keywords, and partner performance.",
      },
      {
        icon: SlidersHorizontal,
        title: "Dynamic Branching",
        description:
          "Route callers through different paths based on time, geography, or buyer rules.",
      },
      {
        icon: Scale,
        title: "Load Balancing",
        description:
          "Protect answer rates by distributing callers across available destinations.",
      },
      {
        icon: Puzzle,
        title: "Stack Integrations",
        description:
          "Connect IVR data to your CRM, BI tools, and downstream automation systems.",
      },
      {
        icon: MessageCircleMore,
        title: "Live Support",
        description:
          "Get help from voice workflow experts when you need to launch or optimize quickly.",
      },
      {
        icon: Settings,
        title: "API Access",
        description:
          "Manage prompts, routes, and reporting programmatically across your stack.",
      },
    ],
  },
  solutions: {
    heading: "IVR for Every Growth Team",
    description:
      "Use voice automation for qualification, support, and routing without losing control of the caller experience.",
    cta: "Case Study",
    cards: [
      { icon: Users, title: "Lead Generation Teams" },
      { icon: Phone, title: "Customer Support Centers" },
      { title: "Pay Per Call Networks", variant: "network" },
    ],
  },
  finalCta: {
    heading: "Try Ringba IVR",
    description:
      "Build voice journeys that qualify callers, route demand, and scale without adding friction.",
    cta: "Get Started",
  },
};

export const ringTreeMetadata = {
  title: "Ring Tree - Ringba",
  description:
    "Connect with the world's largest call buyers inside your own private real-time bidding marketplace.",
  keywords: ["ring tree", "call buyers", "real-time bidding", "ringba"],
};

export const ringTreePageContent = {
  hero: {
    breadcrumb: "Products » Ring Tree",
    badgeIcon: GitBranch,
    titleLines: ["Ring Tree", "Marketplace Software"],
    description:
      "Instantly integrate the world’s largest call buyers inside your own private real-time bidding marketplace. The future of pay per call is here.",
    primaryCta: "Get Started",
    secondaryCta: "Book Live Demo",
  },
  performance: {
    badgeIcon: Layers,
    badge: "Built for Marketplaces",
    heading: "Purpose Built for Call Buyers and Sellers",
    description:
      "Operate a private bidding environment with routing, caps, and reporting built for scale.",
    cards: [
      {
        icon: Globe,
        title: "Global Buyer\nAccess",
        description:
          "Expand into new markets with on-demand access to buyers and carriers worldwide.",
      },
      {
        icon: Handshake,
        title: "Partner Controls",
        description:
          "Manage buyers, sellers, caps, and payout rules from one operating layer.",
      },
      {
        icon: Workflow,
        title: "Real-Time\nAuction Logic",
        description:
          "Route each call to the highest-value destination with live bidding workflows.",
      },
      {
        icon: TrendingUp,
        title: "Marketplace\nAnalytics",
        description:
          "See yield, conversion, and partner performance across every route and buyer.",
      },
    ],
  },
  scaleBanner: {
    titleLines: ["Scale Your Private", "Call Marketplace"],
    description:
      "Give buyers and sellers a faster way to connect, bid, and optimize every inbound call in real time.",
    cta: "Product Overview",
  },
  framework: {
    heading: "Built-In Marketplace Framework",
    cards: [
      {
        icon: Phone,
        title: "Buyer Connections",
        description:
          "Connect demand and supply with routing designed for live call marketplaces.",
      },
      {
        icon: ShieldCheck,
        title: "Compliance Monitoring",
        description:
          "Protect marketplace operations with passive real-time compliance controls.",
      },
      {
        icon: BarChart3,
        title: "Auction Reporting",
        description:
          "Track bids, wins, and partner yield with reporting built for operators.",
      },
    ],
  },
  capabilities: {
    badge: "Ring Tree Capabilities",
    heading: "Run a private call marketplace",
    cards: [
      {
        title: "Real-Time Buyer Bidding",
        description:
          "Auction each call to the right buyer with routing logic that reacts instantly to performance.",
        image: "/images/analytics.png",
      },
      {
        title: "Intelligent Call Distribution",
        description:
          "Balance demand, caps, and partner productivity without manual intervention.",
        image: "/images/routing.png",
      },
      {
        title: "Advanced Marketplace Attribution",
        description:
          "Understand which buyers, routes, and sources drive the highest return on every call.",
        image: "/images/tracking.png",
      },
    ],
  },
  features: {
    badge: "Ring Tree Features",
    heading: "Everything You Need to Operate a Call Marketplace",
    description:
      "Move quickly with product updates shaped by marketplace operators and buyer demand.",
    items: [
      {
        icon: BarChart3,
        title: "Buyer Performance",
        description:
          "Monitor buyer conversion, caps, and payout efficiency in real time.",
      },
      {
        icon: CreditCard,
        title: "Number Management",
        description:
          "Provision inventory for sellers and route demand across your marketplace footprint.",
      },
      {
        icon: Link2,
        title: "Source Attribution",
        description:
          "Tie inbound demand back to campaigns, partners, and acquisition channels.",
      },
      {
        icon: SlidersHorizontal,
        title: "Auction Routing",
        description:
          "Send each call to the best buyer based on price, availability, and rules.",
      },
      {
        icon: Scale,
        title: "Yield Optimization",
        description:
          "Maximize revenue by balancing buyer demand, caps, and call quality.",
      },
      {
        icon: Puzzle,
        title: "Partner Integrations",
        description:
          "Connect marketplace data to finance, BI, and downstream fulfillment systems.",
      },
      {
        icon: MessageCircleMore,
        title: "Operator Support",
        description:
          "Work with marketplace specialists when you need to launch or tune buyer flows.",
      },
      {
        icon: Settings,
        title: "API Access",
        description:
          "Manage buyers, routes, and reporting programmatically across your stack.",
      },
    ],
  },
  solutions: {
    heading: "Ring Tree for Marketplace Operators",
    description:
      "Give affiliates, call centers, and pay-per-call networks a faster way to buy and sell demand.",
    cta: "Case Study",
    cards: [
      { icon: Users, title: "Affiliate Marketers" },
      { icon: Phone, title: "Inbound Sales Call Centers" },
      { title: "Pay Per Call Network", variant: "network" },
    ],
  },
  finalCta: {
    heading: "Try Ring Tree Now",
    description:
      "Launch a private call marketplace with bidding, routing, and analytics in one platform.",
    cta: "Get Started",
  },
};
