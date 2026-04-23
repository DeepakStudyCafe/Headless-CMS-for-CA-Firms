import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title > span", { y: 40, opacity: 0, stagger: 0.08, duration: 0.9 }, "-=0.2")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.4")
        .from(".hero-stats > div", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.3")
        .from(".hero-img", { scale: 0.92, opacity: 0, duration: 1.2, ease: "power2.out" }, "-=1.2")
        .from(".hero-float", { y: 30, opacity: 0, stagger: 0.15, duration: 0.8 }, "-=0.8");

      gsap.to(".blob-1", { x: 30, y: -20, duration: 8, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".blob-2", { x: -25, y: 30, duration: 10, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-gradient-soft">
      <div className="blob-1 absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="blob-2 absolute top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary-glow/15 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-primary mb-6">
              <Sparkles size={14} /> Trusted by 500+ businesses across India
            </div>
            <h1 className="hero-title text-5xl lg:text-7xl font-semibold leading-[1.05] text-charcoal">
              <span className="block">Professional</span>
              <span className="block">Chartered <span className="text-gradient">Accountant</span></span>
              <span className="block">Services</span>
            </h1>
            <p className="hero-sub mt-6 text-lg text-soft-gray max-w-xl leading-relaxed">
              From strategic tax planning to seamless GST compliance and growth advisory —
              we partner with founders, enterprises and family offices to keep finance effortless and future-ready.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="hero-cta group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium shadow-elegant hover:shadow-glow transition-all"
              >
                Get Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="hero-cta inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/60 px-7 py-3.5 font-medium text-charcoal hover:border-primary hover:text-primary transition-all"
              >
                Our Services
              </Link>
            </div>

            <div className="hero-stats mt-12 grid grid-cols-3 gap-8 max-w-md">
              {[
                { v: "20+", l: "Years" },
                { v: "500+", l: "Clients" },
                { v: "1.2k+", l: "Filings" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl lg:text-3xl font-semibold text-charcoal font-display">{s.v}</p>
                  <p className="text-xs text-soft-gray mt-1 uppercase tracking-wider">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="hero-img relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5] lg:aspect-[5/6]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Chartered accountant team meeting"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
            </div>

            <div className="hero-float absolute -left-6 top-12 glass rounded-2xl p-4 shadow-soft hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-soft-gray">Compliance</p>
                  <p className="text-sm font-semibold text-charcoal">100% On time</p>
                </div>
              </div>
            </div>

            <div className="hero-float absolute -right-4 bottom-16 glass rounded-2xl p-4 shadow-soft hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-xs text-soft-gray">Tax saved</p>
                  <p className="text-sm font-semibold text-charcoal">₹ 4.2 Cr+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
