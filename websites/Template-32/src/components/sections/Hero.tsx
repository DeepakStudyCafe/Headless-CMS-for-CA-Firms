import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-eyebrow", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" });
      gsap.from(".hero-title", { opacity: 0, y: 40, duration: 1, delay: 0.15, ease: "power3.out" });
      gsap.from(".hero-sub", { opacity: 0, y: 20, duration: 0.8, delay: 0.5, ease: "power3.out" });
      gsap.from(".hero-cta", { opacity: 0, y: 20, duration: 0.6, delay: 0.7, stagger: 0.1, ease: "power3.out" });
      gsap.from(".hero-image", { opacity: 0, x: 50, scale: 0.95, duration: 1.2, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-stat", { opacity: 0, y: 20, duration: 0.6, delay: 1, stagger: 0.1 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20 bg-gold" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 bg-blue-soft" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-gold mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Trusted Chartered Accountants since 1998
          </div>
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Professional <span className="text-gradient-gold">Chartered Accountant</span> Services
          </h1>
          <p className="hero-sub text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Strategic financial advisory, audit, taxation and compliance solutions tailored for ambitious businesses and discerning individuals.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="hero-cta group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-soft to-gold text-primary-foreground font-semibold hover:shadow-[0_0_40px_oklch(0.82_0.13_85/0.45)] transition-all">
              Get Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="hero-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border glass text-foreground font-semibold hover:border-gold/50 transition-all">
              Our Services
            </a>
          </div>
          <div className="hero-stat grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50 max-w-md">
            {[["25+", "Years"], ["1500+", "Clients"], ["98%", "Retention"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-bold text-gradient-gold">{n}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-blue-soft/10 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden glass p-2">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80"
              alt="Professional financial advisory"
              className="rounded-2xl w-full h-[520px] object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elegant flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center text-primary-foreground font-bold">A+</div>
            <div>
              <div className="text-sm font-semibold">Top Rated Firm</div>
              <div className="text-xs text-muted-foreground">ICAI Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
