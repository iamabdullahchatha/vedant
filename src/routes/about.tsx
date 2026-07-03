import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { About as AboutSection, Stats, WhyChoose, Process, Testimonials, CTA } from "@/components/site/home-sections";
import aboutHero from "@/assets/pic-office.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About â€” Vedant Group" },
      { name: "description", content: "Vedant Group is a global enterprise consulting group with 15+ years of experience across 25+ countries." },
      { property: "og:title", content: "About â€” Vedant Group" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        image={aboutHero}
        eyebrow="About Vedant Group"
        title={<>Engineering trust for the <span className="text-gradient-brand bg-clip-text">world's most ambitious enterprises.</span></>}
        subtitle="A global consulting and technology group serving Fortune-scale clients across 25+ countries with 15+ years of proven delivery."
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant">Talk to us</Link>
      </PageHero>
      <div className="mt-8"><Stats /></div>
      <AboutSection />
      <WhyChoose />
      <Process />
      <Testimonials />
      <CTA />
    </SiteLayout>
  );
}
