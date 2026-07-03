import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/vedant-logo.asset.json";

type NavItem = { label: string; to: string; mega?: boolean };
const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", mega: true },
  { label: "Industries", to: "/industries" },
  { label: "Global Presence", to: "/global-presence" },
  { label: "Why Vedant", to: "/why-vedant" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

const SERVICE_GROUPS = [
  {
    title: "Consulting & Strategy",
    items: ["IT Consulting", "Digital Transformation", "Managed IT Services", "Quality Assurance"],
  },
  {
    title: "Cloud & Data",
    items: ["Cloud Services", "Cloud Migration", "DevOps", "Data Analytics", "Big Data", "Business Intelligence"],
  },
  {
    title: "AI & Automation",
    items: ["Artificial Intelligence", "Machine Learning", "Robotic Process Automation", "IoT", "Blockchain"],
  },
  {
    title: "Industrial & Enterprise",
    items: ["Industrial Automation", "PLC / SCADA / DCS / MES", "SAP", "Salesforce", "CRM Solutions"],
  },
  {
    title: "Talent Solutions",
    items: ["HR Recruitment", "Permanent Hiring", "Contract Staffing", "Global Talent Solutions"],
  },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-card-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo.url} alt="Vedant Holdings" className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) =>
            item.mega ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  to={item.to}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {megaOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                    <div className="w-[820px] rounded-3xl glass-card p-8 shadow-elegant animate-fade-up">
                      <div className="grid grid-cols-3 gap-6">
                        {SERVICE_GROUPS.map((g) => (
                          <div key={g.title}>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                              {g.title}
                            </p>
                            <ul className="space-y-2">
                              {g.items.map((s) => (
                                <li key={s}>
                                  <Link
                                    to="/services"
                                    className="text-sm text-foreground/75 hover:text-primary transition-colors"
                                  >
                                    {s}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand animate-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
          >
            Get Consultation
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <button
          className="lg:hidden rounded-full p-2 text-foreground"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
