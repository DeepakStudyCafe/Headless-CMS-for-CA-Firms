import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calculator, FileText, ShieldCheck, TrendingUp, Building2, Scale, Briefcase, BarChart3 } from "lucide-react";

const SERVICES = [
  { icon: Calculator, title: "Audit & Assurance", desc: "Independent statutory, internal and management audits with rigorous assurance standards." },
  { icon: FileText, title: "Direct Taxation", desc: "Income tax planning, filings and representation across individuals and corporates." },
  { icon: ShieldCheck, title: "GST & Indirect Tax", desc: "End-to-end GST compliance, advisory, refunds and litigation support." },
  { icon: Building2, title: "Corporate Compliance", desc: "Company incorporation, ROC filings, secretarial services and FEMA matters." },
  { icon: TrendingUp, title: "Business Advisory", desc: "Strategic CFO services, financial modelling, and growth advisory." },
  { icon: Scale, title: "Litigation Support", desc: "Representation before tax authorities, tribunals and appellate forums." },
  { icon: Briefcase, title: "Startup Services", desc: "DPIIT registrations, valuations, ESOPs and investor due diligence." },
  { icon: BarChart3, title: "Risk & Internal Control", desc: "SOP design, risk assessments and internal control reviews for resilient ops." },
];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: "l" | "r") => {
    ref.current?.scrollBy({ left: dir === "l" ? -360 : 360, behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-border-soft">
      <div className="container-px max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-blue">What We Do</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-deep">
              Comprehensive services, executed with precision.
            </h2>
            <p className="mt-4 text-subtext">
              From compliance to strategy — slide through the disciplines our partners lead day in, day out.
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll("l")} aria-label="prev" className="h-11 w-11 grid place-items-center rounded-md border border-border-soft text-navy-deep hover:bg-navy-deep hover:text-white transition">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll("r")} aria-label="next" className="h-11 w-11 grid place-items-center rounded-md border border-border-soft text-navy-deep hover:bg-navy-deep hover:text-white transition">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6"
        >
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              whileHover={{ y: -6 }}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] bg-background rounded-2xl border border-border-soft p-7 transition-shadow hover:shadow-[var(--shadow-lift)] group"
            >
              <div className="h-12 w-12 grid place-items-center rounded-lg bg-navy-deep text-accent-light group-hover:bg-accent-blue group-hover:text-white transition">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-navy-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-subtext leading-relaxed">{s.desc}</p>
              <div className="mt-6 text-xs font-semibold text-accent-blue uppercase tracking-wider">
                Learn more →
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
