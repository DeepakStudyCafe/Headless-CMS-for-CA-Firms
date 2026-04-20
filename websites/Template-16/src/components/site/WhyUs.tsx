import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  { t: "Expert Chartered Accountants", d: "Senior partners on every engagement — no hand-offs to juniors." },
  { t: "Transparent Pricing", d: "Clear fixed-fee proposals upfront. Zero hidden charges, ever." },
  { t: "Fast Compliance", d: "On-time filings with proactive deadline tracking." },
  { t: "Trusted by Businesses", d: "1,200+ companies trust us with their financial future." },
  { t: "Dedicated Support", d: "A named relationship manager you can reach anytime." },
];

export function WhyUs() {
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

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            A partner who is <span className="text-gradient">truly invested</span> in your growth
          </h2>
          <p className="mt-5 text-muted-foreground">
            We combine deep technical expertise with a client-first culture so you get the right
            answer — fast, clear, and on time.
          </p>

          <ul className="mt-8 space-y-5">
            {points.map((p) => (
              <li key={p.t} data-why-item className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 grid place-items-center text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{p.t}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{p.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-primary opacity-15 rounded-[2rem] blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80"
            alt="Business professional reviewing analytics"
            loading="lazy"
            className="relative rounded-3xl shadow-glow w-full object-cover h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
