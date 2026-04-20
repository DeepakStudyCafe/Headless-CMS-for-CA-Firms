import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function AboutStats() {
  const stats = [
    { v: 600, s: "+", l: "Clients across India" },
    { v: 20, s: "+", l: "Years of practice" },
    { v: 35, s: "", l: "Professionals on staff" },
    { v: 99, s: "%", l: "On-time filing rate" },
  ];

  const points = [
    "Partner-led engagements with direct access",
    "Independent quality reviews on every audit",
    "Transparent fee structure, no surprises",
  ];

  return (
    <section className="bg-[var(--color-background)]">
      <div className="container-tight py-24 grid gap-14 lg:grid-cols-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">About the firm</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
            A practice built on judgement,<br />not just process.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              Founded in 2004, ABC &amp; Associates serves privately held companies, listed entities,
              and high-growth startups. Our work is grounded in technical rigour, regulatory awareness,
              and a steady, partner-led approach to every assignment.
            </p>
            <p>
              We keep our teams small and senior. That means the person who scopes your engagement is
              the same person who signs off on it.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-[var(--color-foreground)]">
                <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="lg:col-span-5 space-y-4">
          {stats.map((st, i) => (
            <motion.div
              key={st.l}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex items-center justify-between rounded-xl border border-border bg-white px-6 py-5 hover:border-[var(--color-accent)]/60 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="text-sm text-muted-foreground max-w-[55%]">{st.l}</div>
              <div className="text-3xl font-semibold text-[var(--color-primary)] tabular-nums">
                <Counter to={st.v} suffix={st.s} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
