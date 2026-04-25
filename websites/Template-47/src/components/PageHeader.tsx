import { Reveal } from "@/components/Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-20 bg-mist/30 border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <Reveal>
          <div className="label-eyebrow mb-6">{eyebrow}</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] max-w-4xl text-balance">
            {title}
          </h1>
          {intro && (
            <p className="mt-8 text-foreground/70 max-w-2xl text-base md:text-lg leading-relaxed">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
