export default function TeamPageHero({ data }: { data?: any }) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6">
            {data?.badge || "OUR LEADERSHIP"}
          </span>
          <h1 
            className="text-6xl md:text-7xl font-headline font-extrabold tracking-tighter text-primary leading-none mb-8"
            dangerouslySetInnerHTML={{ __html: data?.title || "The Architects of <span class=\"text-secondary\">Financial Integrity.</span>" }}
          />
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            {data?.description || "Meet the multidisciplinary team driving precision, transparency, and strategic growth for India's leading enterprises."}
          </p>
        </div>
        <div className="lg:col-span-4 hidden lg:block">
          <div className="p-8 bg-surface-container-low rounded-xl border-l-4 border-secondary">
            <p className="italic text-on-surface-variant font-medium">
              {data?.quote || "\"Our strength lies not just in numbers, but in the collective expertise of dedicated professionals who treat your business as their own.\""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



