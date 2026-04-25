import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";

const ITEMS = [
  { src: g3, label: "Headquarters — Civil Lines", className: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto" },
  { src: g2, label: "Quarterly partner review", className: "md:col-span-5 aspect-[4/3]" },
  { src: g1, label: "Audit room", className: "md:col-span-3 aspect-[3/4]" },
  { src: g4, label: "Reporting desk", className: "md:col-span-2 aspect-square" },
  { src: g5, label: "Client onboarding", className: "md:col-span-7 aspect-[16/10]" },
];

export function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gl-tile", {
        y: 60, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="gallery" className="py-32 lg:py-40 px-6 lg:px-10 bg-cream">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-2 text-[11px] tracking-[0.3em] uppercase text-forest-3">— 06</div>
          <h2 className="lg:col-span-7 font-display text-[36px] md:text-[56px] leading-[1.05] text-forest-1 text-balance">
            A look inside the practice.
          </h2>
          <p className="lg:col-span-3 text-ink-soft leading-relaxed lg:pt-4">
            Quiet rooms, careful work. A glimpse of where, and how, we spend our days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {ITEMS.map((it, i) => (
            <figure
              key={i}
              className={`gl-tile relative overflow-hidden group bg-forest-2 ${it.className}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest-1/0 group-hover:bg-forest-1/40 transition-colors duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-cream translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[10px] tracking-[0.3em] uppercase text-forest-4">0{i + 1}</div>
                <div className="font-display text-lg mt-1">{it.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
