import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-fade", {
        y: 24,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });
      gsap.from(".hero-rule", { scaleX: 0, transformOrigin: "left", duration: 1.2, delay: 0.4, ease: "power3.out" });

      const onScroll = () => {
        if (!imgRef.current) return;
        const y = window.scrollY * 0.25;
        gsap.to(imgRef.current, { y, duration: 0.6, ease: "power2.out", overwrite: true });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-[100svh] overflow-hidden bg-forest-1 text-cream">
      <img
        ref={imgRef}
        src={heroImg}
        alt="Modern accountant's office at dusk"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-[115%] object-cover scale-105"
      />
      <div className="absolute inset-0 vignette-forest" />
      <div className="absolute inset-0 grain" />

      {/* Editorial frame */}
      <div className="absolute inset-6 lg:inset-10 border border-cream/15 pointer-events-none" />

      {/* Top metadata */}
      <div className="absolute top-28 left-6 lg:left-10 right-6 lg:right-10 flex justify-between text-[10px] tracking-[0.3em] uppercase text-cream/60 hero-fade">
        <span>Est. 1998 — New Delhi</span>
        <span className="hidden md:inline">Vol. 27 / Issue 04</span>
      </div>

      {/* Main composition */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 min-h-[100svh] flex flex-col justify-center pt-24">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-1 hidden lg:flex flex-col gap-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
            <span>01</span>
            <span className="h-16 w-px bg-cream/30" />
            <span>CA</span>
          </div>

          <div className="lg:col-span-8">
            <p className="hero-fade text-[11px] tracking-[0.35em] uppercase text-forest-4 mb-8">
              — A Boutique Practice
            </p>
            <h1 className="hero-fade font-display text-[44px] md:text-[68px] lg:text-[84px] leading-[1.02] text-cream text-balance">
              Reliable financial<br />
              guidance for<br />
              <em className="not-italic text-forest-4">growing businesses.</em>
            </h1>
            <div className="hero-rule mt-10 h-px w-40 bg-cream/40" />
          </div>

          <div className="lg:col-span-3 hero-fade">
            <div className="backdrop-blur-md bg-cream/8 border border-cream/15 p-7">
              <p className="text-[14px] leading-relaxed text-cream/85">
                Audit, taxation, and advisory — delivered with a craftsman's attention by a team of chartered accountants who treat your numbers like their own.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 mt-6 text-[11px] tracking-[0.3em] uppercase text-cream border-b border-cream/40 pb-1 hover:border-forest-4 hover:text-forest-4 transition-colors"
              >
                Our Services →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="hero-fade absolute bottom-12 left-6 lg:left-10 right-6 lg:right-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-cream/15">
          {[
            ["27+", "Years of practice"],
            ["480", "Active clients"],
            ["12", "Specialist partners"],
            ["100%", "Compliance record"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-2xl md:text-3xl text-cream">{k}</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-cream/50 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
