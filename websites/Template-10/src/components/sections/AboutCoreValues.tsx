export default function AboutCoreValues({ data }: { data?: any }) {
  const values = data?.values || data?.items || [];
  if (!values.length) return null;

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary tracking-tight">{data?.title || data?.heading}</h2>
          {data?.subtitle && <p className="text-on-surface-variant mt-4 text-lg">{data.subtitle}</p>}
          {data?.description && <p className="text-on-surface-variant mt-4 text-lg">{data.description}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v: any, index: number) => (
            <div key={index} className="group p-8 rounded-xl bg-surface-container-lowest hover:bg-primary transition-all duration-300">
              <span className="material-symbols-outlined text-3xl text-secondary mb-6 group-hover:text-secondary-fixed-dim">
                {v.icon}
              </span>
              <h4 className="text-xl font-headline font-bold text-primary group-hover:text-white mb-4">{v.title}</h4>
              <p className="text-on-surface-variant group-hover:text-primary-fixed-dim text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



