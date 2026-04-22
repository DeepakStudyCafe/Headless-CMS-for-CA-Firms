import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Calculator, Receipt, Briefcase, TrendingUp, Landmark } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ABC & Associates" },
      { name: "description", content: "Audit, tax, advisory and transactions — partner-led services for serious businesses." },
      { property: "og:title", content: "Services — ABC & Associates" },
      { property: "og:description", content: "Audit · Tax · Advisory · Transactions · Family Office" },
    ],
  }),
  component: Services,
});

const services = [
  { icon: ShieldCheck, n: "01", t: "Audit & Assurance", d: "Statutory, internal, tax, and forensic audits delivered with institutional rigor and partner-level review on every file.", items: ["Statutory Audit", "Internal Audit", "IFC & SOX", "Forensic Reviews"] },
  { icon: Calculator, n: "02", t: "Direct Tax", d: "Strategic planning, return filings, transfer pricing, and representation before tax authorities and tribunals.", items: ["Tax Planning", "Returns & Compliance", "Transfer Pricing", "Litigation Support"] },
  { icon: Receipt, n: "03", t: "GST & Indirect Tax", d: "End-to-end indirect tax — registrations, monthly compliance, refunds and notice handling without escalation.", items: ["GST Compliance", "Refunds", "Audits & Annual", "Advance Rulings"] },
  { icon: Briefcase, n: "04", t: "Corporate Advisory", d: "Outsourced CFO, governance design, MIS, and process advisory — finance functions that scale with the business.", items: ["Virtual CFO", "Governance", "MIS & Reporting", "Internal Controls"] },
  { icon: TrendingUp, n: "05", t: "Transactions", d: "Buy-side and sell-side diligence, valuations, structuring and post-deal integration support.", items: ["Due Diligence", "Valuations", "Deal Structuring", "Integration"] },
  { icon: Landmark, n: "06", t: "Family Office", d: "Discreet wealth structuring, succession planning, and consolidated reporting across generations and entities.", items: ["Succession", "Trust Structuring", "Consolidated MIS", "Compliance"] },
];

function Services() {
  return (
    <div className="relative">
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">/ Practice areas</p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] tracking-tight sm:text-7xl">
              Six practices. <br/><span className="text-muted-foreground">One standard.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
              We don't sell engagements off a menu. Each mandate is shaped to the business, then run by a partner who's on the file from kickoff to close.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface/40 p-7 transition hover:border-brand/60"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/0 blur-2xl transition group-hover:bg-brand/15" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                <s.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <ul className="mt-6 space-y-1.5">
                {s.items.map(it => (
                  <li key={it} className="flex items-center gap-2 text-xs text-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-brand" /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Need something between the lines? <br/>
              <span className="text-muted-foreground">That's usually where we live.</span>
            </h2>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-brand-deep red-glow">
              Speak to a partner <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
