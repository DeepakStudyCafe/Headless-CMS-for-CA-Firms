import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(".hero-line", {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.1,
      });
      gsap.from(".hero-sub", { y: 24, opacity: 0, duration: 0.9, delay: 0.6, ease: "power3.out" });
      gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, delay: 0.8, stagger: 0.1, ease: "power3.out" });
      gsap.from(".hero-card", { y: 40, opacity: 0, duration: 1, delay: 1, ease: "power3.out" });
      gsap.to(".blob-1", { x: 40, y: -30, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".blob-2", { x: -50, y: 30, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });

      const onScroll = () => {
        const y = window.scrollY;
        if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0004})`;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={root} className="relative min-h-[100svh] overflow-hidden">
      {/* Background image with parallax */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <img
          src={heroImg}
          alt="Modern finance professional"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--ink)]/85 via-[color:var(--plum)]/65 to-[color:var(--ink)]/80" />
      <div className="absolute inset-0" style={{ background: "var(--grad-glow)" }} />

      {/* Floating blobs */}
      <div className="blob blob-1 -top-20 -left-20 h-72 w-72 bg-[color:var(--rose)]/60" />
      <div className="blob blob-2 bottom-10 right-10 h-96 w-96 bg-[color:var(--sky)]/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-40 pb-20 min-h-[100svh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 text-[color:var(--cream)]">
            <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--cream)]/90 mb-8">
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--rose)]" />
              Chartered Accountants · Est. 2008
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.95] text-balance">
              <span className="block overflow-hidden"><span className="hero-line block">Empowering your</span></span>
              <span className="block overflow-hidden">
                <span className="hero-line block italic font-medium">
                  financial growth
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line block">
                  with <span className="text-[color:var(--rose)]">precision.</span>
                </span>
              </span>
            </h1>

            <p className="hero-sub mt-8 max-w-xl text-base sm:text-lg text-[color:var(--cream)]/80 leading-relaxed">
              ABC & Associates is a future-forward chartered accountancy firm helping
              founders, enterprises and global investors navigate tax, audit and compliance
              with absolute clarity.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#query"
                className="hero-cta group inline-flex items-center gap-2 rounded-full bg-[color:var(--rose)] px-7 py-4 text-sm font-medium text-[color:var(--ink)] hover:bg-[color:var(--cream)] transition-colors"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="hero-cta inline-flex items-center gap-2 rounded-full glass-dark px-7 py-4 text-sm font-medium text-[color:var(--cream)] hover:bg-white/15 transition-colors"
              >
                <Play className="h-4 w-4 fill-current" />
                View Services
              </a>
            </div>
          </div>

          {/* Floating stat card */}
          <div className="lg:col-span-4 hero-card">
            <div className="glass-dark rounded-3xl p-6 text-[color:var(--cream)] shadow-[var(--shadow-luxe)]">
              <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--cream)]/70">
                A trusted partner
              </div>
              <div className="mt-4 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-4xl text-[color:var(--rose)]">17+</div>
                  <div className="text-xs text-[color:var(--cream)]/70 mt-1">Years of practice</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-[color:var(--rose)]">2.4K</div>
                  <div className="text-xs text-[color:var(--cream)]/70 mt-1">Clients served</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-[color:var(--rose)]">₹820cr</div>
                  <div className="text-xs text-[color:var(--cream)]/70 mt-1">Tax advisory handled</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-[color:var(--rose)]">12</div>
                  <div className="text-xs text-[color:var(--cream)]/70 mt-1">Cities served</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee trust bar */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/10 bg-black/20 backdrop-blur">
          <div className="flex marquee-track whitespace-nowrap py-4 text-[color:var(--cream)]/60 text-sm tracking-wider uppercase">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-12 px-12">
                <span>ICAI Certified</span><span>•</span>
                <span>FEMA Advisory</span><span>•</span>
                <span>Big-4 Trained Partners</span><span>•</span>
                <span>ISO 9001 : 2015</span><span>•</span>
                <span>SEBI Registered</span><span>•</span>
                <span>GST Suvidha Provider</span><span>•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
