import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Listen", d: "A confidential conversation to understand your objectives, structure and constraints. No pitch, no obligation." },
  { n: "02", t: "Diagnose", d: "A focused review of financials, filings and exposure — delivered as a written opinion within 10 working days." },
  { n: "03", t: "Design", d: "A bespoke engagement plan with clear scope, timelines, partner accountability and a fixed-fee proposal." },
  { n: "04", t: "Deliver", d: "Execution by a dedicated team with weekly partner reviews. You always know what is happening, and why." },
  { n: "05", t: "Sustain", d: "An annual relationship review ensures advice keeps pace with regulation, scale and ambition." },
];

export default function Process() {
  return (
    <section id="process" className="py-28 lg:py-36 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary-soft">03 — Working Style</div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-primary-deeper leading-tight">
            How an engagement unfolds.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-xl">
            A deliberately unhurried process. Every step is led by a partner — not delegated, not outsourced.
          </p>
        </div>

        <div className="mt-20 relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border lg:left-1/2" />
          <div className="space-y-12 lg:space-y-20">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="relative grid lg:grid-cols-2 items-center gap-10"
                >
                  <div className={`hidden lg:block ${right ? "order-2" : ""}`} />
                  <div className={`pl-20 lg:pl-0 ${right ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="font-display text-6xl lg:text-7xl text-accent-gold/90">{s.n}</div>
                    <h3 className="mt-3 font-display text-2xl text-primary-deeper">{s.t}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-md lg:inline-block">{s.d}</p>
                  </div>
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 top-4 h-4 w-4 rounded-full bg-primary-deeper ring-8 ring-background" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
