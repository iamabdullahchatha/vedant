import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/home-sections";
import { getServiceBySlug, getCategory, getServicesByCategory } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetailPage,
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    const title = service ? `${service.name} — Vedant Holdings` : "Service — Vedant Holdings";
    const description = service?.description ?? "Enterprise services from Vedant Holdings.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <SiteLayout>
        <PageHero
          eyebrow="Services"
          title="Service not found"
          subtitle="The service you're looking for doesn't exist or has moved."
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all services
          </Link>
        </PageHero>
      </SiteLayout>
    );
  }

  const category = getCategory(service.categorySlug);
  const related = getServicesByCategory(service.categorySlug)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);
  const Icon = category.icon;

  return (
    <SiteLayout>
      <PageHero
        eyebrow={category.name}
        title={
          <>
            {service.name} —{" "}
            <span className="text-gradient-brand bg-clip-text">{service.tagline}</span>
          </>
        }
        subtitle={service.description}
      >
        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant hover:scale-[1.03] transition-transform"
          >
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
        </div>
      </PageHero>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-card-soft">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight">What's included</h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((c) => (
                  <div
                    key={c}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-white p-4 shadow-card-soft"
                  >
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                    <p className="text-sm font-medium leading-snug">{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Business impact</h2>
              <div className="mt-8 space-y-4">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-gradient-brand shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-gradient-soft p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Category
              </p>
              <p className="mt-2 font-semibold">{category.name}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Part of our {category.name.toLowerCase()} practice — engineered by global delivery
                teams operating across 25+ countries.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Get a tailored proposal <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-card-soft">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Related services
                </p>
                <ul className="mt-4 space-y-1">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: r.slug }}
                        className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
                      >
                        {r.name}
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
