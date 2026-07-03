import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { WhyChoose, Stats, Process, CTA } from "@/components/site/home-sections";

export const Route = createFileRoute("/why-vedant")({
  component: WhyVedantPage,
  head: () => ({
    meta: [
      { title: "Why Vedant — Vedant Holdings" },
      { name: "description", content: "Enterprise experience, certified teams, AI-driven solutions and 24/7 global delivery — the Vedant advantage." },
      { property: "og:title", content: "Why Vedant — Vedant Holdings" },
      { property: "og:url", content: "/why-vedant" },
    ],
    links: [{ rel: "canonical", href: "/why-vedant" }],
  }),
});

function WhyVedantPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Why Vedant"
        title={<>Built for the <span className="text-gradient-brand bg-clip-text">enterprise. Trusted globally.</span></>}
        subtitle="Certified experts, security-first architecture, AI-driven delivery and flexible engagement models — the reasons global leaders choose Vedant."
      />
      <div className="mt-8"><Stats /></div>
      <WhyChoose />
      <Process />
      <CTA />
    </SiteLayout>
  );
}
