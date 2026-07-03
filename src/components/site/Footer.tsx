import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Instagram, Youtube, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const COLS = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Industries", to: "/industries" },
      { label: "FAQs", to: "/faqs" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Digital Transformation", to: "/services/$slug", params: { slug: "digital-transformation" } },
      { label: "Cloud Services", to: "/services/$slug", params: { slug: "cloud-services" } },
      { label: "Artificial Intelligence", to: "/services/$slug", params: { slug: "artificial-intelligence" } },
      { label: "SAP", to: "/services/$slug", params: { slug: "sap" } },
      { label: "Global Talent Solutions", to: "/services/$slug", params: { slug: "global-talent-solutions" } },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Manufacturing", to: "/industries" },
      { label: "BFSI", to: "/industries" },
      { label: "Healthcare", to: "/industries" },
      { label: "Energy & Utilities", to: "/industries" },
      { label: "Telecommunications", to: "/industries" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", to: "/faqs" },
      { label: "Privacy Policy", to: "/contact" },
      { label: "Terms of Service", to: "/contact" },
      { label: "Careers", to: "/contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-sky/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-cyan/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="w-fit rounded-2xl bg-white px-4 py-3">
              <img src={logo} alt="Vedant Holdings" className="h-10 w-auto" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/70 max-w-sm">
              Vedant Holdings is a global enterprise consulting group engineering digital
              excellence across cloud, AI, automation and world-class talent — trusted by leaders
              in 25+ countries.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand-cyan" /> RAK Economic Free Zone, Ras Al Khaimah, UAE</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-cyan" /> Info@vedantsgroups.com</div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 hover:border-brand-cyan hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        params={"params" in link ? link.params : undefined}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl glass-dark p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Get enterprise insights, monthly.</h3>
            <p className="mt-1 text-sm text-white/70">Signals on cloud, AI, automation and industry transformation.</p>
          </div>
          <form className="flex w-full max-w-md items-center gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-sky"
            />
            <button className="rounded-full bg-gradient-brand animate-gradient px-5 py-3 text-sm font-semibold shadow-elegant">
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Vedant Holdings. All rights reserved.</p>
          <p>Engineered with precision across 25+ countries.</p>
        </div>
      </div>
    </footer>
  );
}
