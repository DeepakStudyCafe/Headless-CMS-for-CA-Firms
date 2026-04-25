import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
      <div className="absolute top-32 right-0 h-64 w-64 bg-gradient-wine opacity-10 rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-2">
          <span className="text-xs uppercase tracking-[0.3em] text-wine">{eyebrow}</span>
        </div>
        <div className="lg:col-span-7">
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-ink">{title}</h1>
        </div>
        {intro && (
          <div className="lg:col-span-3">
            <p className="text-ink/70 leading-relaxed">{intro}</p>
          </div>
        )}
      </div>
    </section>
  );
}
