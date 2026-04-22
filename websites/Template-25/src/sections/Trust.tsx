import { motion } from "framer-motion";

export default function Trust() {
  return (
    <section id="trust" className="py-28 lg:py-36 bg-primary-deeper text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint opacity-40" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary-soft/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-accent-gold">04 — Trust</div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">
              The people behind every<br /><em className="text-accent-gold">signature</em> we put on paper.
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              Eleven partners. Seventy professionals. One culture — built around independence, technical depth and unwavering client service.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "11", v: "Partners" },
                { k: "70+", v: "Professionals" },
                { k: "5", v: "Cities" },
              ].map((s) => (
                <div key={s.v} className="border-l border-white/15 pl-4">
                  <div className="font-display text-3xl text-accent-gold">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-white/50 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {[
              {
                q: "Their counsel during our Series C was the difference between a clean close and a complicated one. They think like operators.",
                a: "CFO, B2B SaaS Company",
              },
              {
                q: "Two decades into our relationship, ABC remains the most measured voice in every room they enter.",
                a: "Promoter, Listed Manufacturing Group",
              },
              {
                q: "What sets them apart is patience — they will explain a position three times until the family is comfortable with it.",
                a: "Principal, Single-Family Office",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ x: 6 }}
                className="border border-white/10 rounded-2xl p-7 bg-white/[0.03] backdrop-blur hover:bg-white/[0.06] transition-colors"
              >
                <div className="font-display text-xl leading-snug text-white/95">“{t.q}”</div>
                <div className="mt-4 text-xs uppercase tracking-[0.2em] text-accent-gold">— {t.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
