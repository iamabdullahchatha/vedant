import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight, Cloud, Shield, Cpu, Database, Cog, Users, Globe2, Sparkles,
  Zap, LineChart, Bot, Factory, HeartPulse, Landmark, ShoppingBag, Fuel,
  Radio, Building2, Truck, Car, CheckCircle2, Compass, ClipboardList,
  PenTool, Code2, Rocket, LifeBuoy, Star, Quote,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import aboutImg from "@/assets/about-office.jpg";

/* ------------------------------- HERO SLIDER ------------------------------ */

const SLIDES = [
  {
    img: hero1,
    eyebrow: "Global Digital Transformation",
    title: "Engineering Global\nDigital Excellence",
    sub: "Helping enterprises transform through technology, automation, cloud solutions and world-class consulting.",
    tags: ["Cloud", "Consulting", "Transformation"],
  },
  {
    img: hero2,
    eyebrow: "Artificial Intelligence · Automation",
    title: "Intelligent Automation\nfor the Future",
    sub: "AI, Machine Learning, RPA, Industry 4.0, Cloud and IoT — engineered for the world's most ambitious operations.",
    tags: ["AI", "Machine Learning", "RPA", "IoT"],
  },
  {
    img: hero3,
    eyebrow: "Enterprise IT Consulting",
    title: "Transforming Businesses\nThrough Technology",
    sub: "Cloud, Cyber Security, Salesforce, ERP, Data and end-to-end digital transformation for the enterprise.",
    tags: ["Cloud", "Cyber Security", "Salesforce", "ERP"],
  },
  {
    img: hero4,
    eyebrow: "Manufacturing · Process Automation",
    title: "Powering Modern\nManufacturing",
    sub: "Smart factories, PLC, SCADA, MES and industrial robotics engineered for measurable production gains.",
    tags: ["PLC", "SCADA", "MES", "Industry 4.0"],
  },
  {
    img: hero5,
    eyebrow: "Global Workforce · Talent Solutions",
    title: "Connecting Global Talent\nwith Global Businesses",
    sub: "Permanent, contract and managed talent for enterprises operating across 25+ countries.",
    tags: ["Talent", "Hiring", "Global"],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);
  const slide = SLIDES[index];

  return (
    <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-brand-navy">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={slide.img} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* floating orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-brand-sky/30 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end pb-24 pt-32 px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium uppercase tracking-widest text-brand-cyan">
              <Sparkles className="h-3.5 w-3.5" /> {slide.eyebrow}
            </div>
            <h1 className="mt-6 whitespace-pre-line text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-white">
              {slide.title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-gradient-brand bg-clip-text">{line}</span> : line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">{slide.sub}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {slide.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand animate-gradient px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Explore Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Contact Experts
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* dots */}
        <div className="mt-12 flex items-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-12 bg-brand-cyan" : "w-6 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
          <span className="ml-4 text-xs text-white/60 tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- COUNTER -------------------------------- */

function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString()}{suffix}
    </span>
  );
}

export function Stats() {
  const items = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 1700, suffix: "+", label: "Salesforce Certifications" },
    { value: 3000, suffix: "+", label: "Projects Delivered" },
    { value: 25, suffix: "+", label: "Countries · Global Presence" },
  ];
  return (
    <section className="relative -mt-24 z-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl glass-card p-8 md:p-12 shadow-elegant">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold text-gradient-brand font-[var(--font-display)]">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- TRUSTED BY ------------------------------- */

const PARTNERS = [
  "AWS", "Microsoft Azure", "Google Cloud", "Salesforce", "SAP", "Oracle",
  "ServiceNow", "Snowflake", "Databricks", "Siemens", "Rockwell", "NVIDIA",
];

export function TrustedBy() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted across the world's leading enterprise platforms
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-4">
            {row.map((p, i) => (
              <span
                key={p + i}
                className="whitespace-nowrap rounded-full border border-border/60 bg-white px-6 py-3 text-sm font-semibold text-foreground/70 shadow-card-soft"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- ABOUT --------------------------------- */

export function About() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img src={aboutImg} alt="Vedant Holdings office" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden md:block glass-card rounded-2xl px-6 py-5 shadow-elegant">
            <div className="text-3xl font-bold text-gradient-brand">15+</div>
            <p className="text-xs text-muted-foreground mt-1">Years engineering<br />global outcomes</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-sky" /> About Vedant Holdings
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            A global partner for the <span className="text-gradient-brand">enterprise digital era.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Vedant Holdings is a global consulting and technology group serving Fortune-scale
            enterprises across 25+ countries. We combine deep engineering, industry expertise,
            and world-class talent to help clients transform faster, operate smarter, and lead
            their markets.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Our Mission", body: "Engineer measurable outcomes for enterprises through technology, talent and trust." },
              { title: "Our Vision", body: "Become the most reliable digital transformation partner for global businesses." },
              { title: "Innovation", body: "AI-first, automation-driven and cloud-native by design." },
              { title: "Integrity", body: "Long-term partnerships built on transparency and rigor." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border/70 bg-gradient-soft p-5">
                <p className="font-semibold">{v.title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------- SERVICES -------------------------------- */

const SERVICES = [
  { icon: Compass, title: "Digital Transformation", desc: "End-to-end programs that modernize operations, systems and experiences." },
  { icon: Cloud, title: "Cloud Services", desc: "Migration, DevOps and cloud-native engineering on AWS, Azure and GCP." },
  { icon: Bot, title: "AI & Machine Learning", desc: "Production-grade AI, ML models and generative AI at enterprise scale." },
  { icon: Cog, title: "Industrial Automation", desc: "PLC, SCADA, DCS, MES for smart factories and Industry 4.0." },
  { icon: Shield, title: "Cyber Security", desc: "Zero-trust architectures, SOC operations and enterprise resilience." },
  { icon: Database, title: "Data, BI & Analytics", desc: "Modern data platforms, dashboards and actionable business intelligence." },
  { icon: Cpu, title: "Salesforce & SAP", desc: "Consulting, implementation and integration for CRM and ERP." },
  { icon: Users, title: "Global Talent Solutions", desc: "Permanent, contract and managed workforce across 25+ countries." },
];

export function Services() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card-soft">
            What we do
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Enterprise services engineered for <span className="text-gradient-brand">scale, security and speed.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From boardroom strategy to shop-floor automation — a single global partner for the
            entire enterprise technology lifecycle.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-6 shadow-card-soft hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-card-soft">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- WHY CHOOSE ------------------------------- */

const WHY = [
  { icon: Globe2, title: "Global Delivery" },
  { icon: Landmark, title: "Enterprise Experience" },
  { icon: Star, title: "Industry Experts" },
  { icon: CheckCircle2, title: "Certified Professionals" },
  { icon: Bot, title: "AI-Driven Solutions" },
  { icon: Cloud, title: "Cloud Expertise" },
  { icon: Zap, title: "Automation Experts" },
  { icon: Users, title: "Recruitment Specialists" },
  { icon: Compass, title: "Worldwide Presence" },
  { icon: LifeBuoy, title: "24/7 Support" },
  { icon: LineChart, title: "Flexible Engagement" },
  { icon: Shield, title: "Security-First" },
];

export function WhyChoose() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Why Vedant</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              The advantages of working with <span className="text-gradient-brand">a truly global partner.</span>
            </h2>
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Read the full story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group rounded-2xl border border-border/60 bg-white p-5 hover:border-primary/40 hover:shadow-card-soft transition-all"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-ice text-primary group-hover:bg-gradient-brand group-hover:text-white transition-all">
                <w.icon className="h-4.5 w-4.5" />
              </div>
              <p className="mt-4 text-sm font-semibold">{w.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- INDUSTRIES ------------------------------- */

const INDUSTRIES = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Fuel, name: "Oil & Gas" },
  { icon: HeartPulse, name: "Life Sciences" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Landmark, name: "BFSI" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Zap, name: "Energy" },
  { icon: Zap, name: "Utilities" },
  { icon: Radio, name: "Telecommunications" },
  { icon: Building2, name: "Government" },
  { icon: Truck, name: "Logistics" },
  { icon: Car, name: "Automotive" },
];

export function Industries() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-brand-navy text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-brand-sky/50 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-brand-cyan/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-cyan">Industries</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Industry expertise where it <span className="text-gradient-brand bg-clip-text">matters most.</span>
          </h2>
          <p className="mt-4 text-white/70">
            Deep domain teams delivering measurable outcomes across regulated, mission-critical
            and consumer-facing industries.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((it, i) => (
            <motion.div
              key={it.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group rounded-2xl glass-dark p-6 hover:border-brand-cyan/50 transition-all"
            >
              <it.icon className="h-6 w-6 text-brand-cyan group-hover:scale-110 transition-transform" />
              <p className="mt-5 font-semibold">{it.name}</p>
              <p className="mt-1 text-xs text-white/60">Enterprise solutions & transformation.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- GLOBAL PRESENCE ----------------------------- */

const REGIONS = [
  { code: "USA", pos: [22, 42] }, { code: "CAN", pos: [24, 32] },
  { code: "UK", pos: [46, 34] }, { code: "IRL", pos: [44, 34] },
  { code: "DEU", pos: [50, 36] }, { code: "FRA", pos: [48, 38] },
  { code: "CHE", pos: [50, 40] }, { code: "POL", pos: [53, 36] },
  { code: "SWE", pos: [51, 28] }, { code: "UAE", pos: [60, 50] },
  { code: "KSA", pos: [58, 52] }, { code: "OMN", pos: [62, 52] },
  { code: "QAT", pos: [60, 50] }, { code: "KWT", pos: [58, 48] },
  { code: "IND", pos: [68, 52] }, { code: "SGP", pos: [76, 62] },
  { code: "MYS", pos: [76, 60] }, { code: "JPN", pos: [85, 44] },
  { code: "AUS", pos: [82, 74] }, { code: "CHN", pos: [80, 46] },
  { code: "KOR", pos: [83, 44] },
];

export function GlobalPresenceMap() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Global Presence</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Delivering across <span className="text-gradient-brand">25+ countries.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A follow-the-sun delivery model spanning North America, Europe, the Middle East,
              India, APAC and beyond — one global standard of engineering excellence.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2 max-w-md">
              {["USA", "Canada", "UK", "Germany", "France", "Ireland", "UAE", "KSA", "Qatar", "India", "Singapore", "Japan", "Australia", "China", "S. Korea"].map((c) => (
                <span key={c} className="rounded-lg border border-border/70 bg-white px-2.5 py-1.5 text-xs text-center font-medium text-foreground/80">{c}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-brand-navy shadow-elegant">
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
                backgroundSize: "18px 18px",
              }} />
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="pulse" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#67e8f9" stopOpacity="1" />
                    <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {REGIONS.map((r, i) => (
                  <g key={r.code + i}>
                    <circle cx={r.pos[0]} cy={r.pos[1]} r="2.5" fill="url(#pulse)">
                      <animate attributeName="r" values="2;5;2" dur="2.6s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0.2;1" dur="2.6s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx={r.pos[0]} cy={r.pos[1]} r="0.9" fill="#67e8f9" />
                  </g>
                ))}
                {/* connecting arcs */}
                {[
                  ["22,42", "46,34"], ["46,34", "68,52"], ["68,52", "76,62"], ["76,62", "82,74"],
                  ["68,52", "60,50"], ["46,34", "50,36"], ["68,52", "85,44"],
                ].map(([a, b], i) => {
                  const [ax, ay] = a.split(",").map(Number);
                  const [bx, by] = b.split(",").map(Number);
                  const mx = (ax + bx) / 2;
                  const my = Math.min(ay, by) - 8;
                  return (
                    <path
                      key={i}
                      d={`M ${ax} ${ay} Q ${mx} ${my} ${bx} ${by}`}
                      fill="none"
                      stroke="#67e8f9"
                      strokeWidth="0.25"
                      strokeDasharray="1 1.2"
                      opacity="0.7"
                    />
                  );
                })}
              </svg>
              <div className="absolute bottom-4 right-4 rounded-full glass-dark px-3 py-1.5 text-xs text-white/80">Live delivery centers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- PROCESS ------------------------------- */

const STEPS = [
  { icon: Compass, title: "Discover", desc: "Deep-dive into your business, technology and goals." },
  { icon: Users, title: "Consult", desc: "Strategic advisory from senior industry experts." },
  { icon: ClipboardList, title: "Plan", desc: "Roadmap with measurable milestones and KPIs." },
  { icon: PenTool, title: "Design", desc: "Human-centered architecture and experience design." },
  { icon: Code2, title: "Develop", desc: "Engineering with global standards and quality." },
  { icon: Rocket, title: "Deploy", desc: "Zero-downtime rollouts and change management." },
  { icon: LifeBuoy, title: "Support", desc: "24/7 managed services and continuous optimization." },
];

export function Process() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card-soft">Our Process</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            A proven path from ambition to <span className="text-gradient-brand">outcome.</span>
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="absolute top-6 left-0 right-0 hidden lg:block h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-white shadow-elegant mx-auto lg:mx-0 ring-4 ring-background">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary text-center lg:text-left">Step {i + 1}</p>
                <p className="mt-1 font-semibold text-center lg:text-left">{s.title}</p>
                <p className="mt-1 text-xs text-muted-foreground text-center lg:text-left">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TESTIMONIALS ------------------------------ */

const TESTIMONIALS = [
  {
    quote: "Vedant re-engineered our cloud estate across three continents without a single hour of downtime. Their delivery discipline is genuinely world-class.",
    name: "Group CTO",
    role: "Global Manufacturing · Fortune 500",
  },
  {
    quote: "The Salesforce and data programs paid for themselves within two quarters. A partner that speaks both the boardroom and the shop floor.",
    name: "VP, Digital",
    role: "Energy & Utilities · Europe",
  },
  {
    quote: "From AI proof-of-concept to production in weeks, with governance we could actually stand behind. Exactly the pace our market demanded.",
    name: "Chief Data Officer",
    role: "BFSI · Middle East",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card-soft">
            Client Voices
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Outcomes that leaders <span className="text-gradient-brand">talk about.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-3xl border border-border/60 bg-white p-8 shadow-card-soft hover:shadow-elegant transition-all"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-card-soft">
                <Quote className="h-5 w-5" />
              </div>
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground/85">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-1 text-brand-cyan">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-border/60 pt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FINAL CTA -------------------------------- */

export function CTA() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand animate-gradient p-10 md:p-16 shadow-elegant">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand-cyan/30 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to engineer your next chapter of growth?
              </h2>
              <p className="mt-4 text-white/85 max-w-xl">
                Talk to a Vedant expert. Get a tailored roadmap for transformation, automation
                or global talent — in a single working session.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary hover:bg-white/90 transition shadow-elegant">
                Get Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white hover:bg-white/20 transition">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
