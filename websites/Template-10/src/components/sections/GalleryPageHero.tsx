export default function GalleryPageHero({ data }: { data?: any }) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary-container p-12 md:p-20 flex flex-col items-center text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(135deg, #000f22 0%, #0a2540 100%)" }}></div>
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
            {data?.badge || "Visual Journey"}
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-white mb-6 tracking-tighter">
            {data?.title || "Inside Our World"}
          </h1>
          <p className="text-on-primary-container text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {data?.description || "A curated look into our professional environment, team excellence, and the milestones that define our journey in financial consultancy."}
          </p>
        </div>
      </div>
    </section>
  );
}



