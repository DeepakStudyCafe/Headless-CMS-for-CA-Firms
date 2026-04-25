import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ShieldCheck, Scale, FileText, TrendingUp, Building2, Calculator } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import aboutImg from "../assets/about.jpg";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Boutique Chartered Accountants" },
      {
        name: "description",
        content:
          "Reliable financial guidance for growing businesses. Audit, tax, advisory and compliance from a boutique CA firm trusted since 2002.",
      },
      { property: "og:title", content: "ABC & Associates — Boutique Chartered Accountants" },
      { property: "og:description", content: "Reliable financial guidance for growing businesses." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal and tax audits with deep judgement and clear reporting." },
  { icon: Calculator, title: "Direct Taxation", desc: "Income tax planning, returns, assessments and litigation across the lifecycle." },
  { icon: FileText, title: "GST Advisory", desc: "Registrations, returns, audits and end-to-end indirect tax advisory." },
  { icon: Building2, title: "Corporate Law", desc: "Company formation, ROC compliance, secretarial work and FEMA advisory." },
  { icon: TrendingUp, title: "Business Advisory", desc: "Virtual CFO, financial modelling, MIS and growth-stage advisory." },
  { icon: Scale, title: "Risk & Governance", desc: "Internal controls, SOP design and risk frameworks tailored to your scale." },
];

const whys = [
  { k: "01", t: "Quiet Expertise", d: "Two decades of practice across listed companies, family offices and founders. We let the work speak." },
  { k: "02", t: "Radical Transparency", d: "Fixed scopes, plain-English reporting and no surprises on the invoice or the timeline." },
  { k: "03", t: "Timely, Always", d: "We staff for the calendar — quarter-end, year-end, audit season. Deadlines are non-negotiable." },
  { k: "04", t: "Client-First Posture", d: "A senior partner on every file. Your business is studied, not just serviced." },
];

function Home() {
  useReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: "power3.out", delay: 0.2 },
      );
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.15 },
        { scale: 1, duration: 2.4, ease: "power2.out" },
      );
      gsap.to(".hero-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-text", {
        yPercent: -25,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Inside ABC & Associates office"
          className="hero-bg absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 gradient-overlay" />

        {/* tiny corner ticker */}
        <div className="absolute top-24 left-6 lg:left-10 z-10 flex items-center gap-3 text-white/90 text-[11px] uppercase tracking-[0.3em] text-shadow-soft">
          <span className="h-px w-10 bg-accent" />
          <span>Est. 2002 · Bengaluru</span>
        </div>

        <div className="hero-text absolute inset-0 z-10 flex items-end pb-20 lg:pb-28">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl rounded-3xl bg-black/15 backdrop-blur-[2px] p-6 lg:p-10 lg:-ml-4">
              <p className="hero-line text-accent text-xs uppercase tracking-[0.4em] mb-6 text-shadow-soft">
                Chartered Accountants
              </p>
              <h1 className="hero-line font-display text-white text-[clamp(2.4rem,5.6vw,5rem)] leading-[1.05] text-balance text-shadow-soft font-medium">
                Reliable financial guidance <span className="italic text-[#F3E3D0]">for growing</span> businesses.
              </h1>
              <p className="hero-line mt-6 max-w-xl text-[#F3E3D0] text-base lg:text-lg leading-relaxed text-shadow-soft">
                We sit alongside founders, finance teams and family-run enterprises — bringing
                quiet rigour to audit, tax and the decisions that matter.
              </p>
              <div className="hero-line mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground shadow-lift transition hover:bg-[color:var(--sand)]"
                >
                  Schedule a consultation
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  View our practice areas
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* floating glass card */}
        <div className="hidden lg:block absolute right-10 bottom-28 z-10 glass-dark rounded-2xl border border-cream/15 p-6 w-72">
          <div className="text-cream/60 text-[10px] uppercase tracking-[0.3em]">In numbers</div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className="font-display text-3xl text-cream">22<span className="text-accent">+</span></div>
              <div className="text-cream/70 text-xs mt-1">Years in practice</div>
            </div>
            <div>
              <div className="font-display text-3xl text-cream">480<span className="text-accent">+</span></div>
              <div className="text-cream/70 text-xs mt-1">Active clients</div>
            </div>
            <div>
              <div className="font-display text-3xl text-cream">14</div>
              <div className="text-cream/70 text-xs mt-1">Senior associates</div>
            </div>
            <div>
              <div className="font-display text-3xl text-cream">9</div>
              <div className="text-cream/70 text-xs mt-1">Industry verticals</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / TICKER STRIP */}
      <section className="border-y border-border bg-primary text-primary-foreground py-5 overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap text-sm uppercase tracking-[0.25em] animate-[scroll_38s_linear_infinite]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              <span>Audit & Assurance</span>
              <span className="text-accent">✦</span>
              <span>Direct & Indirect Tax</span>
              <span className="text-accent">✦</span>
              <span>Virtual CFO</span>
              <span className="text-accent">✦</span>
              <span>Corporate Law</span>
              <span className="text-accent">✦</span>
              <span>Risk Advisory</span>
              <span className="text-accent">✦</span>
              <span>FEMA & RBI</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </section>

      {/* ABOUT — offset split */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-5 lg:sticky lg:top-32 reveal-up">
              <p className="text-accent text-xs uppercase tracking-[0.4em] mb-5">— Who we are</p>
              <h2 className="font-display text-4xl lg:text-5xl text-primary leading-[1.08] text-balance">
                A small firm, deliberately. Built for the long arc of a business.
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-foreground/80 text-base leading-relaxed reveal-up">
              <p>
                ABC &amp; Associates was founded in 2002 with a simple conviction — that a chartered
                accountancy practice is, at its heart, a relationship. We have grown slowly and
                intentionally, taking on engagements where our judgement adds real weight.
              </p>
              <p>
                Today we serve over 480 clients across manufacturing, technology, healthcare, real
                estate and family offices — from first-generation founders to listed mid-caps. Each
                engagement is led personally by a partner, supported by a tightly trained bench.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-t border-border pt-4">
                  <div className="font-display text-3xl text-primary">2002</div>
                  <div className="text-xs text-muted-foreground mt-1">Founded</div>
                </div>
                <div className="border-t border-accent pt-4">
                  <div className="font-display text-3xl text-primary">ICAI</div>
                  <div className="text-xs text-muted-foreground mt-1">Member firm</div>
                </div>
              </div>
            </div>
          </div>

          {/* layered image card */}
          <div className="relative mt-20 lg:mt-28 reveal-up">
            <div className="absolute -top-10 -left-4 lg:-left-10 w-32 h-32 rounded-full bg-accent/15 blur-2xl" />
            <div className="grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 lg:col-start-2">
                <div className="aspect-[5/4] overflow-hidden rounded-2xl">
                  <img src={aboutImg} alt="Reviewing financial reports" className="h-full w-full object-cover" loading="lazy" width={1200} height={1400} />
                </div>
              </div>
              <div className="lg:col-span-4 lg:-mt-24 z-10">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-lift">
                  <p className="font-display text-xl text-primary leading-snug">
                    "We don't measure success by headcount or billings. We measure it in the
                    conversations clients trust us with."
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="text-sm font-medium text-primary">Anil Bhattacharya, FCA</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Founding Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — staggered cards */}
      <section className="relative py-28 lg:py-36 bg-secondary/40 grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 reveal-up">
            <div className="max-w-2xl">
              <p className="text-accent text-xs uppercase tracking-[0.4em] mb-5">— Practice areas</p>
              <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight text-balance">
                Six disciplines, one continuous conversation.
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition self-start lg:self-end">
              All services <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`group relative bg-card rounded-2xl border border-border p-8 lg:p-10 shadow-elegant transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:border-accent/60 reveal-up ${
                  i % 2 === 1 ? "lg:translate-y-6" : ""
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-primary">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
                  <span>0{i + 1}</span>
                  <span className="h-px flex-1 bg-border" />
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — vertical timeline */}
      <section className="relative py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 reveal-up">
              <p className="text-accent text-xs uppercase tracking-[0.4em] mb-5">— Why choose us</p>
              <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight text-balance">
                Four quiet promises we keep.
              </h2>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                The things clients tell us they value, after the engagement letter is signed and the
                first quarter has come and gone.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
              <div className="space-y-12">
                {whys.map((w) => (
                  <div key={w.k} className="relative pl-14 reveal-up">
                    <div className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full bg-primary text-cream font-display text-sm">
                      {w.k}
                    </div>
                    <h3 className="font-display text-2xl text-primary">{w.t}</h3>
                    <p className="mt-2 text-foreground/70 leading-relaxed">{w.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground grain overflow-hidden">
        <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center reveal-up">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-5">— Let's begin</p>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.1] text-balance">
            A conversation, not a sales pitch.
          </h2>
          <p className="mt-6 text-cream/75 max-w-xl mx-auto leading-relaxed">
            Tell us where your business is today. We'll listen, ask the difficult questions and
            propose a scope only if we can genuinely add value.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-medium text-primary transition hover:bg-accent hover:text-accent-foreground">
              Book a consultation <ArrowUpRight size={16} />
            </Link>
            <Link to="/query" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm text-cream/90 transition hover:bg-cream/10">
              Send a query
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
