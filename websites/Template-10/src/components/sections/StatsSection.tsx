import AnimatedStatValue from "@/components/ui/AnimatedStatValue";

interface StatsSectionProps { data?: any; }
export default function StatsSection({ data }: StatsSectionProps) {
  if (!data) return null;
  const stats = data.stats || [];

  if (stats.length === 0) return null;

  return (
    <section className="py-12 md:py-20 bg-primary text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
        {stats.map((stat:any, index:number) => (
          <div key={index}>
            <AnimatedStatValue
              value={stat.value}
              className="text-4xl md:text-5xl font-headline font-extrabold text-secondary-fixed-dim mb-2"
            />
            <div className="text-xs uppercase tracking-widest font-bold opacity-60">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
