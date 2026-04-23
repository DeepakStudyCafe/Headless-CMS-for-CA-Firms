import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
];

export function Gallery() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".g-item", {
        scale: 0.9, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={root} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Gallery</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            Inside our <span className="text-gradient-primary">workspace</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(src)}
              className={`g-item relative overflow-hidden rounded-2xl group border border-border shadow-card-soft ${
                i === 0 ? "lg:row-span-2 lg:h-full h-72" : "h-72"
              }`}
            >
              <img src={src} alt="" loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary-deep/0 group-hover:bg-primary-deep/30 transition" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={() => setActive(null)}
        >
          <button className="absolute top-5 right-5 text-white p-2" aria-label="Close">
            <X size={28} />
          </button>
          <img src={active} alt="" className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-elegant" />
        </div>
      )}
    </section>
  );
}
