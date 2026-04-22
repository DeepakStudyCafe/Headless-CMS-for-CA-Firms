import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Audit & Assurance",
    desc: "Independent statutory, internal and concurrent audits delivered with rigour and clarity — for listed entities, family businesses and global subsidiaries.",
    tags: ["Statutory", "Internal", "Tax Audit", "IFRS"],
  },
  {
    n: "02",
    title: "Direct & Indirect Tax",
    desc: "Strategic tax planning, GST, transfer pricing, and representation before authorities. Our work reduces friction and protects long-horizon value.",
    tags: ["GST", "Income Tax", "TP", "Litigation"],
  },
  {
    n: "03",
    title: "Corporate Advisory",
    desc: "From incorporation and FEMA compliance to M&A due diligence — counsel that travels with the business through every stage of growth.",
    tags: ["M&A", "FEMA", "ROC", "Due Diligence"],
  },
  {
    n: "04",
    title: "Risk & Forensic",
    desc: "Forensic investigations, fraud risk assessments and IFC reviews. Quiet, methodical work where confidentiality is non-negotiable.",
    tags: ["Forensic", "IFC", "SOX", "Fraud Risk"],
  },
  {
    n: "05",
    title: "Outsourced Finance",
    desc: "Bookkeeping, virtual CFO, payroll and management reporting — a fully managed back-office that lets founders focus on what they do best.",
    tags: ["vCFO", "Payroll", "MIS", "Bookkeeping"],
  },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">— Practice</div>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.05] tracking-tight">
              Five disciplines.<br />
              <span className="italic font-light text-secondary">One standard.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              Hover or tap each panel — every engagement is shaped around the
              client's calendar, not ours.
            </p>
          </div>
        </div>

        <div className="border-t border-border">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={s.n}
                onMouseEnter={() => setOpen(i)}
                onClick={() => setOpen(i)}
                className={`group border-b border-border cursor-pointer transition-colors duration-500 ${
                  isOpen ? "bg-surface" : "bg-transparent hover:bg-surface/50"
                }`}
              >
                <div className="px-2 md:px-6 py-7 md:py-9 grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-display italic text-subtext text-base">{s.n}</span>
                  </div>
                  <div className="col-span-8 md:col-span-7">
                    <h3
                      className={`font-display text-2xl md:text-4xl tracking-tight transition-all duration-500 ${
                        isOpen ? "text-accent translate-x-2" : "text-primary"
                      }`}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <div className="col-span-2 md:col-span-4 flex justify-end">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4 }}
                      className={`h-10 w-10 rounded-full grid place-items-center border ${
                        isOpen ? "border-accent text-accent" : "border-border text-secondary"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 md:px-6 pb-10 grid grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-7 md:col-start-2">
                          <p className="text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
                            {s.desc}
                          </p>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-wrap gap-2 md:justify-end items-start">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className="text-xs uppercase tracking-wider text-subtext border border-border rounded-full px-3 py-1.5 bg-background"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
