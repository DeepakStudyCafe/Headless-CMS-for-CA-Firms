import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-rise", {
        y: 30, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12,
      });
      gsap.from(".hero-image", {
        scale: 0.95, opacity: 0, duration: 1.1, ease: "power3.out", delay: 0.2,
      });
      gsap.to(".float-a", { y: -18, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".float-b", { y: 14, duration: 3.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={root} className="relative pt-32 lg:pt-40 pb-20 overflow-hidden gradient-hero">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="hero-rise inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> Trusted Chartered Accountants
          </span>
          <h1 className="hero-rise mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            Smart Finance.<br />
            <span className="bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
              Strategic Growth.
            </span>
          </h1>
          <p className="hero-rise mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            ABC & Associates delivers premium accounting, taxation and advisory
            services — engineered for modern businesses that value precision,
            clarity and compliance.
          </p>
          <div className="hero-rise mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full gradient-primary text-primary-foreground font-semibold shadow-soft hover:translate-y-[-2px] transition"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center h-12 px-6 rounded-full bg-surface border border-border font-semibold hover:bg-muted transition"
            >
              Explore Services
            </a>
          </div>
          <div className="hero-rise mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> ICAI Certified</div>
            <div className="hidden sm:block h-5 w-px bg-border" />
            <div>500+ Businesses Served</div>
          </div>
        </div>

        <div className="relative hero-image">
          <div className="float-a absolute -top-8 -left-6 h-24 w-24 rounded-3xl gradient-primary opacity-80 blur-[1px]" />
          <div className="float-b absolute -bottom-8 -right-4 h-32 w-32 rounded-full bg-primary/15" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft border border-border bg-surface">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
              alt="Chartered Accountants at work"
              className="w-full h-[460px] object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 lg:left-10 lg:right-auto glass rounded-2xl p-4 shadow-soft border border-border flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold">98%</div>
            <div>
              <div className="font-semibold text-foreground">Client Satisfaction</div>
              <div className="text-xs text-muted-foreground">Across 500+ engagements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
