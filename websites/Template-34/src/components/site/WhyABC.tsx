import { motion } from "framer-motion";

const advantages = [
  {
    icon: "◇",
    title: "Partner-led engagements",
    desc: "Every client is paired with a partner who owns the relationship end-to-end. No hand-offs, no anonymous teams.",
  },
  {
    icon: "○",
    title: "Considered, not reactive",
    desc: "We work in writing, with positions documented and defensible. Decisions hold up under scrutiny — and time.",
  },
  {
    icon: "△",
    title: "Quietly technological",
    desc: "Modern audit tooling, secure document workflows and clean data — without burdening you with our software choices.",
  },
  {
    icon: "□",
    title: "Sector-aware judgement",
    desc: "Manufacturing, SaaS, professional services, real estate, NBFCs — we've seen the patterns and know the pitfalls.",
  },
  {
    icon: "▽",
    title: "Discreet by default",
    desc: "Confidentiality is a culture, not a clause. Our reputation is built on what we don't say as much as what we do.",
  },
  {
    icon: "✕",
    title: "Long horizons",
    desc: "The average ABC client has been with us for over nine years. We're built for relationships, not transactions.",
  },
];

export function WhyABC() {
  return (
    <section id="why" className="py-32 lg:py-44 bg-card/40 border-y border-border">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow mb-6">02 — Why ABC</p>
              <h2 className="text-4xl lg:text-5xl text-heading leading-tight mb-8">
                The way we work is the reason clients stay.
              </h2>
              <p className="text-body text-lg leading-relaxed">
                A chartered accountancy practice should feel like counsel — not
                a vendor relationship. These are the principles that have
                shaped two decades of how we serve our clients.
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <div className="space-y-12">
              {advantages.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex gap-6 pb-12 border-b border-border last:border-b-0"
                >
                  <span className="font-display text-2xl text-primary mt-1">
                    {a.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-heading mb-3">
                      {a.title}
                    </h3>
                    <p className="text-body leading-relaxed">{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
