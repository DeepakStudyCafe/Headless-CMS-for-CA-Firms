import { motion } from "framer-motion";
import { Calculator, FileText, TrendingUp, Building2, Scale, BarChart3, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Calculator, title: "Tax Planning & Filing", desc: "Strategic tax advisory for individuals, partnerships and corporations — minimising liability with full compliance.", featured: true },
  { icon: FileText, title: "Audit & Assurance", desc: "Statutory, internal and forensic audits delivered with rigour, transparency and quiet precision." },
  { icon: TrendingUp, title: "Financial Advisory", desc: "From cash flow to capital structure — guidance that helps your business grow with confidence." },
  { icon: Building2, title: "Company Formation", desc: "Seamless incorporation, ROC filings and corporate secretarial services — handled end-to-end.", featured: true },
  { icon: Scale, title: "GST & Compliance", desc: "Complete GST registration, returns, reconciliation and representation under one elegant roof." },
  { icon: BarChart3, title: "Bookkeeping", desc: "Accurate, timely books that double as a clear lens into the financial health of your enterprise." },
];

export function Services() {
  return (
    <section id="services" className="relative bg-section py-28 md:py-36 px-6 overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-grid-cream opacity-40 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[32rem] h-[32rem] rounded-full soft-blur-blob bg-primary/20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 mb-20 items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-secondary">
              <span className="h-px w-8 bg-primary" /> 02 — Services
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl text-foreground leading-[1.05]">
              What we do, <em className="text-primary not-italic">beautifully.</em>
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl md:justify-self-end">
            A complete suite of chartered accountancy services — designed to feel calm,
            considered and unmistakably premium. Hover any card to explore.
          </p>
        </div>

        <div className="grid md:grid-cols-6 gap-5 md:gap-6 auto-rows-fr">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-7 md:p-9 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-glow ${
                s.featured ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              {/* gold corner glow */}
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-primary/0 group-hover:bg-primary/15 blur-3xl transition-all duration-700" />

              <div className="relative flex items-start justify-between mb-8">
                <div className="relative h-14 w-14 rounded-2xl border border-border bg-section flex items-center justify-center transition-all duration-500 group-hover:border-primary/60 group-hover:bg-gradient-gold group-hover:scale-110 group-hover:rotate-[-4deg]">
                  <s.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <span className="font-display text-xs tracking-[0.3em] text-muted-foreground/60">
                  0{i + 1}
                </span>
              </div>

              <h3 className="relative font-display text-2xl md:text-[1.75rem] text-foreground leading-tight">
                {s.title}
              </h3>
              <p className="relative mt-3 text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                {s.desc}
              </p>

              <div className="relative mt-7 pt-5 border-t border-border/70 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                  Learn more
                </span>
                <span className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-foreground/70 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-300">
                  <ArrowUpRight size={16} strokeWidth={1.75} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
