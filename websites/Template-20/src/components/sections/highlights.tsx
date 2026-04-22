import { motion } from "framer-motion";
import { Scale, LineChart, Briefcase, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Scale,
    eyebrow: "Assurance",
    title: "Audit & Assurance",
    desc: "Statutory, internal and forensic audits performed with rigor — equipping boards with clarity and compliance officers with confidence.",
  },
  {
    icon: LineChart,
    eyebrow: "Taxation",
    title: "Direct & Indirect Tax",
    desc: "Tax planning, GST advisory and litigation support, structured to minimise risk and unlock legitimate efficiency.",
  },
  {
    icon: Briefcase,
    eyebrow: "Advisory",
    title: "CFO & Advisory",
    desc: "From cap-table modelling to fundraising readiness, we sit alongside leadership to translate numbers into decisions.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Compliance",
    title: "Regulatory Compliance",
    desc: "ROC, FEMA, RBI and labour-law compliance handled end-to-end — no missed deadlines, no surprises.",
  },
];

export function HighlightsSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="container-pro">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              <span className="h-px w-8 bg-accent" />
              What we focus on
            </span>
            <h2 className="mt-5 text-3xl lg:text-5xl font-semibold text-primary leading-[1.1] tracking-tight">
              Four practice pillars,
              <br />
              <span className="text-subtext font-normal">one disciplined firm.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-subtext text-base lg:text-[17px] leading-relaxed">
              We organise our work around outcomes — not service codes — so every engagement
              is measurable, accountable and strategically aligned with your goals.
            </p>
          </div>
        </div>

        {/* Unified card grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-border bg-white shadow-[var(--shadow-card)] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {highlights.map((h, i) => {
              const isRightCol = i % 2 === 1;
              const isBottomRow = i >= 2;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`group relative p-8 lg:p-10 transition-colors hover:bg-muted/40 ${
                    !isRightCol ? "md:border-r border-border" : ""
                  } ${!isBottomRow ? "border-b border-border" : ""}`}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <h.icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold tracking-[0.2em] text-subtext uppercase">
                        {h.eyebrow}
                      </p>
                      <h3 className="mt-2 text-xl lg:text-[22px] font-semibold text-primary leading-snug">
                        {h.title}
                      </h3>
                      <p className="mt-3 text-sm lg:text-[15px] text-subtext leading-relaxed">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer CTA strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border bg-muted/30 px-8 lg:px-10 py-6">
            <p className="text-sm text-subtext">
              Looking for a specific engagement? Our partners can scope it within 24 hours.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors"
            >
              Speak to a partner →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
