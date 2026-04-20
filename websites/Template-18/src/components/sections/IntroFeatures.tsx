import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, FileCheck2, Clock3, Users2 } from "lucide-react";

export function IntroBlock() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* subtle corner shapes */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--color-accent)]/5 blur-2xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[var(--color-navy)]/5 blur-2xl" />

      <div className="container-tight relative pt-24 pb-28 lg:pt-32 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-[var(--color-navy-2)] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Chartered Accountants · Est. 2004
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.05] tracking-tight">
            Clarity in numbers.<br />
            <span className="text-[var(--color-accent)]">Confidence in decisions.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            ABC &amp; Associates is a full-service chartered accountancy firm partnering with founders,
            family businesses, and enterprises on audit, taxation, compliance, and advisory.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-navy)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-navy-2)] transition-colors"
            >
              Schedule a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              Explore services
            </Link>
          </div>
        </motion.div>

        {/* meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-xl border border-border bg-border"
        >
          {[
            { k: "ICAI", v: "Member Firm" },
            { k: "20+ yrs", v: "Practice" },
            { k: "600+", v: "Clients served" },
            { k: "5 cities", v: "India presence" },
          ].map((m) => (
            <div key={m.k} className="bg-white px-5 py-5 text-center">
              <div className="text-sm font-semibold text-[var(--color-primary)]">{m.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function FeatureStrip() {
  const items = [
    { icon: ShieldCheck, title: "Trusted Advisors", desc: "Senior partners on every engagement, not just at the close." },
    { icon: FileCheck2, title: "Accurate Compliance", desc: "Filings reviewed twice. Deadlines tracked. Zero surprises." },
    { icon: Clock3, title: "Fast Service", desc: "24-hour first response and clear delivery timelines." },
    { icon: Users2, title: "Sector Depth", desc: "Manufacturing, SaaS, retail, and professional services." },
  ];
  return (
    <section className="bg-white border-y border-border">
      <div className="container-tight py-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-border">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="bg-white p-7 group hover:bg-[var(--color-background)] transition-colors"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-navy)]/5 text-[var(--color-navy-2)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-[var(--color-primary)]">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
