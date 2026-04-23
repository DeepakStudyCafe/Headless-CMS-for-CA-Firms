import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=700&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80",
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gal-item", {
        opacity: 0, scale: 0.9, duration: 0.6, stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section id="gallery" ref={ref} className="py-28 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">Gallery</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Inside our <span className="text-gradient-gold">firm</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((src, i) => (
            <div key={i} className="gal-item group relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
