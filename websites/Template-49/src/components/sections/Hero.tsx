import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", { y: 30, opacity: 0, duration: 1.2, ease: "power3.out", stagger: 0.12, delay: 0.2 });
      gsap.from(".hero-meta", { opacity: 0, y: 20, duration: 1, delay: 0.9, stagger: 0.1 });
      if (bg.current) {
        gsap.to(bg.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-[100svh] overflow-hidden">
      <div ref={bg} className="absolute inset-0 -top-10 -bottom-20">
        <img
          src={heroImg}
          alt="Modern accounting studio interior"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/70 via-[var(--ink)]/55 to-[var(--ink)]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_40%,oklch(0.42_0.06_170/0.5),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-40 lg:pt-48 pb-24 grid lg:grid-cols-12 gap-10 min-h-[100svh] items-end">
        <div className="lg:col-span-8">
          <div className="hero-meta inline-flex items-center gap-3 mb-8 text-[var(--sage)] text-xs tracking-[0.3em] uppercase">
            <span className="h-px w-10 bg-[var(--moss)]" />
            Est. 1998 · Bengaluru
          </div>
          <h1 className="font-display text-[var(--cream)] text-balance text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.02]">
            <span className="hero-line block">Reliable financial</span>
            <span className="hero-line block italic text-[var(--sage)]">guidance</span>
            <span className="hero-line block">for growing businesses.</span>
          </h1>

          <div className="mt-10 max-w-xl backdrop-blur-md bg-[var(--ink)]/30 border border-[var(--moss)]/30 rounded-2xl p-6 hero-meta">
            <p className="text-[var(--sage)] text-base leading-relaxed">
              ABC &amp; Associates is a boutique chartered accountancy practice partnering
              with founders, family enterprises and listed companies — quietly, precisely,
              and for the long term.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 hero-meta">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--cream)] text-[var(--ink)] px-7 py-3.5 text-sm hover:bg-[var(--sage)] transition-colors"
            >
              Schedule a consultation <span aria-hidden>→</span>
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--sage)]/40 text-[var(--cream)] px-7 py-3.5 text-sm hover:border-[var(--sage)] transition-colors"
            >
              Our practice areas
            </a>
          </div>
        </div>

        <aside className="lg:col-span-4 hero-meta lg:pb-2">
          <div className="grid grid-cols-2 gap-px bg-[var(--moss)]/30 rounded-2xl overflow-hidden border border-[var(--moss)]/30">
            {[
              ["27+", "Years of practice"],
              ["480", "Active clients"],
              ["12", "Industries served"],
              ["100%", "ICAI compliant"],
            ].map(([k, v]) => (
              <div key={v} className="bg-[var(--ink)]/60 backdrop-blur-md p-5">
                <div className="font-display text-3xl text-[var(--cream)]">{k}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--sage)]/80 mt-1">{v}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="absolute bottom-0 inset-x-0 overflow-hidden border-t border-[var(--moss)]/20 bg-[var(--ink)]/40 backdrop-blur">
        <div className="marquee flex gap-12 whitespace-nowrap py-3 text-[var(--sage)]/70 text-xs tracking-[0.3em] uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {["Audit & Assurance", "Direct Tax", "Indirect Tax · GST", "Transfer Pricing", "Virtual CFO", "FEMA & RBI", "Insolvency", "Corporate Law"].map((t) => (
                <span key={t}>◇ &nbsp; {t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
