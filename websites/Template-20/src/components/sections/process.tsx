import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Cog, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We listen first — understanding your business, structure and immediate concerns." },
  { icon: ClipboardList, title: "Planning", desc: "A tailored engagement plan with scope, timelines and a single point of contact." },
  { icon: Cog, title: "Execution", desc: "Senior-led delivery with weekly checkpoints — no juniors flying solo." },
  { icon: CheckCircle2, title: "Delivery", desc: "Signed reports, actionable summaries and ongoing support post-engagement." },
];

export function ProcessSection() {
  return (
    <section id="career" className="bg-background py-20 lg:py-28 relative">
      <div className="container-pro">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">How we engage</span>
            <h2 className="mt-4 text-3xl lg:text-5xl font-semibold text-primary leading-tight">
              A four-step process,<br /> documented and accountable.
            </h2>
          </div>
          <p className="lg:col-span-5 text-subtext leading-relaxed">
            Every client engagement follows the same structured path — so you know exactly
            what to expect, when to expect it, and who is responsible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-2 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="rounded-2xl bg-white border border-border p-7 h-full hover:border-accent hover:shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-display font-semibold text-accent-soft group-hover:text-accent transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-white group-hover:bg-accent transition-colors">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-subtext leading-relaxed">{s.desc}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 h-7 w-7 items-center justify-center rounded-full bg-background border border-border text-accent">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
