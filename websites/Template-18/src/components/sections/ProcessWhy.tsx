import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Cog, PackageCheck, Award, Lock, Users, TrendingUp, Globe2, HeartHandshake } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    { icon: MessageSquare, t: "Consultation", d: "Discovery call to understand objectives, timelines and risk areas." },
    { icon: ClipboardList, t: "Planning", d: "Engagement scope, deliverables and a partner-approved work plan." },
    { icon: Cog, t: "Execution", d: "Fieldwork, reviews and weekly status updates with your team." },
    { icon: PackageCheck, t: "Delivery", d: "Final report, sign-off, and a roadmap for the next cycle." },
  ];

  return (
    <section className="bg-[var(--color-background)]">
      <div className="container-tight py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">How we work</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">A predictable, four-step engagement.</h2>
          <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
            Same rhythm whether it's a single filing or a multi-entity audit. You always know where things stand.
          </p>
        </div>

        <div className="mt-14 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute left-0 right-0 top-7 h-px bg-border" />
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white border border-border text-[var(--color-navy-2)] shadow-[0_4px_18px_oklch(0.2_0.04_260/0.06)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-[var(--color-accent)] tracking-widest">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--color-primary)]">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const items = [
    { icon: Award, t: "ICAI member firm", d: "Practising under a registered firm number with full peer-review compliance." },
    { icon: Lock, t: "Confidentiality first", d: "Strict data handling, NDAs, and segregated client workspaces." },
    { icon: Users, t: "Partner-led teams", d: "Senior involvement from kickoff to sign-off — not just at the end." },
    { icon: TrendingUp, t: "Forward-looking", d: "Beyond compliance — insights that influence decisions, not just records." },
    { icon: Globe2, t: "Cross-border ready", d: "Experience with FEMA, transfer pricing, and overseas group reporting." },
    { icon: HeartHandshake, t: "Long-term partners", d: "Most clients have been with us for over 7 years. We work for the relationship." },
  ];

  return (
    <section className="bg-white border-y border-border">
      <div className="container-tight py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">Why ABC &amp; Associates</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
              The values our clients<br />keep coming back for.
            </h2>
          </div>
        </div>

        <div className="grid gap-px bg-border rounded-xl overflow-hidden border border-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white p-8 group hover:bg-[var(--color-background)] transition-colors"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-[var(--color-navy-2)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-colors">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-[var(--color-primary)]">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
