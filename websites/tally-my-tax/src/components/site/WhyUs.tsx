import { getImageUrl } from '@/lib/api';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function WhyUs({ data }: { data?: any }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-why-item]", {
        x: -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  if (!data) return null;

  const heading = data.textContent?.heading || "Why Choose Us";
  const title = data.textContent?.title || "A partner who is truly invested in your growth";
  const description = data.textContent?.description || "";
  const items = data.textContent?.items || [];
  const imageUrl = data.imageUrl || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80";

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{heading}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {title.split(' ').map((word: string, i: number, arr: any) => {
              if (i === arr.length - 1 || i === arr.length - 2) {
                 return <span key={i} className="text-gradient"> {word}</span>;
              }
              return <span key={i}> {word}</span>;
            })}
          </h2>
          <p className="mt-5 text-muted-foreground">
            {description}
          </p>

          <ul className="mt-8 space-y-5">
            {items.map((p: any) => (
              <li key={p.title || p.t} data-why-item className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 grid place-items-center text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{p.title || p.t}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{p.description || p.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-primary opacity-15 rounded-[2rem] blur-3xl" />
          <img
            src={getImageUrl(imageUrl)}
            alt="Business professional reviewing analytics"
            loading="lazy"
            className="relative rounded-3xl shadow-glow w-full object-cover h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}

