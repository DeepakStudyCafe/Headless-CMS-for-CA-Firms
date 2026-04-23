import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, ShieldCheck, Award, TrendingUp } from "lucide-react";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.7 })
        .from(".hero-title", { y: 40, opacity: 0, duration: 0.9 }, "-=0.4")
        .from(".hero-sub", { y: 24, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta > *", { y: 20, opacity: 0, duration: 0.6, stagger: 0.12 }, "-=0.4")
        .from(".hero-trust > *", { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.4")
        .from(".hero-image", { scale: 0.92, opacity: 0, duration: 1.1, ease: "power2.out" }, "-=1");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden gradient-hero"
    >
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-gold-soft/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-wide uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
            Trusted Chartered Accountants
          </div>

          <h1 className="hero-title mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            Professional <span className="text-gold">Chartered Accountant</span> Services
          </h1>

          <p className="hero-sub mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Comprehensive accounting, taxation, audit and advisory solutions tailored for
            businesses and individuals. We bring precision, transparency and decades of
            financial expertise to every engagement.
          </p>

          <div className="hero-cta mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
            >
              Get Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="btn-outline-gold inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold"
            >
              Our Services
            </a>
          </div>

          <div className="hero-trust mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> ICAI Certified</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> 25+ Years Experience</div>
            <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-gold" /> 1000+ Clients Served</div>
          </div>
        </div>

        <div className="hero-image relative">
          <div className="absolute -inset-4 rounded-3xl gradient-gold opacity-20 blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-gold border border-gold/20">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
              alt="Chartered Accountant reviewing financial reports"
              loading="eager"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/20 via-transparent to-transparent" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-soft hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full gradient-gold grid place-items-center text-white font-bold">CA</div>
              <div>
                <div className="text-xs text-muted-foreground">Compliance Score</div>
                <div className="text-xl font-bold text-foreground">99.8%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
