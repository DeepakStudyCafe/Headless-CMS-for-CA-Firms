import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 1200, suffix: "+", label: "Clients Served" },
  { value: 850, suffix: "+", label: "Projects Completed" },
  { value: 24, suffix: "", label: "Team Members" },
];

export function About() {
  const ref = useRef<HTMLElement>(null);

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
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80"
            alt="Team of chartered accountants discussing strategy"
            loading="lazy"
            className="relative rounded-3xl shadow-card w-full object-cover h-[500px]"
          />
        </div>

        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">About Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Building financial confidence with <span className="text-gradient">precision & trust</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            ABC & Associates is a full-service Chartered Accountancy firm delivering tailored
            advisory across taxation, audit, compliance, and corporate finance. Our
            partner-led approach ensures every engagement gets senior expertise and
            uncompromising quality.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "ICAI-registered partners with 15+ years of experience",
              "Integrated tax, audit, and advisory under one roof",
              "Proactive compliance with personalised attention",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 text-center shadow-card">
                <div className="text-3xl font-bold text-gradient">
                  <span data-counter={s.value}>0</span>
                  {s.suffix}
                </div>
                <div className="mt-1 text-xs text-muted-foreground leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
