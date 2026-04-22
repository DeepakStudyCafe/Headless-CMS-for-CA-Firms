import { motion } from "framer-motion";
import { TrendingUp, Building2, Globe2, ShieldCheck } from "lucide-react";

const metrics = [
  { icon: Building2, value: "320+", label: "Active engagements", note: "Listed cos, MSMEs & family offices" },
  { icon: TrendingUp, value: "₹4,200 Cr", label: "Assets under advisory", note: "Across regulated sectors" },
  { icon: Globe2, value: "11", label: "Jurisdictions served", note: "India, GCC, Singapore, UK" },
  { icon: ShieldCheck, value: "Zero", label: "Material qualifications", note: "On audits in last 5 yrs" },
];

export function Metrics() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-accent-soft mb-5">— Quiet evidence</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Two decades, measured in<br />
              <span className="italic font-light text-primary-foreground/70">trust, not headlines.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-primary-foreground/60 text-base leading-relaxed">
              Numbers we are willing to be measured against — refreshed at the
              close of each financial year.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-primary p-8 md:p-10 group hover:bg-primary-foreground/[0.03] transition-colors"
            >
              <div className="flex items-center justify-between mb-10">
                <m.icon className="h-5 w-5 text-accent-soft" strokeWidth={1.5} />
                <span className="font-display italic text-xs text-primary-foreground/40">0{i + 1}</span>
              </div>
              <div className="font-display text-4xl md:text-5xl tracking-tight mb-3">
                {m.value}
              </div>
              <div className="text-sm text-primary-foreground/90 mb-1.5">{m.label}</div>
              <div className="text-xs text-primary-foreground/50 leading-relaxed">{m.note}</div>
              <div className="mt-6 h-px w-0 group-hover:w-12 bg-accent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
