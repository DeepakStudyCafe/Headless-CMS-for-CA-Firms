import AnimatedStatValue from "@/components/ui/AnimatedStatValue";

export default function GalleryPageStats({ data }: { data?: any }) {
  const stats = data?.stats || [];
  if (!stats.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-outline-variant/20">
        {stats.map((stat: any, index: number) => (
          <div key={index} className="text-center">
            <AnimatedStatValue
              value={stat.value}
              className="text-4xl font-headline font-extrabold text-primary mb-2"
            />
            <div className="text-on-surface-variant font-label font-medium uppercase tracking-widest text-xs">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}



