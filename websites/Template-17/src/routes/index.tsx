import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Calculator,
  FileText,
  Briefcase,
  TrendingUp,
  BookOpen,
  Check,
  Star,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Counter } from "@/components/site/Counter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Chartered Accountants in India" },
      {
        name: "description",
        content:
          "ABC & Associates is a trusted Chartered Accountant firm offering audit, taxation, GST, compliance and advisory services for businesses and individuals.",
      },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      {
        property: "og:description",
        content:
          "Audit, tax, GST and advisory services delivered with precision, compliance and care.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal and management audits with deep industry insight." },
  { icon: Calculator, title: "Direct & Indirect Tax", desc: "End-to-end tax planning, filing and representation services." },
  { icon: FileText, title: "GST Advisory", desc: "GST registration, returns, audits and litigation support." },
  { icon: Briefcase, title: "Company Compliance", desc: "ROC filings, secretarial services and regulatory compliance." },
  { icon: TrendingUp, title: "Business Advisory", desc: "Strategy, valuation and growth advisory for SMEs and startups." },
  { icon: BookOpen, title: "Bookkeeping", desc: "Accurate accounting and management reporting on the cloud." },
];

const reasons = [
  "20+ years of trusted financial expertise",
  "Qualified Chartered Accountants & domain specialists",
  "Transparent pricing with no hidden fees",
  "Timely delivery with strict confidentiality",
  "Industry-specific solutions for your business",
  "Personal attention from senior partners",
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Chartered Accountants · Est. 2005
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
                Professional Chartered <span className="text-primary">Accountant</span> Services
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-subtle md:text-lg">
                ABC & Associates partners with businesses and individuals to deliver clear,
                compliant and growth-focused financial services — from audit and taxation to
                advisory and business compliance.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary">
                    Get Consultation <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-border">
                    View Services
                  </Button>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-6 text-sm text-subtle">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="h-9 w-9 rounded-full border-2 border-surface bg-gradient-to-br from-primary to-secondary" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-1">Trusted by <span className="font-semibold text-foreground">500+</span> businesses</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={24}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Chartered Accountants meeting with clients"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl ring-1 ring-border"
                loading="eager"
              />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 hidden w-64 rounded-xl border border-border bg-surface p-4 shadow-lg sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary"><ShieldCheck className="h-5 w-5" /></div>
                  <div>
                    <p className="text-xs text-subtle">ICAI Registered</p>
                    <p className="text-sm font-semibold text-foreground">100% Compliant Firm</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="absolute -top-6 -right-6 hidden w-56 rounded-xl border border-border bg-surface p-4 shadow-lg sm:block"
              >
                <p className="text-xs text-subtle">Filings completed</p>
                <p className="mt-1 font-display text-2xl font-semibold text-foreground">
                  <Counter to={12000} />
                </p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-4/5 rounded-full bg-secondary" />
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-border bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=80"
              alt="Financial advisory"
              className="aspect-[5/4] w-full rounded-2xl object-cover ring-1 ring-border"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About the firm"
              title="Two decades of trusted financial expertise"
              description="ABC & Associates is a full-service Chartered Accountancy firm based in India, serving private companies, startups, public enterprises and individuals. Our partners bring deep technical expertise across audit, tax and advisory — combined with a personal commitment to every client we serve."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
                <div>
                  <p className="font-display text-3xl font-semibold text-primary"><Counter to={20} /></p>
                  <p className="mt-1 text-sm text-subtle">Years experience</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-primary"><Counter to={500} /></p>
                  <p className="mt-1 text-sm text-subtle">Happy clients</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-primary"><Counter to={1200} /></p>
                  <p className="mt-1 text-sm text-subtle">Projects completed</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/about" className="mt-8 inline-flex">
                <Button variant="outline" className="border-border">
                  Learn more about us <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What we do"
            title="Services built around your business"
            description="From compliance to strategic advisory, we deliver an end-to-end suite of services tailored to your industry and stage of growth."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-md">
                  <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtle">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b border-border bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why choose us"
              title="A partner you can rely on"
              description="We combine technical depth with a clear, communicative approach — so you always know where your finances stand and what to do next."
            />
            <Reveal delay={0.1}>
              <Link to="/contact" className="mt-8 inline-flex">
                <Button className="bg-primary text-primary-foreground hover:bg-secondary">
                  Schedule a Consultation <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.05}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center md:flex-row md:text-left">
          <div className="text-primary-foreground">
            <h3 className="font-display text-2xl font-semibold md:text-3xl">Ready to simplify your finances?</h3>
            <p className="mt-2 text-primary-foreground/80">Talk to a partner today — no obligation, just clear advice.</p>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
