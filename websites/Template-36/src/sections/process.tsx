import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Cog, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: MessageSquare, title: "Consultation", desc: "A discovery call to understand your situation, goals and constraints." },
  { icon: ClipboardList, title: "Planning", desc: "A tailored engagement plan with clear scope, timelines and partner accountability." },
  { icon: Cog, title: "Execution", desc: "Work delivered with rigour — checked, reviewed and reconciled at every step." },
  { icon: CheckCircle2, title: "Delivery", desc: "Filings, reports and counsel handed over with a debrief and next-quarter roadmap." },
];

export function Process() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-16 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
              How we work
            </p>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[44px]">
              Four steps. No surprises.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[14.5px] leading-[1.7] text-muted-foreground">
            A predictable cadence designed for senior decision-makers who value
            clarity over choreography.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-background p-8 transition-colors hover:bg-[color-mix(in_oklab,var(--color-soft-accent)_10%,var(--color-background))]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[13px] font-medium tracking-[0.22em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.icon className="h-5 w-5 text-foreground/40" strokeWidth={1.5} />
              </div>
              <h3 className="mt-10 font-display text-[19px] font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
