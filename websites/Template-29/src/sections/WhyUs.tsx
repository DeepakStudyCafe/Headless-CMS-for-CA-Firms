import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Clock, Users, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { icon: Users, title: "Listen first", desc: "Every engagement begins with understanding your business deeply." },
  { icon: Sparkles, title: "Tailor the approach", desc: "No templated playbooks — strategy is shaped to your context." },
  { icon: Award, title: "Execute with craft", desc: "Senior partners stay involved through delivery, not just kickoff." },
  { icon: Clock, title: "Stay long-term", desc: "We measure success in decades of partnership, not quarters." },
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-item", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        x: -30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">— Why ABC</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">
            Four principles that guide every <span className="italic gold-text">engagement</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We work the way the best private practices have for generations — with care, judgment and quiet excellence.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ol className="relative border-l border-border pl-8 space-y-10">
            {STEPS.map((s, i) => (
              <li key={s.title} className="why-item relative">
                <span className="absolute -left-[42px] top-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border ring-gold">
                  <s.icon className="h-5 w-5 text-primary" />
                </span>
                <div className="text-xs uppercase tracking-widest text-[var(--gold)]">Step 0{i + 1}</div>
                <h3 className="mt-1 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
