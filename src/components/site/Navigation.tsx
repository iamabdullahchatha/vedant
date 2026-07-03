import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { CATEGORIES, getServicesByCategory } from "@/data/services";

type NavItem = { label: string; to: string; mega?: boolean };
const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", mega: true },
  { label: "Industries", to: "/industries" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

const SERVICE_GROUPS = CATEGORIES.map((cat) => ({
  title: cat.name,
  items: getServicesByCategory(cat.slug),
}));

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

  // Header sits over a dark hero at the top of every page, and over a light
  // surface once scrolled â€” so link colors flip to stay readable in both states.
  const linkBase = scrolled
    ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
    : "text-white/85 hover:text-white hover:bg-white/10";
  const activeCls = scrolled ? "text-primary bg-primary/5" : "text-white bg-white/10";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-card-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Vedant Group â€” home"
        >
          <img src={logo} alt="Vedant Group" className="h-10 w-auto" />
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
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkBase}`}
                  activeProps={{ className: activeCls }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {megaOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                    <div className="w-240 max-w-[92vw] rounded-3xl glass-card p-8 shadow-elegant animate-fade-up">
                      <div className="grid grid-cols-5 gap-6">
                        {SERVICE_GROUPS.map((g) => (
                          <div key={g.title}>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                              {g.title}
                            </p>
                            <ul className="space-y-2">
                              {g.items.map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    to="/services/$slug"
                                    params={{ slug: s.slug }}
                                    onClick={() => setMegaOpen(false)}
                                    className="text-sm text-foreground/75 hover:text-primary transition-colors"
                                  >
                                    {s.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 border-t border-border/60 pt-5">
                        <Link
                          to="/services"
                          onClick={() => setMegaOpen(false)}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                        >
                          View all services â†’
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkBase}`}
                activeProps={{ className: activeCls }}
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
            <span className="transition-transform group-hover:translate-x-0.5">â†’</span>
          </Link>
        </div>

        <button
          className={`lg:hidden rounded-full p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
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
