import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { About as AboutSection, WhyChoose, Process, CTA } from "@/components/site/home-sections";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Vedant Holdings" },
      { name: "description", content: "Vedant Holdings is a global enterprise consulting group with 15+ years of experience across 25+ countries." },
      { property: "og:title", content: "About — Vedant Holdings" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Vedant Holdings"
        title={<>Engineering trust for the <span className="text-gradient-brand bg-clip-text">world's most ambitious enterprises.</span></>}
        subtitle="A global consulting and technology group serving Fortune-scale clients across 25+ countries with 15+ years of proven delivery."
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant">Talk to us</Link>
      </PageHero>
      <AboutSection />
      <WhyChoose />
      <Process />
      <CTA />
    </SiteLayout>
  );
}
