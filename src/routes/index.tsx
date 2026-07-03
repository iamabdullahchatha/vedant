import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  HeroSlider, Stats, About, Services, WhyChoose, Industries,
  GlobalPresenceMap, Process, CTA,
} from "@/components/site/home-sections";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Vedant Holdings — Engineering Global Digital Excellence" },
      { name: "description", content: "Global enterprise consulting, cloud, AI, automation, Salesforce, SAP and talent solutions across 25+ countries." },
      { property: "og:title", content: "Vedant Holdings — Engineering Global Digital Excellence" },
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
      <About />
      <Services />
      <WhyChoose />
      <Industries />
      <GlobalPresenceMap />
      <Process />
      <CTA />
    </SiteLayout>
  );
}
