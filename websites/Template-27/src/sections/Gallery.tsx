import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Gallery</p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold text-charcoal">
            Moments from <span className="text-gradient">our journey</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <Reveal key={src} delay={i * 0.04}>
              <button
                onClick={() => setActive(src)}
                className={`group relative overflow-hidden rounded-2xl block w-full ${
                  i % 5 === 0 ? "aspect-[4/5]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button className="absolute top-6 right-6 text-white/80 hover:text-white" aria-label="Close">
            <X size={28} />
          </button>
          <img src={active} alt="Preview" className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-elegant" />
        </div>
      )}
    </section>
  );
}
