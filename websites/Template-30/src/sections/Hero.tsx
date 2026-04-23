import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      });
      gsap.from(".hero-img", {
        scale: 0.94,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.to(".float-shape", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-soft"
    >
      {/* Decorative shapes */}
      <div className="absolute top-24 -left-16 w-72 h-72 rounded-full bg-primary/10 blur-3xl float-shape" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-deep/10 blur-3xl float-shape" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="hero-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-primary-deep shadow-card-soft">
            <ShieldCheck size={14} className="text-primary" />
            Trusted by 500+ Businesses Across India
          </span>
          <h1 className="hero-anim mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            Professional <br />
            <span className="text-gradient-primary">Chartered Accountant</span>
            <br /> Services
          </h1>
          <p className="hero-anim mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            From tax planning to audits and business compliance — ABC & Associates delivers
            precise, reliable financial expertise that empowers your business to grow with confidence.
          </p>
          <div className="hero-anim mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground px-6 py-3.5 rounded-full font-medium shadow-elegant hover:shadow-glow transition-all"
            >
              Get Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3.5 rounded-full font-medium hover:border-primary hover:text-primary transition"
            >
              Our Services
            </a>
          </div>

          <div className="hero-anim mt-12 flex flex-wrap gap-8">
            {[
              { k: "25+", v: "Years Experience" },
              { k: "500+", v: "Happy Clients" },
              { k: "100%", v: "Compliance" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-bold text-primary-deep">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-img relative">
          <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80"
              alt="Chartered Accountant working with financial documents"
              className="w-full h-[520px] object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-elegant border border-border flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <TrendingUp className="text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">98% Client Retention</div>
              <div className="text-xs text-muted-foreground">Year over year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
