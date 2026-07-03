import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  HeroSlider, Stats, TrustedBy, About, Services, WhyChoose, Industries,
  GlobalPresenceMap, Process, Testimonials, CTA,
} from "@/components/site/home-sections";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Vedant Group — Engineering Global Digital Excellence" },
      { name: "description", content: "Global enterprise consulting, cloud, AI, automation, Salesforce, SAP and talent solutions across 25+ countries." },
      { property: "og:title", content: "Vedant Group — Engineering Global Digital Excellence" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <SiteLayout>
      <HeroSlider />
      <Stats />
      <TrustedBy />
      <About />
      <Services />
      <WhyChoose />
      <Industries />
      <GlobalPresenceMap />
      <Process />
      <Testimonials />
      <CTA />
    </SiteLayout>
  );
}
