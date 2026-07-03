import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/home-sections";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Vedant Holdings" },
      { name: "description", content: "Enterprise consulting, cloud, AI, cyber security, industrial automation, Salesforce, SAP and global talent solutions." },
      { property: "og:title", content: "Services — Vedant Holdings" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const CATEGORIES = [
  {
    name: "Consulting & Transformation",
    items: ["IT Consulting", "Digital Transformation", "Enterprise Software Development", "Application Development", "Application Maintenance", "Managed IT Services", "Quality Assurance", "Automation Testing"],
  },
  {
    name: "Cloud, Data & Security",
    items: ["Cloud Services", "Cloud Migration", "DevOps", "Cyber Security", "Data Analytics", "Big Data", "Business Intelligence", "Infrastructure Services"],
  },
  {
    name: "AI, Automation & Emerging Tech",
    items: ["Artificial Intelligence", "Machine Learning", "Robotic Process Automation", "IoT", "Blockchain"],
  },
  {
    name: "Industrial & Enterprise Systems",
    items: ["Industrial Automation", "Manufacturing Automation", "PLC", "SCADA", "DCS", "MES", "SAP", "Salesforce Consulting", "Salesforce Implementation", "Salesforce Integration", "CRM Solutions"],
  },
  {
    name: "Global Talent Solutions",
    items: ["HR Recruitment", "Permanent Hiring", "Contract Staffing", "Global Talent Solutions"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title={<>One partner for the <span className="text-gradient-brand bg-clip-text">entire enterprise technology lifecycle.</span></>}
        subtitle="From boardroom strategy to shop-floor automation — engineered by global teams, delivered with rigor."
      />
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.name}>
              <div className="flex items-end justify-between gap-6 mb-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Category 0{ci + 1}</p>
                  <h2 className="mt-2 text-3xl md:text-4xl font-bold">{cat.name}</h2>
                </div>
                <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-border to-transparent ml-6" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.items.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-6 hover:shadow-elegant hover:-translate-y-1 transition-all"
                  >
                    <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                    <p className="relative font-semibold">{s}</p>
                    <p className="relative mt-1 text-xs text-muted-foreground">Enterprise-grade delivery, global scale.</p>
                    <Link to="/contact" className="relative mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Discuss <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
