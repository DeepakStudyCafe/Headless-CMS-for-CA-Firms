import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { img: g1, label: "Advisory in session", span: "md:col-span-5 md:row-span-2" },
  { img: g2, label: "Year-end close", span: "md:col-span-3" },
  { img: g6, label: "Bengaluru office", span: "md:col-span-4" },
  { img: g3, label: "Quarterly partners' review", span: "md:col-span-4" },
  { img: g4, label: "Closing the deal", span: "md:col-span-4" },
  { img: g5, label: "MIS & dashboards", span: "md:col-span-4" },
];

export function Gallery() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-gal]", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={root} className="relative py-28 md:py-40 bg-cream/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              (05) — Inside the Studio
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl text-balance">
              A look around the practice.
            </h2>
          </div>
          <p className="text-foreground/70 max-w-sm">
            Offices, off-sites, audit rooms and the occasional moment that
            says more than a brochure can.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              data-gal
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 p-5 text-background text-sm tracking-widest uppercase">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
