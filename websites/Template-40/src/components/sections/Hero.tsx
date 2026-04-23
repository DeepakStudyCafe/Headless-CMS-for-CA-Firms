import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Phone, ShieldCheck, TrendingUp, Award } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-eyebrow", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(".hero-title > span", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12 }, "-=0.3")
        .fromTo(".hero-sub", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
        .fromTo(".hero-cta", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .fromTo(".hero-stat", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.3")
        .fromTo(".hero-visual", { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=1.2");

      gsap.to(".hero-blob", { y: 20, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={ref} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-hero overflow-hidden">
      <div className="hero-blob absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="hero-blob absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
            <ShieldCheck className="h-3.5 w-3.5" /> Trusted Since 1998
          </div>
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-charcoal mb-6">
            <span className="block">Precision in</span>
            <span className="block text-gradient-maroon">Finance &amp; Compliance.</span>
            <span className="block">Crafted for Growth.</span>
          </h1>
          <p className="hero-sub text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            ABC &amp; Associates is a premier Chartered Accountancy firm delivering trusted
            taxation, audit, and advisory services to businesses, startups, and individuals
            across India.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="hero-cta group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:scale-[1.03] transition-smooth">
              Get Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="hero-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary/30 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth">
              <Phone className="h-4 w-4" /> Contact Us
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "25+", l: "Years Experience" },
              { v: "1200+", l: "Happy Clients" },
              { v: "50+", l: "Expert Team" },
            ].map((s) => (
              <div key={s.l} className="hero-stat">
                <div className="text-3xl font-display font-bold text-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual relative">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5] bg-gradient-primary">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="ABC & Associates chartered accountants discussing financial strategy"
              className="w-full h-full object-cover mix-blend-luminosity opacity-90"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-elegant border border-border w-56">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">ICAI Certified</div>
                <div className="text-sm font-bold">Award Winning</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 bg-card rounded-2xl p-5 shadow-elegant border border-border">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
