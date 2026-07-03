import {
  Factory, Fuel, HeartPulse, Landmark, ShoppingBag, Zap, Radio, Building2, Truck, Car,
  type LucideIcon,
} from "lucide-react";

export type IndustryDef = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  challenge: string;
  solutions: string[];
  relatedServiceSlugs: string[];
  stat: { value: string; label: string };
};

export const INDUSTRIES: IndustryDef[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    tagline: "Smart factories engineered for measurable production gains.",
    challenge:
      "Manufacturers are under pressure to raise throughput and quality while integrating legacy plant-floor systems with modern enterprise and data platforms.",
    solutions: [
      "Production-line automation & robotics integration",
      "MES / ERP convergence for real-time visibility",
      "Predictive maintenance powered by IoT and ML",
      "OT/IT cyber security hardening",
    ],
    relatedServiceSlugs: ["industrial-automation", "manufacturing-automation", "mes"],
    stat: { value: "40%", label: "avg. reduction in unplanned downtime" },
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    icon: Fuel,
    tagline: "Resilient control systems for the world's most demanding environments.",
    challenge:
      "Upstream, midstream and downstream operators need continuous, fail-safe control over distributed, remote and hazardous assets.",
    solutions: [
      "SCADA & DCS design for critical process control",
      "Remote asset monitoring across distributed sites",
      "Regulatory & safety compliance engineering",
      "Digital twin and predictive analytics for assets",
    ],
    relatedServiceSlugs: ["scada", "dcs", "industrial-automation"],
    stat: { value: "24/7", label: "remote operations visibility" },
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    icon: HeartPulse,
    tagline: "Secure, compliant technology for patient-critical operations.",
    challenge:
      "Providers and life sciences organizations must modernize care and research technology while meeting strict HIPAA, GxP and data-residency requirements.",
    solutions: [
      "HIPAA & GxP-aligned application development",
      "Clinical & research data platforms",
      "Interoperability across EHR/EMR systems",
      "Zero-trust security for patient data",
    ],
    relatedServiceSlugs: ["cyber-security", "data-analytics", "cloud-services"],
    stat: { value: "100%", label: "HIPAA-aligned delivery practices" },
  },
  {
    slug: "bfsi",
    name: "BFSI",
    icon: Landmark,
    tagline: "Trusted technology for banking, financial services and insurance.",
    challenge:
      "Financial institutions must innovate on digital experience and fraud analytics without compromising regulatory compliance or system uptime.",
    solutions: [
      "Core banking & payments modernization",
      "Fraud detection with AI/ML models",
      "Regulatory reporting & compliance automation",
      "Zero-trust security architecture",
    ],
    relatedServiceSlugs: ["cyber-security", "data-analytics", "artificial-intelligence"],
    stat: { value: "99.99%", label: "uptime engineered for core systems" },
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    icon: ShoppingBag,
    tagline: "Unified commerce experiences that turn data into revenue.",
    challenge:
      "Retailers need a single view of the customer across channels, with personalization and inventory intelligence that scales through demand spikes.",
    solutions: [
      "Unified commerce & CRM platforms",
      "Personalization & demand-forecasting AI",
      "Peak-season scalable cloud architecture",
      "Omnichannel inventory and order orchestration",
    ],
    relatedServiceSlugs: ["crm-solutions", "business-intelligence", "artificial-intelligence"],
    stat: { value: "3x", label: "faster peak-load scaling" },
  },
  {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    icon: Zap,
    tagline: "Grid-scale intelligence for a changing energy landscape.",
    challenge:
      "Utilities are managing aging infrastructure, renewable integration and rising cyber-risk on critical national infrastructure simultaneously.",
    solutions: [
      "SCADA modernization for grid operations",
      "Smart metering & IoT telemetry platforms",
      "Renewable integration & load forecasting",
      "Critical infrastructure cyber security",
    ],
    relatedServiceSlugs: ["scada", "iot", "industrial-automation"],
    stat: { value: "25+", label: "countries with utility deployments" },
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    icon: Radio,
    tagline: "Network-scale platforms built for reliability and speed.",
    challenge:
      "Telcos need to modernize legacy OSS/BSS stacks and ship customer-facing digital products at a pace that matches hyperscale competitors.",
    solutions: [
      "OSS/BSS modernization",
      "Cloud-native network & service platforms",
      "Big-data pipelines for network analytics",
      "DevOps for rapid, reliable release cycles",
    ],
    relatedServiceSlugs: ["cloud-services", "big-data", "devops"],
    stat: { value: "10x", label: "faster release cadence achieved" },
  },
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    icon: Building2,
    tagline: "Secure, citizen-first digital services at public-sector scale.",
    challenge:
      "Public sector bodies must modernize citizen services and legacy infrastructure under strict security, accessibility and procurement constraints.",
    solutions: [
      "Citizen-facing digital service platforms",
      "Legacy infrastructure modernization",
      "Government-grade cyber security & compliance",
      "24/7 managed operations for public systems",
    ],
    relatedServiceSlugs: ["cyber-security", "infrastructure-services", "managed-it-services"],
    stat: { value: "ISO 27001", label: "aligned security practices" },
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    icon: Truck,
    tagline: "End-to-end visibility from origin to last mile.",
    challenge:
      "Global supply chains need real-time visibility, resilient routing and verifiable multi-party data as volumes and disruption both keep rising.",
    solutions: [
      "IoT-based fleet & shipment tracking",
      "Blockchain-based traceability & documentation",
      "Demand and route optimization analytics",
      "Warehouse & distribution automation",
    ],
    relatedServiceSlugs: ["iot", "blockchain", "business-intelligence"],
    stat: { value: "18%", label: "avg. logistics cost reduction" },
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: Car,
    tagline: "Engineering the software-defined vehicle and smart plant.",
    challenge:
      "Automakers and suppliers are racing to modernize production automation while building the connected, software-defined vehicles of the next decade.",
    solutions: [
      "Production-line robotics & automation",
      "Connected-vehicle IoT platforms",
      "Predictive quality with machine learning",
      "Global supplier data integration",
    ],
    relatedServiceSlugs: ["manufacturing-automation", "iot", "machine-learning"],
    stat: { value: "30%", label: "faster line-changeover times" },
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
