import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Instagram, Youtube, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { Tilt3D } from "./Tilt3D";

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
      {
        label: "Digital Transformation",
        to: "/services/$slug",
        params: { slug: "digital-transformation" },
      },
      { label: "Cloud Services", to: "/services/$slug", params: { slug: "cloud-services" } },
      {
        label: "Artificial Intelligence",
        to: "/services/$slug",
        params: { slug: "artificial-intelligence" },
      },
      { label: "SAP", to: "/services/$slug", params: { slug: "sap" } },
      {
        label: "Global Talent Solutions",
        to: "/services/$slug",
        params: { slug: "global-talent-solutions" },
      },
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
      {/* 3D depth backdrop: perspective floor grid + orbiting rings + glow orbs */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-sky/40 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-cyan/30 blur-3xl animate-float" style={{ animationDelay: "2.5s" }} />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-25 [mask-image:linear-gradient(to_top,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(103,232,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />
      <div className="pointer-events-none absolute right-[8%] top-10 hidden md:block perspective-1000 opacity-70">
        <div className="preserve-3d relative h-40 w-40">
          <div className="absolute inset-0 rounded-full border border-brand-cyan/40 animate-spin-slow" style={{ transform: "rotateX(70deg)" }} />
          <div className="absolute inset-4 rounded-full border border-brand-sky/30 animate-spin-slow-reverse" style={{ transform: "rotateX(70deg) rotateZ(30deg)" }} />
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-brand-cyan shadow-glow animate-orbit-bob" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <Tilt3D max={8} scale={1.03} className="w-fit rounded-2xl">
              <div className="w-fit rounded-2xl bg-white px-4 py-3 shadow-elegant">
                <img src={logo} alt="Vedant Group" className="h-10 w-auto" />
              </div>
            </Tilt3D>
            <p className="mt-6 text-sm leading-relaxed text-white/70 max-w-sm">
              Vedant Group is a global enterprise consulting group engineering digital excellence
              across cloud, AI, automation and world-class talent — trusted by leaders in 25+
              countries.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-cyan" /> RAK Economic Free Zone, Ras Al
                Khaimah, UAE
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-cyan" /> Info@vedantsgroups.com
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 perspective-1000">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:border-brand-cyan hover:text-white hover:bg-white/5 hover:-translate-y-1 hover:shadow-glow hover:rotate-[8deg]"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {COLS.map((col, ci) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 800 }}
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        params={"params" in link ? link.params : undefined}
                        className="group inline-flex items-center text-sm text-white/70 hover:text-white transition-colors"
                      >
                        <span className="mr-0 h-px w-0 bg-brand-cyan transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <Tilt3D max={3} glare={false} className="mt-16 rounded-3xl">
          <div className="rounded-3xl glass-dark p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-elegant">
          <div>
            <h3 className="text-xl font-semibold">Get enterprise insights, monthly.</h3>
            <p className="mt-1 text-sm text-white/70">
              Signals on cloud, AI, automation and industry transformation.
            </p>
          </div>
          <form
            className="flex w-full max-w-md flex-col sm:flex-row items-stretch sm:items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full min-w-0 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-sky"
            />
            <button className="shrink-0 rounded-full bg-gradient-brand animate-gradient px-5 py-3 text-sm font-semibold shadow-elegant transition-transform hover:scale-105">
              Subscribe
            </button>
          </form>
          </div>
        </Tilt3D>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Vedant Group. All rights reserved.</p>
          <p>Engineered with precision across 25+ countries.</p>
        </div>
      </div>
    </footer>
  );
}
