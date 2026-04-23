import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.15 },
      );
      gsap.fromTo(
        ".hero-image",
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gradient-dark"
    >
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="hero-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs uppercase tracking-[0.2em] text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Trusted Since 2005
          </div>
          <h1 className="hero-anim text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Professional <br />
            <span className="text-gradient-gold">Chartered Accountant</span>
            <br /> Services
          </h1>
          <p className="hero-anim mt-6 text-lg text-muted-foreground max-w-xl">
            Strategic financial expertise crafted for discerning businesses. From
            tax planning to audits and compliance — we deliver precision,
            integrity, and clarity at every step.
          </p>
          <div className="hero-anim mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition"
            >
              Get Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition"
            >
              Our Services
            </a>
          </div>

          <div className="hero-anim mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "20+", v: "Years" },
              { k: "1500+", v: "Clients" },
              { k: "100%", v: "Compliance" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-bold text-gradient-gold">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image relative">
          <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden glass-card shadow-elegant">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
              alt="Professional accountant reviewing financial documents"
              className="w-full h-[520px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold">
                  CA
                </div>
                <div>
                  <div className="text-sm font-semibold">Certified Excellence</div>
                  <div className="text-xs text-muted-foreground">ICAI Member Firm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
