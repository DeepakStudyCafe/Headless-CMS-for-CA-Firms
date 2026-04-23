import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Listen", desc: "We begin with a structured conversation — your business, your concerns, your timelines. No proposals before we understand." },
  { n: "02", title: "Scope", desc: "A written engagement letter setting out exactly what we'll do, who'll do it, and what it will cost. Always." },
  { n: "03", title: "Deliver", desc: "Partner-led, documented work — with regular checkpoints, clear positions and no surprises at year-end." },
  { n: "04", title: "Sustain", desc: "Quarterly reviews and a standing line of access to your partner. We stay close even when nothing's burning." },
];

export function Process() {
  return (
    <section id="process" className="py-32 lg:py-44 bg-card/40 border-y border-border">
      <div className="container-editorial">
        <div className="max-w-2xl mb-24">
          <p className="eyebrow mb-6">04 — How we work</p>
          <h2 className="text-4xl lg:text-5xl text-heading leading-tight">
            Four stages. No theatre.
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-32">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-12 gap-6 items-end ${
                i % 2 === 1 ? "lg:pl-[15%]" : ""
              }`}
            >
              <div className="col-span-12 lg:col-span-3">
                <span
                  className="font-display text-[120px] lg:text-[180px] leading-none text-primary/15"
                  style={{ fontFeatureSettings: '"lnum"' }}
                >
                  {s.n}
                </span>
              </div>
              <div className="col-span-12 lg:col-span-8 lg:col-start-5 pb-4 lg:pb-8">
                <h3 className="font-display text-3xl lg:text-5xl text-heading mb-5">
                  {s.title}
                </h3>
                <p className="text-body text-lg leading-relaxed max-w-xl">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
