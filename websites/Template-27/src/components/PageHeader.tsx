import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = { eyebrow?: string; title: string; subtitle?: string };

export function PageHeader({ eyebrow, title, subtitle }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".ph-eyebrow", { y: 16, opacity: 0, duration: 0.5 })
        .from(".ph-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.2")
        .from(".ph-sub", { y: 16, opacity: 0, duration: 0.6 }, "-=0.4");
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-soft">
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center relative">
        {eyebrow && (
          <p className="ph-eyebrow text-sm uppercase tracking-[0.25em] text-primary font-medium">{eyebrow}</p>
        )}
        <h1 className="ph-title mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal max-w-3xl mx-auto leading-tight">
          {title}
        </h1>
        {subtitle && <p className="ph-sub mt-5 text-lg text-soft-gray max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
