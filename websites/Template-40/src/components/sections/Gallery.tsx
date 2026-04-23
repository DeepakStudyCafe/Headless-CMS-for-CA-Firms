import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", alt: "Modern office interior", span: "lg:col-span-2 lg:row-span-2" },
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80", alt: "Team meeting" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80", alt: "Financial discussion" },
  { src: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=600&q=80", alt: "Auditing documents" },
  { src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80", alt: "Client consultation" },
  { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80", alt: "Strategic planning", span: "lg:col-span-2" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".gal-item",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Our gallery</div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-5">
            A glimpse into our <span className="text-gradient-maroon">workspace &amp; culture</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gal-item group relative rounded-2xl overflow-hidden shadow-card ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
                <div className="text-primary-foreground font-medium text-sm">{img.alt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
