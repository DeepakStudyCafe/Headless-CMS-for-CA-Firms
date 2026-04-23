import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroPortrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from("[data-eyebrow]", { y: 14, opacity: 0, duration: 0.7 })
        .from(
          "[data-word]",
          { yPercent: 120, duration: 1.1, stagger: 0.08 },
          "-=0.3"
        )
        .from("[data-sub]", { y: 16, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(
          "[data-cta]",
          { y: 12, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.5"
        )
        .from(
          "[data-meta] > *",
          { y: 10, opacity: 0, duration: 0.5, stagger: 0.07 },
          "-=0.4"
        );

      // Right side reveal
      gsap.from("[data-portrait]", {
        opacity: 0,
        scale: 0.94,
        y: 30,
        duration: 1.4,
        ease: "expo.out",
        delay: 0.25,
      });
      gsap.from("[data-floatcard]", {
        opacity: 0,
        y: 24,
        scale: 0.9,
        duration: 1,
        ease: "expo.out",
        stagger: 0.18,
        delay: 0.7,
      });

      // Floating loops
      gsap.to("[data-float-up]", {
        y: -14,
        duration: 4.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to("[data-float-down]", {
        y: 12,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Orbiting ring
      gsap.to("[data-orbit]", {
        rotate: 360,
        duration: 28,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });

      // Drifting blobs
      gsap.to("[data-blob-a]", {
        x: 30,
        y: -24,
        duration: 12,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to("[data-blob-b]", {
        x: -36,
        y: 28,
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Marquee
      const marquee = root.current?.querySelector("[data-marquee-track]");
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  const words = ["Trusted Financial", "Experts for Modern", "Businesses."];

  return (
    <section
      id="home"
      ref={root}
      className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden"
    >
      {/* Layered background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--cream) 90%, white) 0%, var(--background) 60%, color-mix(in oklab, var(--gold) 6%, var(--background)) 100%)",
        }}
      />
      <div
        data-blob-a
        className="absolute top-[-180px] right-[-160px] h-[560px] w-[560px] rounded-full opacity-70 blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, color-mix(in oklab, var(--gold) 60%, transparent), transparent 70%)",
        }}
      />
      <div
        data-blob-b
        className="absolute bottom-[-200px] left-[-180px] h-[600px] w-[600px] rounded-full opacity-60 blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(circle at 60% 50%, color-mix(in oklab, var(--primary) 40%, transparent), transparent 70%)",
        }}
      />
      {/* Fine mesh */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 35%, black 40%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7 text-left">
            <div
              data-eyebrow
              className="inline-flex items-center gap-3 rounded-full glass ring-1 ring-border pl-1.5 pr-4 py-1.5 text-xs font-medium tracking-wider uppercase shadow-luxe"
            >
              <span className="rounded-full bg-primary text-primary-foreground px-2.5 py-0.5 text-[10px] tracking-widest">
                NEW
              </span>
              <span className="text-muted-foreground">
                FY 2025 · Tax planning window now open
              </span>
              <span className="text-gold">→</span>
            </div>

            <h1 className="mt-8 font-display text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              {words.map((w, i) => (
                <span key={i} className="block overflow-hidden">
                  <span data-word className="inline-block pb-1">
                    {i === 2 ? (
                      <span className="relative italic">
                        <span className="gradient-text-gold">{w}</span>
                        <svg
                          className="absolute left-0 -bottom-2 w-full"
                          viewBox="0 0 300 12"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M2 8 C 80 2, 220 2, 298 8"
                            stroke="var(--gold)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    ) : (
                      w
                    )}
                  </span>
                </span>
              ))}
            </h1>

            <p
              data-sub
              className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              ABC & Associates partners with founders, enterprises and HNIs to
              deliver audit, tax and advisory excellence — quietly precise,
              uncompromisingly modern.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                data-cta
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium shadow-luxe transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_22px_50px_-12px_color-mix(in_oklab,var(--gold)_55%,transparent)]"
              >
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(120deg, color-mix(in oklab, var(--gold) 32%, transparent), transparent)",
                  }}
                />
                <span className="relative">Get Consultation</span>
                <span className="relative text-gold transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                data-cta
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium ring-1 ring-border bg-card/70 backdrop-blur hover:ring-gold hover:bg-card transition-all duration-300"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-ink text-[10px] group-hover:bg-gold/20 transition">
                  ▶
                </span>
                View Services
              </a>
            </div>

            {/* Meta strip */}
            <div
              data-meta
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
            >
              {[
                { v: "20+", k: "Years of practice" },
                { v: "1.2k", k: "Active clients" },
                { v: "₹4B+", k: "Assets audited" },
                { v: "100%", k: "Compliance rate" },
              ].map((m) => (
                <div key={m.k} className="border-l border-border pl-4">
                  <div className="font-display text-2xl">{m.v}</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — portrait + floating glass cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md aspect-[4/5]">
              {/* Orbiting ring */}
              <div
                data-orbit
                className="absolute -inset-8 rounded-full opacity-50"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, color-mix(in oklab, var(--gold) 70%, transparent) 80deg, transparent 160deg, color-mix(in oklab, var(--primary) 50%, transparent) 240deg, transparent 320deg)",
                  mask: "radial-gradient(circle, transparent 58%, black 60%, black 64%, transparent 66%)",
                  WebkitMask:
                    "radial-gradient(circle, transparent 58%, black 60%, black 64%, transparent 66%)",
                }}
              />

              {/* Glow */}
              <div
                className="absolute inset-4 rounded-[2.5rem] blur-3xl opacity-70"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--gold) 45%, transparent), color-mix(in oklab, var(--primary) 35%, transparent))",
                }}
              />

              {/* Portrait card */}
              <div
                data-portrait
                data-float-up
                className="absolute inset-0 rounded-[2rem] overflow-hidden ring-1 ring-border shadow-luxe"
              >
                <img
                  src={heroPortrait}
                  alt="Senior chartered accountant at ABC & Associates"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
                {/* Bottom gradient */}
                <div
                  className="absolute inset-x-0 bottom-0 h-2/5"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, color-mix(in oklab, var(--ink) 80%, transparent))",
                  }}
                />
                {/* Inner badge */}
                <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between">
                  <div className="text-cream">
                    <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">
                      Managing Partner
                    </div>
                    <div className="font-display text-xl mt-1">
                      CA. Rohan Mehta, FCA
                    </div>
                  </div>
                  <div className="rounded-full glass-dark text-cream text-[10px] uppercase tracking-widest px-3 py-1.5 ring-1 ring-white/10">
                    ICAI · 2004
                  </div>
                </div>
              </div>

              {/* Floating: Rating card */}
              <div
                data-floatcard
                data-float-down
                className="absolute -top-6 -left-8 sm:-left-14 w-56 rounded-2xl glass ring-1 ring-border shadow-luxe p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Client Rating
                  </div>
                  <div className="text-[10px] text-emerald-600 font-medium">
                    Verified
                  </div>
                </div>
                <div className="mt-1.5 flex items-baseline gap-2">
                  <div className="font-display text-3xl">4.9</div>
                  <div className="text-gold text-sm tracking-tight">
                    ★★★★★
                  </div>
                </div>
                <div className="mt-2 text-[11px] text-muted-foreground">
                  Based on 842 reviews
                </div>
              </div>

              {/* Floating: Mini KPI */}
              <div
                data-floatcard
                data-float-up
                className="absolute -bottom-8 -right-6 sm:-right-12 w-60 rounded-2xl glass ring-1 ring-border shadow-luxe p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Tax Saved · YTD
                  </div>
                  <div className="text-[10px] font-medium text-emerald-600">
                    LIVE
                  </div>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <div className="font-display text-2xl">₹ 38.2 L</div>
                  <div className="text-[11px] text-emerald-600">+24%</div>
                </div>
                <div className="mt-3 flex items-end gap-1 h-8">
                  {[3, 5, 4, 7, 6, 9, 8, 11].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h * 8}%`,
                        background:
                          i === 7
                            ? "linear-gradient(180deg, var(--gold), var(--gold-soft))"
                            : "color-mix(in oklab, var(--primary) 25%, transparent)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating mini badge */}
              <div
                data-floatcard
                data-float-down
                className="absolute top-1/3 -right-4 sm:-right-10 flex items-center gap-2 rounded-full glass ring-1 ring-border px-3 py-2 shadow-luxe"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-medium">
                  Compliance 100%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="mt-20 sm:mt-24">
          <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground text-center">
            Trusted by industry leaders
          </div>
          <div
            className="mt-6 relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div
              data-marquee-track
              className="flex gap-14 whitespace-nowrap will-change-transform"
            >
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex gap-14 items-center shrink-0">
                  {[
                    "ASHFORD",
                    "MERIDIAN",
                    "NORTHWIND",
                    "VANTAGE",
                    "HELIOS",
                    "ORBIT CAP",
                    "STERLING",
                    "AURUM",
                  ].map((b) => (
                    <span
                      key={`${dup}-${b}`}
                      className="font-display text-2xl tracking-[0.25em] text-ink/40 hover:text-ink transition-colors"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
