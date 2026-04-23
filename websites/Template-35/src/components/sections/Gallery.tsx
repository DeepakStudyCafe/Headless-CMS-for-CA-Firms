import { useState } from "react";
import { X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Gallery</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Inside our <span className="text-gold">firm</span>
          </h2>
          <div className="fancy-divider mx-auto mt-6" />
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setOpen(src)}
              className={`reveal relative overflow-hidden rounded-2xl group shadow-card ${
                i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/85 backdrop-blur-sm grid place-items-center p-6 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 h-11 w-11 rounded-full glass-dark grid place-items-center text-white"
            onClick={() => setOpen(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="Preview" className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-gold" />
        </div>
      )}
    </section>
  );
}
