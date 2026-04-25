import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 bg-gradient-to-br from-navy via-navy-deep to-[oklch(0.38_0.06_232)] text-cream-soft">
      <div className="blob bg-blue/45 w-[500px] h-[500px] -top-40 -right-32" />
      <div className="blob bg-blue-light/30 w-[420px] h-[420px] bottom-[-200px] -left-24" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="eyebrow !text-blue-light mb-6">{eyebrow}</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-4xl text-cream-soft">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg text-cream/75 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* curved divider */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-[60px] text-background" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden>
        <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
