import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";

const STATS = [
  { value: "25+", label: "Years in practice" },
  { value: "1,200+", label: "Clients advised" },
  { value: "350+", label: "Active engagements" },
  { value: "₹4,800Cr", label: "Assets under advisory" },
];

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

export function HeroTrust() {
  return (
    <section id="home" className="relative bg-background">
      <div className="mx-auto max-w-[1280px] px-6 pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent"
            >
              Chartered Accountants · Est. 1999
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 font-display text-[40px] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-[54px] lg:text-[64px]"
            >
              Considered counsel.
              <br />
              Compounding trust.
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-7 max-w-xl text-[15px] leading-[1.75] text-muted-foreground"
            >
              ABC &amp; Associates is a boutique chartered accountancy firm
              advising founders, family offices and growing enterprises on
              audit, taxation and corporate strategy with discretion and rigour.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-secondary"
              >
                Schedule a consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-transparent px-6 py-3 text-[13px] font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                Explore practice areas
              </a>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="overflow-hidden border border-border bg-white">
                <img
                  src={heroImg}
                  alt="Senior partner at ABC & Associates"
                  width={1024}
                  height={1280}
                  className="h-[500px] w-full object-cover lg:h-[560px]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>ICAI Member Firm</span>
                <span>Reg. No. 0123456N</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust strip — divider style, not boxed */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-y-8 border-t border-border pt-10 sm:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`px-2 sm:px-6 ${i !== 0 ? "sm:border-l sm:border-border" : ""}`}
            >
              <p className="font-display text-[28px] font-semibold tracking-tight text-foreground sm:text-[34px]">
                {s.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
