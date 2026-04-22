import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary-soft">01 — The Firm</div>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl text-primary-deeper leading-tight">
              A practice built on <em className="text-primary">discretion</em>, precision and patience.
            </h2>
          </motion.div>

          <div className="lg:col-span-8 space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl leading-relaxed text-foreground/80 max-w-2xl"
            >
              For two decades, we have served as the quiet counsel behind founders, multi-generational
              businesses and institutional investors — translating complex financial regulation into
              clear, executable decisions.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {[
                { y: "2004", t: "Founded in Mumbai", d: "Built on a single principle — clients first." },
                { y: "2011", t: "Pan-India practice", d: "Five offices across metro and tier-1 cities." },
                { y: "2018", t: "International desks", d: "Transfer pricing & FEMA advisory expanded." },
                { y: "2024", t: "320+ active mandates", d: "Family offices, NBFCs, SaaS & manufacturing." },
              ].map((m, i) => (
                <motion.div
                  key={m.y}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card p-8 hover:bg-secondary transition-colors"
                >
                  <div className="font-display text-2xl text-accent-gold">{m.y}</div>
                  <div className="mt-3 font-medium text-primary-deeper">{m.t}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.d}</div>
                </motion.div>
              ))}
            </div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-l-2 border-accent-gold pl-6 font-display text-2xl italic text-primary-deep max-w-xl"
            >
              “We measure our work not in deliverables, but in the decisions our clients make with confidence.”
              <footer className="mt-4 text-sm not-italic text-muted-foreground tracking-wide">
                — Senior Partner, ABC &amp; Associates
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
