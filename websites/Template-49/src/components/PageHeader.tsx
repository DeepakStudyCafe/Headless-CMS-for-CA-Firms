import { Link } from "@tanstack/react-router";

export function PageHeader({
  eyebrow,
  title,
  intro,
  italic,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  intro?: string;
}) {
  return (
    <section className="relative pt-40 pb-20 bg-[var(--ink)] text-[var(--cream)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_30%,oklch(0.42_0.06_170/0.45),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-9">
          <div className="text-xs tracking-[0.3em] uppercase text-[var(--moss)] mb-6 flex items-center gap-3">
            <Link to="/" className="hover:text-[var(--sage)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--sage)]">{eyebrow}</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            {title} {italic && <span className="italic text-[var(--sage)]">{italic}</span>}
          </h1>
        </div>
        {intro && (
          <p className="lg:col-span-3 text-[var(--sage)]/80 text-base leading-relaxed">
            {intro}
          </p>
        )}
      </div>
      <svg className="absolute -bottom-px left-0 right-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path d="M0,32 C360,60 720,0 1440,40 L1440,60 L0,60 Z" fill="var(--cream)" />
      </svg>
    </section>
  );
}
