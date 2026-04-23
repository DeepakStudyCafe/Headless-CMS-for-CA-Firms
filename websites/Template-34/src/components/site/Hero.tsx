import { motion } from "framer-motion";
import portrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-32 lg:pt-56 lg:pb-44 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 -z-10 hero-blob" />
      <div className="absolute -z-10 right-[-10%] top-20 h-[520px] w-[520px] rounded-full bg-soft/60 blur-3xl" />
      <div className="absolute -z-10 left-[-8%] bottom-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container-editorial relative">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-8"
          >
            Chartered Accountants · Est. 2004
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-balance text-[44px] sm:text-6xl lg:text-[84px] leading-[1.02] text-heading"
          >
            Considered counsel
            <br />
            for the businesses
            <br />
            <span className="italic font-light text-primary">building India.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-body"
          >
            ABC &amp; Associates partners with founders, family enterprises and
            growing companies — bringing two decades of audit, tax and advisory
            judgement to the decisions that matter most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-12"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-heading text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-500"
            >
              Schedule a consultation
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* Floating portrait */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-[6%] top-32 w-[340px] xl:w-[400px]"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-soft/50 -rotate-2" />
            <img
              src={portrait}
              alt="ABC & Associates partner"
              width={896}
              height={1152}
              className="relative w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-card px-5 py-4 shadow-[0_20px_50px_-20px_rgba(29,78,216,0.25)] border border-border">
              <p className="font-display text-2xl text-heading">20+</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-body mt-1">
                Years of practice
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
