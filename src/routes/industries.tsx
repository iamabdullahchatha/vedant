import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Industries, CTA } from "@/components/site/home-sections";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — Vedant Holdings" },
      { name: "description", content: "Deep industry expertise across manufacturing, BFSI, healthcare, energy, telecom, government, logistics and more." },
      { property: "og:title", content: "Industries — Vedant Holdings" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries"
        title={<>Domain-deep teams for <span className="text-gradient-brand bg-clip-text">every enterprise industry.</span></>}
        subtitle="Regulated, mission-critical or consumer-facing — we bring the right specialists, playbooks and technology stack."
      />
      <Industries />
      <CTA />
    </SiteLayout>
  );
}
