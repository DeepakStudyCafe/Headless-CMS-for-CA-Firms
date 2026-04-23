import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-ca.jpg";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-tag", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo(".hero-title > span", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12 }, "-=0.3")
        .fromTo(".hero-sub", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
        .fromTo(".hero-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .fromTo(".hero-img", { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, "-=1")
        .fromTo(".hero-card", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.5");
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={ref} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* background shapes */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-gold-soft/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="hero-tag inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-gold-deep tracking-widest uppercase mb-6">
            <Sparkles size={14} /> Trusted Since 1998
          </div>

          <h1 className="hero-title font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink mb-6">
            <span className="block">Professional</span>
            <span className="block">Chartered</span>
            <span className="block gold-text italic">Accountant</span>
            <span className="block">Services.</span>
          </h1>

          <p className="hero-sub text-ink-soft text-lg max-w-xl mb-8 leading-relaxed">
            From precise audits and strategic tax planning to GST compliance and corporate advisory — we deliver financial clarity, regulatory confidence, and growth-driven counsel for ambitious businesses.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="hero-btn group inline-flex items-center gap-2 px-7 py-3.5 rounded-full gold-gradient text-white font-semibold shadow-luxe hover:scale-105 transition-transform">
              Get Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="hero-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ink/15 text-ink font-semibold hover:border-gold hover:text-gold transition">
              Our Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "25+", l: "Years" },
              { n: "1.2K", l: "Clients" },
              { n: "99%", l: "Accuracy" },
            ].map((s) => (
              <div key={s.l} className="hero-card">
                <div className="font-display text-3xl gold-text">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-ink-soft mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hero-img relative rounded-[2rem] overflow-hidden shadow-luxe">
            <img src={heroImg} alt="Chartered Accountant at work" width={1280} height={1280} className="w-full h-[560px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-transparent" />
          </div>
          <div className="hero-card absolute -bottom-6 -left-6 glass rounded-2xl px-6 py-4 shadow-luxe">
            <div className="text-xs uppercase tracking-widest text-ink-soft">Tax Saved</div>
            <div className="font-display text-2xl gold-text">₹ 42.7 Cr+</div>
          </div>
          <div className="hero-card absolute -top-6 -right-6 glass rounded-2xl px-6 py-4 shadow-luxe">
            <div className="text-xs uppercase tracking-widest text-ink-soft">ICAI Certified</div>
            <div className="font-display text-xl text-ink">Premium Firm</div>
          </div>
        </div>
      </div>
    </section>
  );
}
