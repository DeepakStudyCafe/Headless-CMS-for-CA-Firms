const images = [
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&q=80",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-pink-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-pink font-semibold uppercase tracking-[0.2em] text-xs">Gallery</span>
          <h2 className="text-4xl md:text-5xl text-navy font-bold mt-3 mb-4">Inside our firm</h2>
          <p className="text-muted-foreground">Glimpses of our team, workspace, and client engagements.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-xl shadow-soft group ${i % 5 === 0 ? "row-span-2" : ""}`}>
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
