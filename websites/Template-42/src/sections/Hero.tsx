import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "@/assets/hero.jpg";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-fade]", {
        y: 24,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });
      gsap.from("[data-hero-bar]", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.4,
        ease: "power3.out",
        delay: 0.4,
      });
      const onScroll = () => {
        if (!bg.current) return;
        const y = window.scrollY * 0.25;
        bg.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Parallax background */}
      <div
        ref={bg}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay using brand palette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--cream) 70%, transparent) 0%, color-mix(in oklab, var(--sky) 35%, transparent) 50%, color-mix(in oklab, var(--primary) 55%, transparent) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pt-40 md:pt-48 pb-24 min-h-screen flex flex-col">
        <div className="flex items-center gap-4" data-hero-fade>
          <span className="inline-block h-px w-10 bg-foreground/40" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/70">
            Est. 2003 · Chartered Accountants
          </span>
        </div>

        <div className="mt-auto max-w-4xl">
          <div className="glass rounded-3xl p-8 md:p-12 border border-white/40 shadow-[0_30px_80px_-30px_rgba(30,41,59,0.25)]">
            <h1
              data-hero-fade
              className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground text-balance"
            >
              Reliable financial guidance{" "}
              <span className="italic text-primary">for growing</span> businesses.
            </h1>
            <p
              data-hero-fade
              className="mt-6 text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed"
            >
              A boutique chartered accountancy practice helping founders, family
              businesses and enterprises navigate tax, audit and advisory with
              clarity, candour and care.
            </p>
            <div data-hero-fade className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Explore our practice
              </a>
              <a
                href="#query"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 text-sm hover:bg-foreground/5 transition-colors"
              >
                Speak with an advisor
              </a>
            </div>
            <div data-hero-bar className="mt-10 h-px bg-foreground/15" />
            <div className="mt-6 grid grid-cols-3 gap-6 text-foreground" data-hero-fade>
              {[
                ["22+", "Years in practice"],
                ["480+", "Clients served"],
                ["14", "Industries covered"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-display text-2xl md:text-3xl">{k}</div>
                  <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 text-foreground/60 text-xs tracking-widest uppercase">
          <ArrowDown className="h-4 w-4 animate-bounce" /> Scroll to discover
        </div>
      </div>
    </section>
  );
}
