import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { ThreeBackground } from "./ThreeBackground";
import { MagneticButton } from "./MagneticButton";

const HEADLINE = ["Professional", "Chartered", "Accountant", "Services"];

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // word-by-word reveal
      gsap.from("[data-word] > span", {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
      });
      gsap.from("[data-hero-fade]", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.4,
        ease: "power3.out",
        stagger: 0.12,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative overflow-hidden bg-gradient-hero"
    >
      {/* three.js background */}
      <ThreeBackground className="opacity-70" />

      {/* floating blurred shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent-cyan/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary-deep/15 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />

      <div className="container mx-auto px-6 pt-20 pb-28 lg:pt-28 lg:pb-36 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <span
            data-hero-fade
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-semibold text-primary pulse-ring"
          >
            <Sparkles className="h-3.5 w-3.5" /> Trusted Chartered Accountants since 2008
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[4.25rem] font-bold leading-[1.02]">
            {HEADLINE.map((w, i) => (
              <span key={i} data-word className="word align-bottom mr-3">
                <span className={i === 1 || i === 2 ? "text-gradient" : ""}>{w}</span>
              </span>
            ))}
          </h1>
          <p data-hero-fade className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Strategic tax planning, compliance, and audit expertise for businesses and individuals.
            We turn complex financial regulations into clear, actionable strategies that protect and
            grow your wealth.
          </p>
          <div data-hero-fade className="mt-9 flex flex-wrap gap-4">
            <MagneticButton href="#contact" className="btn-premium group">
              Get Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="#services" className="btn-ghost-glass">
              Our Services
            </MagneticButton>
          </div>

          <div data-hero-fade className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              { v: "15+", l: "Years" },
              { v: "1.2K+", l: "Clients" },
              { v: "100%", l: "Compliance" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center shadow-card">
                <div className="text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          data-hero-fade
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2rem] overflow-hidden shadow-elevated ring-1 ring-white/40"
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
              alt="Chartered accountant analyzing financial reports"
              loading="eager"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/50 via-transparent to-accent-cyan/20" />
          </motion.div>

          {/* glow ring under image */}
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-primary opacity-25 blur-3xl" />

          {/* floating cards */}
          <motion.div
            className="absolute -left-6 top-10 glass-strong rounded-2xl p-4 shadow-glow flex items-center gap-3 animate-float-slow"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">100% Compliant</div>
              <div className="text-xs text-muted-foreground">ICAI Certified</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 bottom-10 glass-strong rounded-2xl p-4 shadow-cyan-glow flex items-center gap-3 animate-float-slow"
            style={{ animationDelay: "1.5s" }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-deep grid place-items-center text-primary-foreground">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">+38% Avg Savings</div>
              <div className="text-xs text-muted-foreground">via Tax Planning</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom soft fade into next section */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background z-10" />
    </section>
  );
}
