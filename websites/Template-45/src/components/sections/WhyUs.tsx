import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, BadgeIndianRupee, Zap, ShieldCheck, Headset } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Users, title: "Expert Team", desc: "42 specialists — chartered accountants, CSs, lawyers and analysts under one roof." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "Fixed-fee engagements with line-item clarity. No surprises, ever." },
  { icon: Zap, title: "Fast Compliance", desc: "Average filing turnaround of 36 hours, backed by an in-house compliance OS." },
  { icon: ShieldCheck, title: "Trusted by Clients", desc: "97% client retention across 17 years and three economic cycles." },
  { icon: Headset, title: "Dedicated Support", desc: "Every client has a named partner and a 4-hour response SLA, on WhatsApp or email." },
];

export function WhyUs() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-card",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.09, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: root.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-24 sm:py-32 bg-[color:var(--ink)] text-[color:var(--cream)] overflow-hidden">
      <div className="blob -top-40 -left-20 h-96 w-96 bg-[color:var(--wine)]/60" />
      <div className="blob bottom-0 right-10 h-80 w-80 bg-[color:var(--rose)]/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--rose)] font-medium">
              Why choose us
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05]">
              Five reasons leading teams keep <span className="italic text-[color:var(--rose)]">coming back</span>.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-[color:var(--cream)]/70 leading-relaxed">
            Our partners don't just sign reports — they sit across the table, ask the
            uncomfortable questions, and make sure your numbers tell the truth.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`why-card group relative rounded-3xl p-8 border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-500 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--rose)] text-[color:var(--ink)]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{f.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--cream)]/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
