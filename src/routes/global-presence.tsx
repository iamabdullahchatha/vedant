import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { GlobalPresenceMap, CTA } from "@/components/site/home-sections";

export const Route = createFileRoute("/global-presence")({
  component: GlobalPresence,
  head: () => ({
    meta: [
      { title: "Global Presence — Vedant Holdings" },
      { name: "description", content: "Vedant Holdings delivers across 25+ countries with follow-the-sun engineering and consulting teams." },
      { property: "og:title", content: "Global Presence — Vedant Holdings" },
      { property: "og:url", content: "/global-presence" },
    ],
    links: [{ rel: "canonical", href: "/global-presence" }],
  }),
});

const REGIONS = [
  { region: "North America", countries: ["USA", "Canada"] },
  { region: "Europe", countries: ["United Kingdom", "Ireland", "Germany", "France", "Switzerland", "Poland", "Sweden"] },
  { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait"] },
  { region: "Asia Pacific", countries: ["India", "Singapore", "Malaysia", "Japan", "Australia", "China", "South Korea"] },
];

function GlobalPresence() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Global Presence"
        title={<>Follow the sun. <span className="text-gradient-brand bg-clip-text">Deliver anywhere.</span></>}
        subtitle="An always-on global delivery network across four continents, engineered for speed and continuity."
      />
      <GlobalPresenceMap />
      <section className="pb-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONS.map((r) => (
            <div key={r.region} className="rounded-2xl border border-border/60 bg-white p-6 shadow-card-soft">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{r.region}</p>
              <ul className="mt-4 space-y-2">
                {r.countries.map((c) => (
                  <li key={c} className="text-sm text-foreground/80 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-sky" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
