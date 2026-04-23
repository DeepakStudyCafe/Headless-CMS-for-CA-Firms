const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">Gallery</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold">Inside our practice</h2>
          <p className="mt-4 text-muted-foreground">A glimpse into our office, team and client engagements.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div
              key={src}
              className={`group overflow-hidden rounded-2xl border border-border shadow-card ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                loading="lazy"
                alt="Gallery"
                className={`w-full object-cover group-hover:scale-105 transition duration-700 ${
                  i === 0 ? "h-full min-h-[320px]" : "h-44 md:h-56"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
