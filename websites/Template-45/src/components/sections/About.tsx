import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Target, ScanEye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 17, suffix: "+", label: "Years of Experience" },
  { value: 2400, suffix: "+", label: "Clients Served" },
  { value: 5800, suffix: "+", label: "Projects Completed" },
  { value: 42, suffix: "", label: "Team Strength" },
];

export function About() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-block",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: root.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );

      document.querySelectorAll<HTMLElement>(".count").forEach((el) => {
        const end = Number(el.dataset.value || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 95%", toggleActions: "play none none none" },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString();
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="blob -top-40 right-10 h-96 w-96 bg-[color:var(--mint)]" />
      <div className="blob bottom-0 -left-20 h-80 w-80 bg-[color:var(--sky)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left intro */}
          <div className="lg:col-span-5 about-block">
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)] font-medium">
              About the firm
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05]">
              A modern practice<br />
              built on <span className="italic text-[color:var(--wine)]">timeless</span> rigour.
            </h2>
            <p className="mt-6 text-[color:var(--ink)]/70 leading-relaxed max-w-md">
              Founded in 2008, ABC & Associates is a multi-disciplinary chartered accountancy
              firm advising founders, family offices, listed companies and global enterprises
              across taxation, audit, transactions and regulatory affairs.
            </p>
            <p className="mt-4 text-[color:var(--ink)]/70 leading-relaxed max-w-md">
              We blend deep technical expertise with a design-led approach to financial reporting —
              so leadership teams can read their numbers, not decode them.
            </p>
          </div>

          {/* Right layered cards */}
          <div className="lg:col-span-7 relative min-h-[480px]">
            <div className="about-block absolute top-0 right-0 w-[78%] rounded-3xl bg-[color:var(--mint)] p-8 shadow-[var(--shadow-soft)]">
              <Compass className="h-8 w-8 text-[color:var(--wine)]" />
              <h3 className="mt-4 font-display text-2xl">Our Vision</h3>
              <p className="mt-3 text-sm text-[color:var(--ink)]/75 leading-relaxed">
                To be India's most trusted advisory firm — where every client decision is
                backed by data, integrity and forward-looking judgement.
              </p>
            </div>

            <div className="about-block absolute top-32 left-0 w-[72%] rounded-3xl glass p-8 shadow-[var(--shadow-luxe)]">
              <Target className="h-8 w-8 text-[color:var(--wine)]" />
              <h3 className="mt-4 font-display text-2xl">Our Mission</h3>
              <p className="mt-3 text-sm text-[color:var(--ink)]/75 leading-relaxed">
                Deliver precise, proactive and personalised financial counsel that protects
                wealth, fuels growth and ensures absolute regulatory peace of mind.
              </p>
            </div>

            <div className="about-block absolute bottom-0 right-4 w-[60%] rounded-3xl bg-[color:var(--ink)] text-[color:var(--cream)] p-8 shadow-[var(--shadow-glow)]">
              <ScanEye className="h-8 w-8 text-[color:var(--rose)]" />
              <h3 className="mt-4 font-display text-2xl">Our Edge</h3>
              <p className="mt-3 text-sm text-[color:var(--cream)]/80 leading-relaxed">
                Big-4 trained partners, in-house technology, and 17 years of practice across
                12 industries.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 about-block grid grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--ink)]/10 rounded-3xl overflow-hidden border border-[color:var(--ink)]/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-[color:var(--cream)] p-8 sm:p-10">
              <div className="font-display text-5xl sm:text-6xl font-light text-[color:var(--ink)]">
                <span className="count" data-value={s.value}>0</span>
                <span className="text-[color:var(--wine)]">{s.suffix}</span>
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-[color:var(--ink)]/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
