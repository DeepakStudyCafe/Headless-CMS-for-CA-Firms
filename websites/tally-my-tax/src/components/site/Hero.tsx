import { getImageUrl } from '@/lib/api';
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { ThreeBackground } from "./ThreeBackground";
import { MagneticButton } from "./MagneticButton";
import { Link } from "@tanstack/react-router";

export function Hero({ data }: { data?: any }) {
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
  }, [data]); // re-run if data changes

  const title = data?.textContent?.heading || "Professional Chartered Accountant Services";
  const HEADLINE = title.split(" ");
  const description = data?.textContent?.subheading || "Strategic tax planning, compliance, and audit expertise for businesses and individuals.";
  const heroImage = data?.imageUrl || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80";

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

      <div className="container mx-auto px-6 pt-5 pb-28 lg:pt-16 lg:pb-36 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <span
            data-hero-fade
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-semibold text-primary pulse-ring"
          >
            <Sparkles className="h-3.5 w-3.5" /> Trusted Chartered Accountants since 2008
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.02]">
            {HEADLINE.map((w: string, i: number) => (
              <span key={i} data-word className="word align-bottom mr-3">
                <span className={i === 1 || i === 2 ? "text-gradient" : ""}>{w}</span>
              </span>
            ))}
          </h1>
          <p data-hero-fade className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            {description}
          </p>
          <div data-hero-fade className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact">
              <MagneticButton className="btn-premium group">
                Get Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </Link>
            <Link to="/services">
              <MagneticButton className="btn-ghost-glass">
                Our Services
              </MagneticButton>
            </Link>
          </div>

          <div data-hero-fade className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {(data?.textContent?.stats || [
              { value: "15+", label: "Years" },
              { value: "1.2K+", label: "Clients" },
              { value: "100%", label: "Compliance" },
            ]).map((s: any) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center shadow-card">
                <div className="text-2xl font-bold text-gradient">{s.value || s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label || s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
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
              src={getImageUrl(heroImage)}
              alt="Hero image"
              loading="eager"
              className="w-full h-[420px] object-cover"
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

