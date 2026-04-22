import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    n: "A",
    title: "Audit & Assurance",
    short: "Statutory, internal & forensic",
    desc: "Risk-based audits across listed entities, private companies and not-for-profits. Our methodology emphasises substance, judgement and clarity in reporting.",
    items: ["Statutory Audit", "Internal Audit", "Forensic Review", "IFRS / Ind-AS Reporting"],
  },
  {
    n: "B",
    title: "Direct & Indirect Tax",
    short: "Advisory · Compliance · Litigation",
    desc: "End-to-end tax counsel covering domestic and cross-border matters — from quarterly compliance to representation before appellate authorities.",
    items: ["Corporate Tax", "GST Advisory", "Transfer Pricing", "Tax Litigation"],
  },
  {
    n: "C",
    title: "Strategic Advisory",
    short: "M&A · Valuation · Restructuring",
    desc: "Trusted counsel during transactions and inflection points — independent, conflict-free advice grounded in first-principles financial analysis.",
    items: ["Due Diligence", "Business Valuation", "Deal Structuring", "Corporate Restructuring"],
  },
  {
    n: "D",
    title: "Outsourced Finance",
    short: "Virtual CFO & accounting",
    desc: "Embedded finance leadership for growing companies — books, MIS, treasury and board reporting handled with institutional rigour.",
    items: ["Virtual CFO", "Bookkeeping", "Payroll & Compliance", "Investor MIS"],
  },
  {
    n: "E",
    title: "Regulatory & FEMA",
    short: "RBI · SEBI · Companies Act",
    desc: "Specialised advisory on inbound and outbound investment, regulatory filings and corporate secretarial matters under Indian law.",
    items: ["FEMA Advisory", "ROC Compliance", "RBI Approvals", "Listing Compliance"],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="py-28 lg:py-36 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary-soft">02 — Practice</div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-primary-deeper max-w-2xl leading-tight">
              Five disciplines, one cohesive bench of partners.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Hover or tap a discipline to read more. Every mandate is led by a partner with end-to-end accountability.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          <div className="lg:col-span-5 bg-card">
            {services.map((s, i) => (
              <button
                key={s.n}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`w-full text-left p-7 lg:p-8 border-b border-border last:border-b-0 transition-colors group flex items-start gap-6 ${
                  active === i ? "bg-primary-deeper text-white" : "hover:bg-secondary"
                }`}
              >
                <span className={`font-display text-2xl ${active === i ? "text-accent-gold" : "text-primary-soft"}`}>
                  {s.n}.
                </span>
                <div className="flex-1">
                  <div className={`font-display text-xl ${active === i ? "text-white" : "text-primary-deeper"}`}>
                    {s.title}
                  </div>
                  <div className={`text-sm mt-1 ${active === i ? "text-white/60" : "text-muted-foreground"}`}>
                    {s.short}
                  </div>
                </div>
                <span className={`text-lg transition-transform ${active === i ? "translate-x-1 text-accent-gold" : "text-muted-foreground group-hover:translate-x-1"}`}>
                  →
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-primary-deep text-white p-10 lg:p-14 flex flex-col justify-between min-h-[420px] relative overflow-hidden"
          >
            <div className="absolute inset-0 blueprint opacity-30" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-accent-gold">{services[active].short}</div>
              <h3 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">{services[active].title}</h3>
              <p className="mt-6 max-w-lg text-white/70 leading-relaxed text-lg">{services[active].desc}</p>
            </div>
            <div className="relative mt-10 grid grid-cols-2 gap-3">
              {services[active].items.map((it) => (
                <div key={it} className="flex items-center gap-3 border border-white/10 rounded-full px-4 py-2.5 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                  {it}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
