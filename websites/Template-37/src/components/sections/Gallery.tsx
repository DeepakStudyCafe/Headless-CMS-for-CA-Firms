import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=900&q=80",
];

export default function Gallery() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gal-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
        },
      );
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={root} className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Gallery</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Moments of <span className="text-gradient-gold">excellence</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(src)}
              className={`gal-item group relative overflow-hidden rounded-2xl gold-border-glow ${
                i === 0 ? "lg:row-span-2 lg:h-[520px]" : "h-64"
              }`}
            >
              <img
                src={src}
                alt="Firm gallery"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in"
          onClick={() => setActive(null)}
        >
          <button className="absolute top-6 right-6 text-primary" aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <img
            src={active}
            alt="Preview"
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-elegant"
          />
        </div>
      )}
    </section>
  );
}
