import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import introImage from "@/assets/intro-shape.jpg";

export function Intro() {
  return (
    <section id="home" className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-subtext"
          >
            <span className="h-px w-8 bg-secondary/40" />
            Est. 2004 — Mumbai · Bengaluru · Delhi
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block text-xs text-subtext"
          >
            <span className="font-display italic text-primary">No. 01</span> / Advisory Practice
          </motion.div>
        </div>

        {/* Asymmetrical grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Left - heading */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs uppercase tracking-[0.3em] text-accent mb-8"
            >
              ◆ Chartered Accountancy · Audit · Advisory
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[clamp(2.75rem,7vw,6.25rem)] leading-[0.95] font-medium text-primary text-balance tracking-tight"
            >
              Numbers that{" "}
              <span className="italic font-light text-secondary">whisper</span>,
              <br />
              counsel that{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">resonates</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  className="absolute left-0 right-0 bottom-2 h-3 bg-accent-soft/60 origin-left -z-0"
                />
              </span>.
            </motion.h1>
          </div>

          {/* Right - floating image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-5 lg:pl-8"
          >
            <div className="relative aspect-[4/5] max-w-md ml-auto">
              <div className="absolute -top-4 -left-4 right-8 bottom-8 border border-accent/40 rounded-sm" />
              <img
                src={introImage}
                alt="Abstract premium composition"
                width={1024}
                height={1280}
                className="relative h-full w-full object-cover rounded-sm shadow-2xl shadow-secondary/15"
              />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-background border border-border rounded-sm px-5 py-4 shadow-xl"
              >
                <div className="font-display text-3xl font-medium text-primary">21<span className="text-accent">+</span></div>
                <div className="text-[10px] uppercase tracking-widest text-subtext mt-1">Years of practice</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA row — separated, not under the heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 md:mt-28 grid grid-cols-12 gap-6 items-end"
        >
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <p className="text-base md:text-lg text-secondary max-w-md leading-relaxed">
              We partner with founders, family businesses and global firms to build
              financial clarity that lasts beyond a quarter.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 order-1 md:order-2 flex md:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 bg-primary hover:bg-primary/90 text-primary-foreground pl-7 pr-2 py-2 rounded-full transition-all"
            >
              <span className="text-sm font-medium">Begin a conversation</span>
              <span className="h-11 w-11 rounded-full bg-accent grid place-items-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="h-5 w-5 text-accent-foreground" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-20 md:mt-24 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { k: "ICAI", v: "Member firm since 2004" },
            { k: "21+", v: "Years of practice" },
            { k: "320+", v: "Active engagements" },
            { k: "11", v: "Jurisdictions served" },
          ].map((t) => (
            <div key={t.k}>
              <div className="font-display text-2xl md:text-3xl text-primary tracking-tight">{t.k}</div>
              <div className="text-[11px] uppercase tracking-widest text-subtext mt-2">{t.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
