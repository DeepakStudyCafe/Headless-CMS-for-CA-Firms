export default function ServicesPageGrid({ data }: { data?: any }) {
  const services = data?.services || data?.items || [];
  if (!services.length) return null;

  const featured = services[0];
  const standard = services.slice(1, 5);
  const specials = services.slice(5, 7);

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            {data?.title && (
              <h2 className="text-primary font-headline font-bold text-4xl tracking-tight mb-4">
                {data.title}
              </h2>
            )}
            {data?.description && (
              <p className="text-on-surface-variant font-body text-lg leading-relaxed">
                {data.description}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <div className="h-1 w-12 bg-secondary"></div>
            <div className="h-1 w-4 bg-outline-variant"></div>
            <div className="h-1 w-4 bg-outline-variant"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Featured Service */}
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl group hover:shadow-xl transition-all duration-500 border-b-4 border-transparent hover:border-secondary flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">{featured.icon || 'menu_book'}</span>
              </div>
              <h3 className="text-primary font-headline font-bold text-2xl mb-4">{featured.title || 'Bookkeeping'}</h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-6 text-lg max-w-md">
                {featured.description || 'Real-time financial clarity through meticulous ledger management. Our automated yet human-verified processes ensure your records are always audit-ready.'}
              </p>
              {Array.isArray(featured.highlights) && featured.highlights.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {featured.highlights.slice(0, 2).map((point: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-primary">
                      <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity translate-x-1/4 translate-y-1/4">
              <span className="material-symbols-outlined text-[20rem]">{featured.icon || 'menu_book'}</span>
            </div>
            <a className="inline-flex items-center gap-2 font-bold text-secondary group-hover:underline relative z-10" href="#">
              {featured.cta || 'Learn more'} <span className="material-symbols-outlined text-sm">north_east</span>
            </a>
          </div>

          {/* Standard Services */}
          {standard.map((service: any, idx: number) => (
            <div key={service.id || service.slug || service.title || idx} className="md:col-span-4 bg-surface-container-low p-8 rounded-xl group hover:bg-primary hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 glass-effect rounded-lg flex items-center justify-center mb-6 border border-outline-variant/20 shadow-sm group-hover:bg-white/20">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary-fixed-dim text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-primary group-hover:text-white font-headline font-bold text-xl mb-4">{service.title}</h3>
              <p className="text-on-surface-variant group-hover:text-on-primary-container font-body text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              {service.tag && (
                <span className="inline-block px-3 py-1 bg-secondary/10 group-hover:bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase text-secondary group-hover:text-white">
                  {service.tag}
                </span>
              )}
              {!service.tag && idx === 0 && (
                <span className="inline-block px-3 py-1 bg-secondary/10 group-hover:bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase text-secondary group-hover:text-white">
                  Core Service
                </span>
              )}
            </div>
          ))}

          {/* Special Services blocks */}
          {specials.map((service: any, i: number) => (
            <div key={service.id || service.title || i} className={`md:col-span-6 p-10 rounded-xl relative overflow-hidden group mt-6 ${i === 0 ? 'bg-primary-container' : 'bg-tertiary-fixed'}`}>
              <div className="relative z-10">
                <h3 className={`font-headline font-bold text-2xl mb-4 ${i === 0 ? 'text-white' : 'text-on-tertiary-fixed'}`}>{service.title}</h3>
                <p className={`${i === 0 ? 'text-on-primary-container' : 'text-on-tertiary-fixed-variant'} font-body leading-relaxed mb-8 max-w-sm`}>
                  {service.description}
                </p>
                <a className={`inline-flex items-center gap-2 font-bold ${i === 0 ? 'text-secondary-fixed' : 'text-on-tertiary-fixed'}`} href="#">
                  {service.cta || "Learn More"} <span className="material-symbols-outlined text-sm">chevron_right</span>
                </a>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[12rem] text-black/5">{service.icon || 'trending_up'}</span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}



