import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, LineChart, Scale, Sparkles } from "lucide-react";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Built on quiet expertise",
    body: "Three decades across audit, taxation and corporate law — distilled into actionable counsel.",
  },
  {
    icon: UserCheck,
    title: "Partner-led engagements",
    body: "Every client works directly with a partner. No handoffs, no junior triage.",
  },
  {
    icon: LineChart,
    title: "Modern tooling, classical rigour",
    body: "Cloud accounting and audit automation paired with the discipline of double-entry done right.",
  },
  {
    icon: Scale,
    title: "Independent by design",
    body: "We hold no allied insurance, brokerage or fund interests. Our advice answers only to you.",
  },
  {
    icon: Sparkles,
    title: "A practice, not a factory",
    body: "We deliberately limit intake — fewer clients means deeper relationships and faster turnaround.",
  },
];

export function FeatureHighlights() {
  return (
    <section className="relative bg-[color-mix(in_oklab,var(--color-soft-accent)_8%,var(--color-background))] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left — heading */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent"
            >
              Why ABC &amp; Associates
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 font-display text-[34px] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[44px]"
            >
              The quiet difference
              <br />
              of a senior bench.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-md text-[15px] leading-[1.75] text-muted-foreground"
            >
              We are not the largest firm in the room — and that is the point.
              What we offer instead is judgement, continuity and the kind of
              attention that compounds over decades of working together.
            </motion.p>
          </div>

          {/* Right — vertical points */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {POINTS.map((p, i) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group grid grid-cols-[auto_1fr] items-start gap-5 py-7 transition-colors hover:bg-white/60"
                >
                  <div className="mt-1 flex h-9 w-9 items-center justify-center border border-border bg-white text-accent">
                    <p.icon className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div className="pr-4">
                    <h3 className="font-display text-[18px] font-semibold tracking-tight text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] leading-[1.7] text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
