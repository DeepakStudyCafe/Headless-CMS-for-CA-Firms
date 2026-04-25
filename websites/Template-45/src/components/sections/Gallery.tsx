import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { img: g1, label: "Our Mumbai office", span: "row-span-2" },
  { img: g2, label: "Strategy session — Q4 review" },
  { img: g3, label: "Closing a transaction" },
  { img: g4, label: "ICAI Excellence Award 2023", span: "col-span-2" },
  { img: g5, label: "Boardroom — investor briefing", span: "row-span-2" },
  { img: g6, label: "Client onboarding day" },
];

export function Gallery() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".g-item",
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.07, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: root.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={root} className="relative py-24 sm:py-32 bg-[color:var(--sky)]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)] font-medium">
              Inside the firm
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05]">
              A studio for <span className="italic text-[color:var(--wine)]">numbers</span>.
            </h2>
          </div>
          <p className="max-w-sm text-[color:var(--ink)]/70 text-sm leading-relaxed">
            Glimpses of our practice — the office, the team, the client moments and the
            recognition that has marked the journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`g-item group relative overflow-hidden rounded-3xl bg-[color:var(--ink)] ${it.span ?? ""}`}
            >
              <img
                src={it.img}
                alt={it.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-[color:var(--cream)] translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--rose)]">
                  0{i + 1}
                </div>
                <div className="mt-1 font-display text-lg">{it.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
