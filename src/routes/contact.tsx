import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Vedant Holdings" },
      { name: "description", content: "Talk to a Vedant Holdings expert. Global offices, business and career inquiries." },
      { property: "og:title", content: "Contact — Vedant Holdings" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const OFFICES = [
  { city: "Mumbai · Global HQ", addr: "One World Center, Lower Parel, Mumbai 400013, India" },
  { city: "New York", addr: "One World Trade Center, New York, NY 10007, USA" },
  { city: "Dubai", addr: "Emirates Towers, Sheikh Zayed Rd, Dubai, UAE" },
  { city: "London", addr: "The Shard, 32 London Bridge St, London SE1 9SG, UK" },
  { city: "Singapore", addr: "Marina Bay Financial Centre, Singapore 018983" },
  { city: "Tokyo", addr: "Roppongi Hills Mori Tower, Minato-ku, Tokyo 106-6108" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Let's engineer <span className="text-gradient-brand bg-clip-text">your next chapter.</span></>}
        subtitle="Reach a senior partner directly. We respond within one business day, anywhere in the world."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-gradient-soft border border-border/60 p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-white"><Mail className="h-4 w-4" /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                  <a href="mailto:hello@vedantholdings.com" className="mt-1 block font-semibold text-primary">hello@vedantholdings.com</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-soft border border-border/60 p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-white"><Phone className="h-4 w-4" /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="mt-1 font-semibold">+91 22 0000 0000</p>
                  <p className="text-sm text-muted-foreground">+1 (212) 000-0000 · +971 4 000 0000</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-soft border border-border/60 p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-white"><Building2 className="h-4 w-4" /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Inquiries</p>
                  <p className="mt-1 text-sm"><span className="font-semibold">Business:</span> business@vedantholdings.com</p>
                  <p className="text-sm"><span className="font-semibold">Careers:</span> careers@vedantholdings.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-border/60 bg-white p-8 md:p-10 shadow-elegant"
            >
              <h2 className="text-2xl font-bold">Start a conversation</h2>
              <p className="mt-1 text-sm text-muted-foreground">Tell us about your goals — a senior partner will respond within 1 business day.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" />
                <Field label="Work email" name="email" type="email" />
                <Field label="Company" name="company" />
                <Field label="Country" name="country" />
              </div>
              <Field label="How can we help?" name="message" textarea />
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand animate-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform">
                {sent ? "Message sent" : "Send message"} <Send className="h-4 w-4" />
              </button>
              {sent && <p className="mt-4 text-sm text-primary">Thanks — we'll be in touch shortly.</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="pb-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold">Global offices</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICES.map((o) => (
              <div key={o.city} className="rounded-2xl border border-border/60 bg-white p-6 hover:shadow-elegant hover:-translate-y-1 transition-all">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="mt-4 font-semibold">{o.city}</p>
                <p className="mt-1 text-sm text-muted-foreground">{o.addr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", textarea = false }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const cls = "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";
  return (
    <label className={textarea ? "block mt-4 sm:col-span-2" : "block"}>
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} className={cls} placeholder="Tell us about your project…" />
      ) : (
        <input name={name} type={type} className={cls} required />
      )}
    </label>
  );
}
