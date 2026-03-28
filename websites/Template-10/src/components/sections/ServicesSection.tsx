interface ServicesSectionProps { data?: any; }
export default function ServicesSection({ data }: ServicesSectionProps) {
  if (!data) return null;
  const services = data.services || data.items || [];
  if (services.length < 4) return null; // Expected 4 services for layout

  const service = (index: number) => services[index] || {};

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold text-primary tracking-tight mb-4">{data.heading || data.title}</h2>
          {data.subheading && <p className="text-on-surface-variant max-w-2xl mb-4">{data.subheading}</p>}
          <div className="h-1 w-20 bg-secondary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between group cursor-pointer transition-all hover:bg-primary hover:text-white">
            <div>
              {service(0).icon && <span className="material-symbols-outlined text-4xl mb-6 text-secondary">{service(0).icon}</span>}
              <h3 className="font-headline text-3xl font-bold mb-4">{service(0).title}</h3>
              <p className="text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">{service(0).description}</p>
            </div>
            {(service(0).linkText || data.linkText || data.cta) && (
              <div className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase mt-8">
                {service(0).linkText || data.linkText || data.cta} <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            )}
          </div>
          <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl flex items-center gap-8 group hover:bg-surface-container-lowest transition-all">
            {service(1).icon && <div className="bg-secondary-container p-4 rounded-xl"><span className="material-symbols-outlined text-3xl text-on-secondary-container">{service(1).icon}</span></div>}
            <div>
              <h3 className="font-headline text-xl font-bold mb-1">{service(1).title}</h3>
              <p className="text-sm text-on-surface-variant">{service(1).description}</p>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-center transition-all hover:bg-tertiary-fixed hover:text-on-tertiary-fixed cursor-pointer">
            {service(2).icon && <span className="material-symbols-outlined text-2xl mb-4">{service(2).icon}</span>}
            <h3 className="font-headline font-bold">{service(2).title}</h3>
          </div>
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-center transition-all hover:bg-secondary-container hover:text-on-secondary-container cursor-pointer">
            {service(3).icon && <span className="material-symbols-outlined text-2xl mb-4">{service(3).icon}</span>}
            <h3 className="font-headline font-bold">{service(3).title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
