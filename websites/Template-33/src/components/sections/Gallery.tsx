import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: g1, span: "lg:col-span-2 lg:row-span-2", alt: "Team meeting" },
  { src: g2, span: "", alt: "Signing contract" },
  { src: g3, span: "", alt: "Financial documents" },
  { src: g4, span: "lg:col-span-2", alt: "Office reception" },
  { src: g5, span: "", alt: "Award ceremony" },
  { src: g6, span: "", alt: "Client consultation" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".gal-item",
        { scale: 0.94, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, stagger: 0.07, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-deep">Gallery</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight">
            Moments from <span className="gold-text italic">our practice</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(img.src)}
              className={`gal-item ${img.span} relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-luxe`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white" aria-label="Close">
            <X />
          </button>
          <img src={open} alt="Preview" className="max-w-5xl max-h-[85vh] rounded-2xl shadow-luxe object-contain" />
        </div>
      )}
    </section>
  );
}
