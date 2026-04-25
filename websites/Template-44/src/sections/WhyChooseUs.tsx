import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const POINTS = [
  { tag: "Expertise", title: "Partners on every engagement", body: "You will never be passed to a junior. Every audit, return, and advisory note carries the signature of a chartered accountant with at least fifteen years of practice." },
  { tag: "Transparency", title: "Clear scope, fixed fees", body: "Engagement letters are written in plain English. We tell you what something costs before we begin, and we don't bill for the phone calls in between." },
  { tag: "Timely Delivery", title: "Calendar discipline", body: "Filings go out a week before the deadline. Audits close on the date we promised. We treat your statutory clock as non‑negotiable." },
  { tag: "Client‑first", title: "A long view of the relationship", body: "We turn down work where we can't add value. The clients we keep are the ones we've kept for a decade — and that's how we measure success." },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-line", {
        scaleY: 0, transformOrigin: "top",
        duration: 1.4, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
      gsap.from(".why-item", {
        x: 40, opacity: 0, duration: 0.9, stagger: 0.18, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative py-32 lg:py-40 px-6 lg:px-10 bg-cream">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          <div className="text-[11px] tracking-[0.3em] uppercase text-forest-3 mb-8">— 04 / Why us</div>
          <h2 className="font-display text-[36px] md:text-[52px] leading-[1.08] text-forest-1 text-balance">
            Four standards we have not relaxed in twenty‑seven years.
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed">
            They are not promises. They are the operating rules of the firm — and the only reason our clients refer us.
          </p>
        </div>

        <div className="lg:col-span-8 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-forest-3/30 why-line lg:left-6" />
          <ol className="space-y-12 lg:space-y-16">
            {POINTS.map((p, i) => (
              <li key={p.tag} className="why-item relative pl-14 lg:pl-20">
                <div className="absolute left-0 top-2 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-forest-3 text-cream flex items-center justify-center font-mono text-[12px]">
                    0{i + 1}
                  </div>
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-forest-4 mb-3">{p.tag}</div>
                <h3 className="font-display text-2xl md:text-3xl text-forest-1 leading-snug mb-4">{p.title}</h3>
                <p className="text-ink-soft leading-relaxed max-w-xl">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
