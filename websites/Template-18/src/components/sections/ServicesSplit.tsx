import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, BookOpen, Calculator, Receipt, Building2, LineChart, Briefcase } from "lucide-react";

const SERVICES = [
  {
    icon: BookOpen,
    title: "Audit & Assurance",
    summary: "Statutory, internal, tax and concurrent audits with independent partner sign-off.",
    points: ["Statutory & tax audits", "Internal audit programs", "Concurrent & stock audits", "Limited reviews"],
  },
  {
    icon: Calculator,
    title: "Direct Taxation",
    summary: "Income-tax planning, return filing, assessments and representation before authorities.",
    points: ["Corporate & individual returns", "Tax planning advisory", "Assessments & appeals", "TDS compliance"],
  },
  {
    icon: Receipt,
    title: "GST Advisory",
    summary: "End-to-end GST compliance, refunds, reconciliations and litigation support.",
    points: ["Registration & filings", "Annual returns & audit", "Refund claims", "Notices & litigation"],
  },
  {
    icon: Building2,
    title: "Corporate Compliance",
    summary: "ROC filings, secretarial support and advisory under the Companies Act.",
    points: ["Company incorporation", "ROC annual filings", "Board & secretarial support", "FEMA & RBI filings"],
  },
  {
    icon: LineChart,
    title: "Business Advisory",
    summary: "CFO services, financial modelling and transaction advisory for growth-stage firms.",
    points: ["Virtual CFO", "Financial modelling", "Due diligence", "Valuations"],
  },
  {
    icon: Briefcase,
    title: "Outsourced Accounting",
    summary: "Books of accounts, MIS reporting and payroll managed by qualified professionals.",
    points: ["Bookkeeping & MIS", "Payroll processing", "Vendor & receivables", "Cash-flow tracking"],
  },
];

export function ServicesSplit() {
  const [active, setActive] = useState(0);
  const A = SERVICES[active];

  return (
    <section className="bg-white border-y border-border">
      <div className="container-tight py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">What we do</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
              A full practice. Delivered with focus.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Hover or tap any service to see what's included. Each is led by a partner with sector experience.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 rounded-xl border border-border overflow-hidden">
          {/* Left: list */}
          <ul className="lg:col-span-5 divide-y divide-border bg-[var(--color-background)]">
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.title}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group w-full flex items-center gap-4 px-6 py-5 text-left transition-colors ${
                      isActive ? "bg-white" : "hover:bg-white/60"
                    }`}
                  >
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
                        isActive
                          ? "bg-[var(--color-accent)] text-white"
                          : "bg-white text-[var(--color-navy-2)] border border-border"
                      }`}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className={`block text-[15px] font-semibold ${isActive ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"}`}>
                        {s.title}
                      </span>
                      <span className="block text-xs text-muted-foreground mt-0.5">{s.summary.split(",")[0]}</span>
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        isActive ? "translate-x-0.5 text-[var(--color-accent)]" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right: detail */}
          <div className="lg:col-span-7 p-8 lg:p-12 bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={A.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[var(--color-navy)] text-white mb-6">
                  <A.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)]">{A.title}</h3>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed max-w-xl">{A.summary}</p>

                <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
                  {A.points.map((p) => (
                    <div
                      key={p}
                      className="flex items-center gap-3 rounded-md border border-border bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-foreground)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      {p}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
