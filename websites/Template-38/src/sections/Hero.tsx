import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ArrowRight, PhoneCall } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export default function Hero() {
  const root = useRef<HTMLDivElement | null>(null);
  const bg = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-h-eyebrow]", { y: 20, opacity: 0, duration: 0.7 })
        .from("[data-h-title]", { y: 40, opacity: 0, duration: 1 }, "-=0.4")
        .from("[data-h-sub]", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from("[data-h-cta]", { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.5")
        .from("[data-h-stat]", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4");

      if (bg.current) {
        gsap.to(bg.current, {
          scale: 1.12,
          duration: 14,
          ease: "none",
          yoyo: true,
          repeat: -1,
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div
        ref={bg}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/60 via-transparent to-transparent" />

      <div className="container-x relative z-10 pt-32 pb-20 text-white">
        <div className="max-w-3xl">
          <span
            data-h-eyebrow
            className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[color:var(--cream)]/90 border border-white/25 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-soft)]" />
            Trusted Since 1998
          </span>

          <h1
            data-h-title
            className="font-display mt-6 text-4xl sm:text-5xl lg:text-7xl leading-[1.05] font-semibold"
          >
            Professional Chartered <br className="hidden md:block" />
            <span className="italic text-[color:var(--cream)]">Accountant</span> Services
          </h1>

          <p data-h-sub className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed">
            Strategic tax, audit and advisory expertise that protects your numbers and powers your
            growth. Trusted by founders, family businesses and global corporations alike.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              data-h-cta
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium"
            >
              <PhoneCall className="h-4 w-4" /> Get Consultation
            </Link>
            <Link
              to="/services"
              data-h-cta
              className="btn-outline inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium backdrop-blur-sm"
            >
              Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "25+", v: "Years of Practice" },
              { k: "1500+", v: "Clients Served" },
              { k: "100%", v: "Compliance Rate" },
            ].map((s) => (
              <div key={s.k} data-h-stat className="border-l-2 border-[color:var(--brand-soft)] pl-4">
                <div className="font-display text-3xl text-white">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
