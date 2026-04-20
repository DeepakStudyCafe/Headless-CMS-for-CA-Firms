import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Cog, CheckCircle } from "lucide-react";

const STEPS = [
  { n: "01", icon: MessageSquare, title: "Consultation", desc: "We listen, scope and align on objectives." },
  { n: "02", icon: ClipboardList, title: "Planning", desc: "Detailed roadmap, timelines and ownership." },
  { n: "03", icon: Cog, title: "Execution", desc: "Disciplined delivery with weekly checkpoints." },
  { n: "04", icon: CheckCircle, title: "Delivery", desc: "Reports, sign-off and continuous advisory." },
];

export function Process() {
  return (
    <section className="py-20 lg:py-28 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_25%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="container-px max-w-7xl mx-auto relative">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-light">Our Workflow</div>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white">
            A clear process. Predictable outcomes.
          </h2>
          <p className="mt-4 text-white/65">
            Every engagement follows a transparent four-step framework so you always know what's next.
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="relative h-[72px] flex items-center">
                  <div className="h-[72px] w-[72px] grid place-items-center rounded-full bg-white/5 border border-white/10 group-hover:bg-accent-blue group-hover:border-accent-blue transition-colors">
                    <s.icon className="h-7 w-7 text-accent-light group-hover:text-white" />
                  </div>
                  <div className="ml-4 text-5xl font-bold font-display text-white/10 group-hover:text-white/20 transition-colors">
                    {s.n}
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
