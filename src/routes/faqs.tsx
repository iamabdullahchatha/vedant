import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/home-sections";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faqs")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQs — Vedant Holdings" },
      { name: "description", content: "Frequently asked questions about Vedant Holdings' enterprise services, engagement models and global delivery." },
      { property: "og:title", content: "FAQs — Vedant Holdings" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
});

const FAQS = [
  ["What industries does Vedant Holdings serve?", "We serve manufacturing, BFSI, healthcare, life sciences, energy, utilities, telecom, government, retail, logistics and automotive — with dedicated domain-expert teams for each."],
  ["Which countries do you operate in?", "Vedant operates across 25+ countries including the USA, Canada, UK, Ireland, Germany, France, Switzerland, Poland, Sweden, UAE, Saudi Arabia, Oman, Qatar, Kuwait, India, Singapore, Malaysia, Japan, Australia, China and South Korea."],
  ["What engagement models do you offer?", "We work on fixed-scope projects, dedicated teams, managed services, staff augmentation and outcome-based commercial models."],
  ["What is your average project delivery timeline?", "Typical engagements range from 8-week accelerators to multi-year global transformation programs, with clearly defined milestones."],
  ["How do you ensure security and compliance?", "We follow ISO 27001-aligned processes, zero-trust architecture, secure SDLC, and regional data-residency compliance including GDPR and HIPAA where applicable."],
  ["Do you work with Salesforce and SAP?", "Yes — we have 1700+ Salesforce certifications and deep SAP capability across consulting, implementation, integration and managed services."],
  ["Do you support industrial automation?", "Absolutely. We deliver PLC, SCADA, DCS, MES and Industry 4.0 solutions for smart factories globally."],
  ["Can you scale a team quickly?", "Yes. Our global talent network can mobilize certified specialists in days across most technologies."],
  ["What cloud platforms do you support?", "AWS, Microsoft Azure, Google Cloud, Oracle Cloud and hybrid/private deployments."],
  ["How do you approach AI and Generative AI?", "We build production-grade ML, computer vision, NLP and enterprise GenAI solutions with governance, evaluation and MLOps baked in."],
  ["Do you provide 24/7 managed services?", "Yes. Follow-the-sun support with defined SLAs is available for infrastructure, applications, cybersecurity and data platforms."],
  ["How do you price engagements?", "Fixed-scope, T&M, dedicated capacity or outcome-based — we tailor commercials to the engagement."],
  ["Can Vedant help with recruitment?", "Yes. Permanent hiring, contract staffing and RPO across technology, engineering and enterprise functions globally."],
  ["Do you offer proof-of-concept engagements?", "Yes. Short, outcome-focused PoCs are a common starting point for AI, automation and cloud initiatives."],
  ["Which regulations are you familiar with?", "GDPR, HIPAA, PCI-DSS, SOX, ISO 27001, ISO 9001, GxP and regional compliance frameworks."],
  ["Can you integrate with existing ERP/CRM systems?", "Yes. We deliver integrations across SAP, Salesforce, Oracle, Microsoft Dynamics and custom platforms."],
  ["Do you support digital transformation for mid-market clients?", "Yes. We work with both Fortune 500 enterprises and high-growth mid-market organizations."],
  ["What is your approach to change management?", "Structured governance, executive enablement, training academies and adoption analytics — outcomes, not just go-lives."],
  ["How do you measure success?", "Business KPIs are defined upfront and tracked through every phase, with executive-level dashboards and QBRs."],
  ["How do I start a conversation?", "Use the contact form or request a consultation — a senior partner will respond within one business day."],
];

function FAQPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQs"
        title={<>Answers to the questions <span className="text-gradient-brand bg-clip-text">enterprises ask us most.</span></>}
        subtitle="Everything you need to know about working with Vedant Holdings."
      />
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map(([q, a], i) => (
              <AccordionItem
                key={i}
                value={`i-${i}`}
                className="rounded-2xl border border-border/60 bg-white px-6 shadow-card-soft"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
