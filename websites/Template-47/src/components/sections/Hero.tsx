import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: bgRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.from(textRef.current?.children ?? [], {
        opacity: 0,
        y: 30,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.3,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 -top-12 -bottom-12 will-change-transform">
        <img
          src={heroImg}
          alt="Boutique financial advisory office at golden hour"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/45 to-primary/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-ocean/40" />

      {/* Editorial frame */}
      <div className="absolute inset-6 md:inset-10 border border-cream/15 pointer-events-none" />

      {/* Top corner mark */}
      <div className="absolute top-28 md:top-32 left-6 md:left-14 z-10 flex items-center gap-3 text-cream/70">
        <div className="w-8 h-px bg-brass" />
        <span className="text-[10px] tracking-[0.4em] uppercase">Est. 2004 · Mumbai</span>
      </div>

      {/* Content block — bottom-left editorial */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-14 pb-24 md:pb-32">
          <div ref={textRef} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8 glass px-4 py-2 text-cream/85 text-[11px] tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brass" />
              Chartered Accountants &amp; Advisors
            </div>
            <h1 className="font-display text-cream text-[2.6rem] sm:text-5xl md:text-[4.4rem] leading-[1.02] text-balance">
              Reliable financial guidance
              <span className="block italic text-brass/95 font-light"> for growing businesses.</span>
            </h1>
            <p className="mt-8 text-cream/75 max-w-xl text-base md:text-[17px] leading-relaxed font-light">
              Two decades of quiet, considered counsel — across audit, taxation, regulation
              and the everyday questions that decide where a business goes next.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-cream text-primary px-7 py-3.5 text-sm hover:bg-brass transition-colors"
              >
                Schedule a Conversation
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-3.5 text-sm hover:bg-cream/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right vertical meta */}
      <div className="hidden md:flex absolute right-14 bottom-32 z-10 flex-col items-end gap-4 text-cream/60">
        <div className="text-[10px] tracking-[0.4em] uppercase [writing-mode:vertical-rl] rotate-180">
          Audit · Tax · Advisory · CFO
        </div>
        <div className="w-px h-24 bg-cream/30" />
      </div>
    </section>
  );
}
