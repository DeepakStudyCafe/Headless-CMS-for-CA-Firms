import { useGsapReveal } from "@/hooks/useGsapReveal";

const images = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80", alt: "Modern office interior", span: "lg:col-span-2 lg:row-span-2" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80", alt: "Team meeting" },
  { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80", alt: "Financial documents" },
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80", alt: "Strategy session" },
  { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&q=80", alt: "Workspace" },
  { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=700&q=80", alt: "Client meeting" },
  { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&q=80", alt: "Boardroom discussion" },
];

export function Gallery() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section id="gallery" ref={ref as never} className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div data-reveal className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
            Inside ABC
          </div>
          <h2 data-reveal className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Glimpses of our <span className="italic text-gradient-gold">workspace &amp; people</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              data-reveal
              className={`group relative overflow-hidden rounded-2xl ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}