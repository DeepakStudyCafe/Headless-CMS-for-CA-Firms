import AnimatedStatValue from "@/components/ui/AnimatedStatValue";

export default function TeamPageBento({ data }: { data?: any }) {
  const leaders = data?.leaders || data?.items || [];
  if (!leaders.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Principal Partner */}
        {leaders[0] && (
          <div className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest transition-transform duration-300 hover:-translate-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="relative h-96 md:h-full overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={leaders[0].name} src={leaders[0].image} />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-secondary font-bold tracking-widest text-xs uppercase">{leaders[0].role}</span>
                </div>
                <h2 className="text-4xl font-headline font-bold text-primary mb-2">{leaders[0].name}</h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">{leaders[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(leaders[0].tags) && leaders[0].tags.map((tag: string, index: number) => (
                    <span key={index} className="bg-surface-container px-3 py-1 rounded-lg text-xs font-semibold text-primary">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partner 2 */}
        {leaders[1] && (
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={leaders[1].name} src={leaders[1].image} />
            </div>
            <div className="p-8">
              <span className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-2 block">{leaders[1].role}</span>
              <h3 className="text-2xl font-headline font-bold text-primary mb-2">{leaders[1].name}</h3>
              <p className="text-sm text-on-surface-variant mb-6">{leaders[1].description}</p>
              <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                <span className="text-xs font-bold text-primary">{leaders[1].footerRole}</span>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">mail</span>
                  <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">share</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partner 3 */}
        {leaders[2] && (
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={leaders[2].name} src={leaders[2].image} />
            </div>
            <div className="p-8">
              <span className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-2 block">{leaders[2].role}</span>
              <h3 className="text-2xl font-headline font-bold text-primary mb-2">{leaders[2].name}</h3>
              <p className="text-sm text-on-surface-variant mb-6">{leaders[2].description}</p>
              <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                <span className="text-xs font-bold text-primary">{leaders[2].footerRole}</span>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">mail</span>
                  <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">share</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partner 4 */}
        {leaders[3] && (
          <div className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest transition-transform duration-300 hover:-translate-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="p-10 flex flex-col justify-center order-2 md:order-1">
                <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">{leaders[3].role}</span>
                <h2 className="text-4xl font-headline font-bold text-primary mb-2">{leaders[3].name}</h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">{leaders[3].description}</p>
                {Array.isArray(leaders[3].stats) && leaders[3].stats.length > 0 && (
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <AnimatedStatValue
                        value={leaders[3].stats[0]?.value || "10+"}
                        className="text-2xl font-bold text-primary"
                      />
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">{leaders[3].stats[0]?.label || "Years"}</span>
                    </div>
                    {leaders[3].stats[1] && (
                      <>
                        <div className="w-[1px] bg-outline-variant/30 h-10 self-center"></div>
                        <div className="flex flex-col">
                          <AnimatedStatValue
                            value={leaders[3].stats[1]?.value || "100+"}
                            className="text-2xl font-bold text-primary"
                          />
                          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">{leaders[3].stats[1]?.label || "Clients"}</span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
              <div className="relative h-96 md:h-full overflow-hidden order-1 md:order-2">
                <img className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={leaders[3].name} src={leaders[3].image} />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}



