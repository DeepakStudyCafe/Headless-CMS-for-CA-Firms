import { motion } from "framer-motion";
import { Check } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

const points = [
  "Chartered Accountants registered with ICAI",
  "Boutique firm with a personal partner-led approach",
  "Cross-industry experience: SaaS, retail, manufacturing",
  "Modern systems, classic values",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-border shadow-[var(--shadow-soft)]">
            <img src={aboutImg} alt="Our office" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-card rounded-2xl border border-border px-6 py-5 shadow-[var(--shadow-soft)]">
            <div className="font-display text-3xl text-primary">2008</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Founded</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-[var(--shadow-soft)]"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-secondary">03 — About</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground leading-tight">
            A boutique firm,<br /> built on <em className="text-primary not-italic">trust</em>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            ABC & Associates is a partner-led practice that pairs deep chartered accountancy
            expertise with the warmth of a small studio. We listen before we calculate — and we
            treat every ledger as a story worth telling well.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="mt-0.5 h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-primary" strokeWidth={2.5} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
