import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-primary-deeper text-primary-foreground">
      <div className="absolute inset-0 blueprint opacity-50" />
      <div className="absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full bg-primary-soft/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-accent-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
            Est. 2004 · ICAI Registered
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-white"
          >
            Numbers that
            <span className="block italic text-accent-gold">build trust.</span>
            <span className="block">Counsel that builds futures.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed"
          >
            ABC &amp; Associates is a multidisciplinary chartered accountancy firm advising founders,
            family offices and growing enterprises on audit, tax and strategic finance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="group inline-flex items-center gap-3 bg-accent-gold text-primary-deeper px-7 py-4 rounded-full font-medium hover:bg-white transition-colors">
              Schedule a private consultation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 text-white/80 hover:text-white px-2 py-2 underline-offset-4 hover:underline">
              Explore our practice
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-white/50">A snapshot</div>
            <div className="mt-6 space-y-6">
              {[
                { k: "20+", v: "Years of practice" },
                { k: "₹4,200 Cr", v: "Assets advised" },
                { k: "320+", v: "Active clients" },
                { k: "11", v: "Specialist partners" },
              ].map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-baseline justify-between border-b border-white/10 pb-4 last:border-0"
                >
                  <span className="font-display text-3xl text-white">{s.k}</span>
                  <span className="text-sm text-white/60">{s.v}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
