import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReveal } from "@/lib/useReveal";
import aboutImg from "@/assets/about-office.jpg";

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 1200, suffix: "+", label: "Happy Clients" },
  { value: 3500, suffix: "+", label: "Projects Completed" },
  { value: 40, suffix: "+", label: "Expert Members" },
];

export function About() {
  const ref = useRef<HTMLElement>(null);

  useReveal(ref, [
    { selector: ".about-img", x: -40, duration: 1 },
    { selector: ".about-text > *", y: 30, stagger: 0.1 },
  ]);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
        const target = Number(el.dataset.value || "0");
        // ensure visible final value as fallback
        el.textContent = target.toLocaleString();
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration: 2, ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 95%", toggleActions: "play none none none" },
          onUpdate: () => { el.textContent = Math.floor(obj.val).toLocaleString(); },
        });
      });
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
        <div className="about-img relative order-2 lg:order-1">
          <div className="absolute -inset-3 bg-gradient-gold rounded-[2rem] opacity-25 blur-2xl pointer-events-none" />
          <img src={aboutImg} alt="Sterling & Co. office" width={1280} height={1024} loading="lazy"
            className="relative rounded-[2rem] shadow-elegant w-full h-auto object-cover" />
          <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-gradient-maroon text-primary-foreground rounded-2xl p-5 lg:p-6 shadow-elegant hidden sm:block">
            <p className="font-display text-2xl lg:text-3xl">Excellence</p>
            <p className="text-xs lg:text-sm opacity-80 mt-1">in every ledger</p>
          </div>
        </div>

        <div className="about-text order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            <span className="inline-block h-px w-10 bg-[var(--gold)] align-middle mr-3" />
            About Sterling &amp; Co.
          </p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            A legacy of <span className="text-gradient-gold italic">precision</span>,<br /> built on trust.
          </h2>
          <p className="mt-7 text-base lg:text-lg text-muted-foreground leading-relaxed">
            For over two decades, Sterling &amp; Co. has been the silent partner behind India's most ambitious enterprises.
            From founders raising their first round to multi-generational family offices, we craft financial strategy
            with the care a master jeweller reserves for their finest work.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our chartered accountants pair technical mastery with discretion — turning compliance into competitive advantage
            and audit reports into insight.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 lg:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-[var(--gold)] pl-5">
                <p className="font-display text-4xl lg:text-5xl text-primary font-semibold">
                  <span className="counter" data-value={s.value}>{s.value.toLocaleString()}</span>
                  <span className="text-gradient-gold">{s.suffix}</span>
                </p>
                <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
