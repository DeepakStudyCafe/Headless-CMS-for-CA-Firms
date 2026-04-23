import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
];

export function Gallery() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-tile]", {
        opacity: 0,
        scale: 0.9,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={root} className="relative py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="text-gold">◆</span> Gallery
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Inside the practice.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">A glimpse of the people, places and small rituals that shape how we work.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div
              key={src}
              data-tile
              className={`relative overflow-hidden rounded-3xl ring-1 ring-border shadow-luxe ${
                i === 0 ? "md:row-span-2 md:col-span-2 aspect-[4/5] md:aspect-auto" : "aspect-square"
              }`}
            >
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
