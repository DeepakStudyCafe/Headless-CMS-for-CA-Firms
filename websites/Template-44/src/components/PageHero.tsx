import { Link } from "@tanstack/react-router";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="pt-40 pb-20 lg:pt-48 lg:pb-28 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-2 flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-forest-3">
          <span className="h-px w-10 bg-forest-3" />
          {eyebrow}
        </div>
        <h1 className="lg:col-span-7 font-display text-[44px] md:text-[64px] leading-[1.05] text-forest-1 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="lg:col-span-3 text-ink-soft leading-relaxed text-[15px]">{subtitle}</p>
        )}
      </div>
      <div className="mx-auto max-w-[1400px] mt-12 flex items-center gap-6 text-[11px] tracking-[0.25em] uppercase text-ink-soft">
        <Link to="/" className="hover:text-forest-3">Home</Link>
        <span className="text-forest-3">/</span>
        <span className="text-forest-2">{eyebrow}</span>
      </div>
    </section>
  );
}
