import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Sparkles, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(".hero-word", {
        y: 70, opacity: 0, duration: 1, stagger: 0.07, ease: "power4.out", delay: 0.1,
      });
      gsap.from(".hero-sub", { y: 20, opacity: 0, duration: 0.8, delay: 0.6, ease: "power3.out" });
      gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, delay: 0.8, stagger: 0.1, ease: "power3.out" });
      gsap.from(".hero-visual", { scale: 0.92, opacity: 0, duration: 1.2, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-float", { y: 30, opacity: 0, duration: 0.9, delay: 1, stagger: 0.15, ease: "power3.out" });
      gsap.from(".hero-card", { y: 40, opacity: 0, duration: 1, delay: 0.9, stagger: 0.12, ease: "power3.out" });
      gsap.to(".hero-blob-1", { y: 30, x: 20, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-blob-2", { y: -25, x: -15, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-orbit", { rotate: 360, duration: 40, repeat: -1, ease: "none", transformOrigin: "center" });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Decorative blobs */}
      <div className="hero-blob-1 absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-60 blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.92 0.08 80), transparent 70%)" }} />
      <div className="hero-blob-2 absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.88 0.04 250), transparent 70%)" }} />
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
              Chartered Accountants · Est. 1998
            </div>

            <h1 className="mt-7 font-display text-5xl sm:text-6xl lg:text-[5.25rem] leading-[0.95] tracking-tight">
              <span className="hero-word inline-block">Precision</span>{" "}
              <span className="hero-word inline-block">in</span>{" "}
              <span className="hero-word inline-block">numbers,</span>
              <br />
              <span className="hero-word inline-block italic gold-text">integrity</span>{" "}
              <span className="hero-word inline-block">in</span>{" "}
              <span className="hero-word inline-block">advice.</span>
            </h1>

            <p className="hero-sub mt-7 max-w-xl text-lg text-muted-foreground">
              ABC &amp; Associates partners with founders, family offices and global enterprises to navigate
              audit, tax and advisory with quiet confidence.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#contact" className="hero-cta btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                Book a consultation <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#services" className="hero-cta inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold hover:bg-card transition-colors">
                Explore services
              </a>
            </div>

            <div className="hero-cta mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--gold)]" />
                ICAI registered partners
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-[var(--gold)]" />
                4.9 / 5 client satisfaction
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative">
            <div className="hero-visual relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[var(--gold-soft)] via-transparent to-transparent blur-2xl opacity-70" />
              <div className="hero-orbit absolute -top-6 -left-6 h-24 w-24 rounded-full border border-dashed border-[var(--gold)]/40" />
              <div className="relative rounded-[2.25rem] overflow-hidden ring-gold border border-border bg-card shadow-[0_40px_80px_-30px_rgba(15,23,42,0.35)]">
                <img
                  src="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?auto=format&fit=crop&w=1200&q=80"
                  alt="Chartered accountant reviewing financial reports"
                  loading="eager"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              {/* Floating chips */}
              <div className="hero-float absolute -left-6 top-10 sm:-left-10 rounded-2xl bg-card/95 backdrop-blur border border-border shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--gold-soft)] to-[var(--cream)] ring-gold flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Audit ready</div>
                  <div className="text-sm font-semibold">SOX & IFRS</div>
                </div>
              </div>

              <div className="hero-float absolute -right-4 bottom-12 sm:-right-8 rounded-2xl bg-card/95 backdrop-blur border border-border shadow-xl px-4 py-3">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Annual audit</div>
                <div className="font-display text-2xl gold-text">₹4,500 Cr</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { k: "26+", v: "Years of practice" },
            { k: "1,200+", v: "Clients served" },
            { k: "₹4,500 Cr", v: "Audited annually" },
            { k: "98%", v: "Retention rate" },
          ].map((s) => (
            <div key={s.v} className="hero-card card-luxe p-6 text-center">
              <div className="font-display text-3xl sm:text-4xl gold-text">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
