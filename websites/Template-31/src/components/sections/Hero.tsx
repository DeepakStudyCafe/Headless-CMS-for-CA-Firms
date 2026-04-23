import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Phone, Award } from "lucide-react";
import heroImg from "@/assets/hero-ca.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", immediateRender: false } });
      tl.fromTo(".hero-eyebrow", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo(".hero-title > span", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 }, "-=0.4")
        .fromTo(".hero-sub", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
        .fromTo(".hero-cta", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, "-=0.4")
        .fromTo(".hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .fromTo(".hero-img", { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }, "-=1.1")
        .fromTo(".hero-float", { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.4)" }, "-=0.8");
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-luxe">
      {/* decorative shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-gold opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <div>
          <p className="hero-eyebrow inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary font-semibold">
            <span className="h-px w-8 bg-[var(--gold)]" />
            Chartered Accountants · Est. 1998
          </p>

          <h1 className="hero-title mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-foreground">
            <span className="block">Premium Financial</span>
            <span className="block">Wisdom, <em className="text-gradient-gold not-italic">Tailored</em></span>
            <span className="block">to Your Ambition.</span>
          </h1>

          <p className="hero-sub mt-7 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Sterling &amp; Co. delivers white-glove chartered accountancy — strategic tax planning, audit assurance,
            GST mastery, and advisory services trusted by founders, family offices, and enterprises across India.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#query" className="hero-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-maroon text-primary-foreground font-medium shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-0.5">
              Get Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="hero-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary/30 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Our Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <div className="hero-badge flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--gold)]/15 flex items-center justify-center">
                <Award className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">ICAI Certified</p>
                <p className="text-sm font-semibold text-foreground">Award-winning firm</p>
              </div>
            </div>
            <div className="hero-badge flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Talk to an advisor</p>
                <p className="text-sm font-semibold text-foreground">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hero-img relative rounded-[2rem] overflow-hidden shadow-elegant">
            <img src={heroImg} alt="Chartered accountant at work" width={1280} height={1280} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
          </div>
          <div className="hero-float absolute -bottom-6 -left-6 glass-cream rounded-2xl p-5 shadow-elegant max-w-[220px]">
            <p className="text-2xl font-display font-bold text-primary">25+ Years</p>
            <p className="text-xs text-muted-foreground mt-1">of trusted advisory across industries</p>
          </div>
          <div className="hero-float absolute -top-6 -right-6 glass-cream rounded-2xl p-5 shadow-elegant">
            <p className="text-2xl font-display font-bold text-gradient-gold">A+</p>
            <p className="text-xs text-muted-foreground mt-1">Compliance rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
