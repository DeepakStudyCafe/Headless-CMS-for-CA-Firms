import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import { getImageUrl } from "@/lib/api";

gsap.registerPlugin(ScrollTrigger);

export function About({ data }: { data?: any }) {
  const ref = useRef<HTMLElement>(null);

  if (!data) return null;

  const heading = data.textContent?.heading || "About Us";
  const title = data.textContent?.title || "Building financial confidence with precision & trust";
  const description = data.textContent?.description || "";
  let stats = data.textContent?.stats || [];
  let features = data.textContent?.features || [
    "ICAI-registered partners with 15+ years of experience",
    "Integrated tax, audit, and advisory under one roof",
    "Proactive compliance with personalised attention",
  ];

  // Fix backwards compatibility with old seed scripts that mapped stats into features
  if (features.length > 0 && typeof features[0] === 'object') {
    stats = features;
    features = [
      "ICAI-registered partners with 15+ years of experience",
      "Integrated tax, audit, and advisory under one roof",
      "Proactive compliance with personalised attention",
    ];
  }

  const imageUrl = data.imageUrl || "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = Number(el.dataset.counter);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.floor(obj.v).toLocaleString();
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-primary opacity-10 rounded-3xl blur-2xl" />
          <img
            src={getImageUrl(imageUrl)}
            alt="Team of chartered accountants discussing strategy"
            loading="lazy"
            className="relative rounded-3xl shadow-card w-full object-cover h-[500px]"
          />
        </div>

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
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {description}
          </p>

          <ul className="mt-6 space-y-3">
            {features.map((p: string) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s: any) => (
              <div key={s.label} className="glass rounded-2xl p-5 text-center shadow-card">
                <div className="text-3xl font-bold text-gradient">
                  <span data-counter={s.value || s.v || 0}>0</span>
                  {s.suffix || "+"}
                </div>
                <div className="mt-1 text-xs text-muted-foreground leading-tight">{s.label || s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
