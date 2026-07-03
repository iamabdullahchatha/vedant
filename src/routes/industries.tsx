import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Stats, CTA } from "@/components/site/home-sections";
import { INDUSTRIES } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";
import industriesHero from "@/assets/pic-industrial-plant.jpg";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — Vedant Group" },
      {
        name: "description",
        content:
          "Deep industry expertise across manufacturing, BFSI, healthcare, energy, telecom, government, logistics and more.",
      },
      { property: "og:title", content: "Industries — Vedant Group" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Regulatory fluency",
    description:
      "From HIPAA to GDPR, PCI-DSS to GxP — our teams design for the compliance regime your industry actually operates under.",
  },
  {
    icon: Sparkles,
    title: "Vertical playbooks",
    description:
      "Reusable reference architectures and delivery accelerators built from real programs in your sector, not generic templates.",
  },
  {
    icon: Users,
    title: "Embedded specialists",
    description:
      "Engineers and consultants who speak the domain language — plant operations, underwriting, clinical workflows — from day one.",
  },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Domain-deep teams for{" "}
            <span className="text-gradient-brand bg-clip-text">every enterprise industry.</span>
          </>
        }
        subtitle="Regulated, mission-critical or consumer-facing — we bring the right specialists, playbooks and technology stack."
        image={industriesHero}
      />

      <Stats />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center rounded-full bg-brand-ice px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-royal">
              Sector expertise
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-brand-navy">
              Ten industries. One bar for excellence.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every industry below links to the specific challenges we solve, how we solve them, and
              the services we deploy to get there.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {INDUSTRIES.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white p-8 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-soft opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-navy">
                        {industry.stat.value}
                      </div>
                      <div className="max-w-35 text-xs text-muted-foreground leading-snug">
                        {industry.stat.label}
                      </div>
                    </div>
                  </div>

                  <h3 className="relative mt-6 text-xl font-bold text-brand-navy">
                    {industry.name}
                  </h3>
                  <p className="relative mt-2 text-sm font-medium text-brand-royal">
                    {industry.tagline}
                  </p>
                  <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed">
                    {industry.challenge}
                  </p>

                  <ul className="relative mt-6 space-y-2.5">
                    {industry.solutions.map((solution) => (
                      <li
                        key={solution}
                        className="flex items-start gap-2.5 text-sm text-foreground/85"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                    {industry.relatedServiceSlugs.map((slug) => {
                      const service = getServiceBySlug(slug);
                      if (!service) return null;
                      return (
                        <Link
                          key={slug}
                          to="/services/$slug"
                          params={{ slug }}
                          className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-brand-navy transition-colors hover:bg-brand-ice hover:text-brand-royal"
                        >
                          {service.name}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-24 px-4 sm:px-6 lg:px-8 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Why industry expertise matters</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Generic delivery teams solve generic problems. We build for the constraints your
              industry actually has.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {DIFFERENTIATORS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-dark rounded-3xl p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-cyan">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-navy shadow-elegant transition-transform hover:scale-105"
            >
              Explore all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
