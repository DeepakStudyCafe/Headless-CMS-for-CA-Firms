import { useRef, useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { X, ZoomIn } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, alt: "Reviewing financial reports", span: "lg:col-span-2 lg:row-span-2" },
  { src: g2, alt: "Boardroom meeting", span: "" },
  { src: g3, alt: "Awards & recognition", span: "" },
  { src: g4, alt: "Client handshake", span: "lg:col-span-2" },
  { src: g5, alt: "Accounting ledgers", span: "" },
  { src: g6, alt: "Office facade", span: "" },
];

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);
  useReveal(ref, [{ selector: ".gal-item", y: 30, stagger: 0.08 }]);

  return (
    <section ref={ref} id="gallery" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold ornament">Gallery</p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            Moments from our <span className="text-gradient-gold italic">practice</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[240px] gap-4 lg:gap-5">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setActive(it.src)}
              className={`gal-item group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 ${it.span}`}
            >
              <img src={it.src} alt={it.alt} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--maroon-deep)]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[var(--gold)]/90 text-[var(--maroon-deep)] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-left">
                {it.alt}
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div onClick={() => setActive(null)} className="fixed inset-0 z-[60] bg-[var(--maroon-deep)]/95 flex items-center justify-center p-4 sm:p-6">
          <button aria-label="Close" className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-[var(--gold)] text-[var(--maroon-deep)] flex items-center justify-center hover:scale-110 transition z-10">
            <X />
          </button>
          <img src={active} alt="" className="max-w-full max-h-full rounded-2xl shadow-elegant" />
        </div>
      )}
    </section>
  );
}
