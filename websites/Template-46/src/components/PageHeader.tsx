import { Reveal } from "./Reveal";

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
    <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, color-mix(in oklab, var(--sage-light) 35%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-10">
          <Reveal delay={0.1}>
            <h1 className="font-display text-balance text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="editorial-rule" />
      </div>
    </section>
  );
}
