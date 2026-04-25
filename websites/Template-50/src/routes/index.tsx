import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCountUp } from "@/hooks/useCountUp";
import heroImg from "@/assets/hero.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Modern Chartered Accountants in Bengaluru" },
      { name: "description", content: "A modern boutique CA firm offering audit, taxation, advisory, compliance and forensic services. Senior-led, partner-attentive, future-ready." },
      { property: "og:title", content: "ABC & Associates — Modern Chartered Accountants" },
      { property: "og:description", content: "Senior-led audit, tax and advisory for forward-thinking businesses." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-7h6v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    n: "01",
    title: "Audit & Assurance",
    desc: "Statutory, internal and tax audits delivered with rigour and clarity for confident boards.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M4 4h12l4 4v12H4z M16 4v4h4 M8 12h8 M8 16h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    n: "02",
    title: "Direct Taxation",
    desc: "Year-round planning, return filing and representation for individuals, firms and corporates.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    n: "03",
    title: "GST & Indirect Tax",
    desc: "End-to-end GST compliance, refunds, reconciliations and cross-border indirect tax stewardship.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M3 3v18h18 M7 14l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    n: "04",
    title: "Corporate Advisory",
    desc: "Structuring, transactions, valuation and long-horizon stewardship for growing enterprises.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M12 2l9 4-9 4-9-4 9-4z M3 10l9 4 9-4 M3 14l9 4 9-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    n: "05",
    title: "Compliance & ROC",
    desc: "Companies Act, FEMA, secretarial and regulatory filings handled with precision.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7z M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    n: "06",
    title: "Risk & Forensic",
    desc: "Internal control reviews, due diligence and discreet forensic engagements for boards.",
  },
];

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-6 h-6"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    k: "Partner-led",
    v: "Every engagement is led by a partner — never delegated to a stranger. Senior judgement on every file.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-6 h-6"><path d="M12 2v4 M12 18v4 M2 12h4 M18 12h4 M5 5l3 3 M16 16l3 3 M5 19l3-3 M16 8l3-3" strokeLinecap="round" /></svg>
    ),
    k: "Modern systems",
    v: "Cloud accounting, secure portals and real-time dashboards — the rigour of audit, the ease of software.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-6 h-6"><path d="M12 2l2.5 6 6.5.5-5 4.5 1.5 6.5L12 16l-5.5 3.5L8 13 3 8.5 9.5 8z" strokeLinejoin="round" /></svg>
    ),
    k: "Trusted standards",
    v: "16+ years, 320+ engagements, ICAI-empanelled. Quietly maintained, never marketed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-6 h-6"><path d="M3 12h4l3-7 4 14 3-7h4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    k: "Strategic counsel",
    v: "We sit beside you — at boardrooms, family tables and term-sheet negotiations.",
  },
];

const teamPreview = [
  { img: t1, name: "Arvind Bhat", role: "Founding Partner" },
  { img: t2, name: "Bhavana Chandra", role: "Partner — Tax" },
  { img: t3, name: "Chetan Deshpande", role: "Partner — Advisory" },
];

function HomePage() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".hero-fade", {
        y: 36,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });

      gsap.to(".hero-orb-1", { y: -20, x: 10, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-orb-2", { y: 20, x: -14, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-card", { y: -12, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger] > *").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const stats = [
    { v: 16, suffix: "+", l: "Years of practice" },
    { v: 320, suffix: "+", l: "Engagements delivered" },
    { v: 28, suffix: "", l: "Professionals on bench" },
    { v: 96, suffix: "%", l: "Client retention" },
  ];

  return (
    <div ref={root} className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* HERO — layered gradient with floating elements */}
      <section className="relative overflow-hidden min-h-[100svh] flex items-center bg-gradient-to-br from-navy via-navy-deep to-[oklch(0.38_0.06_232)] text-cream-soft pt-32 pb-24">
        {/* gradient orbs */}
        <div className="hero-orb-1 blob bg-blue/55 w-[520px] h-[520px] -top-32 -right-32" />
        <div className="hero-orb-2 blob bg-blue-light/40 w-[440px] h-[440px] bottom-[-180px] -left-24" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7">
            <span className="hero-fade inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-xs tracking-widest uppercase text-blue-light mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-light animate-pulse" />
              Estd. 2008 · Bengaluru
            </span>
            <h1 className="hero-fade font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] tracking-tight">
              Modern counsel <br />
              for <span className="italic text-blue-light">future-ready</span> <br />
              businesses.
            </h1>
            <p className="hero-fade mt-8 max-w-xl text-base md:text-lg text-cream/80 leading-relaxed">
              ABC &amp; Associates is a partner-led chartered accountancy practice — bringing
              audit, tax and advisory expertise to founders, families and forward-thinking enterprises.
            </p>
            <div className="hero-fade mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary !bg-cream-soft !text-navy" style={{ background: "linear-gradient(135deg, var(--cream-soft), var(--blue-light))" }}>
                Begin a Conversation
                <span aria-hidden>→</span>
              </Link>
              <Link to="/services" className="btn-outline">Our Services</Link>
            </div>

            {/* trust strip */}
            <div className="hero-fade mt-14 grid grid-cols-3 gap-6 max-w-md">
              {stats.slice(0, 3).map((s) => (
                <Stat key={s.l} value={s.v} suffix={s.suffix} label={s.l} dark />
              ))}
            </div>
          </div>

          {/* layered hero visual */}
          <div className="lg:col-span-5 relative h-[480px] md:h-[560px] hidden lg:block">
            <div className="hero-card absolute top-0 right-0 w-[78%] h-[68%] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImg}
                alt="Modern corporate skyscraper"
                className="w-full h-full object-cover"
                width={1920}
                height={1280}
              />
            </div>
            <div className="hero-card absolute bottom-0 left-0 w-[60%] glass-dark rounded-3xl p-6 shadow-elevated">
              <p className="eyebrow !text-blue-light mb-3">Live insight</p>
              <p className="font-display text-2xl text-cream-soft leading-snug">
                "Senior partners on every file. Always."
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[t1, t2, t3].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-9 h-9 rounded-full object-cover border-2 border-navy" loading="lazy" />
                  ))}
                </div>
                <p className="text-xs text-cream/70">4 partners · 28 professionals</p>
              </div>
            </div>
            <div className="hero-card absolute top-[42%] -right-2 glass-dark rounded-2xl px-5 py-4 shadow-elevated">
              <p className="text-[0.6rem] tracking-widest uppercase text-blue-light font-mono">Compliance</p>
              <p className="font-display text-3xl text-cream-soft mt-1">100%</p>
              <p className="text-xs text-cream/65">on-time filings</p>
            </div>
          </div>
        </div>

        {/* curved divider into next section */}
        <svg className="absolute bottom-0 left-0 right-0 w-full h-[60px] text-background" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden>
          <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" fill="currentColor" />
        </svg>
      </section>

      {/* TRUSTED BY / MARQUEE STRIP */}
      <section className="bg-background py-10 border-b border-border/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap items-center gap-x-12 gap-y-4 justify-center text-navy/55">
          <p className="eyebrow">Trusted across sectors</p>
          {["Manufacturing", "Technology", "Real Estate", "Healthcare", "Family Offices", "Fintech"].map((s) => (
            <span key={s} className="text-sm font-medium tracking-wide">{s}</span>
          ))}
        </div>
      </section>

      {/* ABOUT — card based with stats */}
      <section className="relative py-28 md:py-36">
        <div className="blob bg-blue-light/30 w-[420px] h-[420px] -top-20 -left-32" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 relative" data-reveal>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img src={about1} alt="Boardroom" className="w-full h-[420px] object-cover" loading="lazy" />
                </div>
              </div>
              <div className="col-span-4 flex flex-col gap-4 mt-12">
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img src={about2} alt="Team at work" className="w-full h-[200px] object-cover" loading="lazy" />
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-navy to-blue p-6 text-cream-soft shadow-card">
                  <p className="font-display text-5xl">16+</p>
                  <p className="text-xs uppercase tracking-widest mt-1 text-cream/75">Years of craft</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6" data-reveal>
            <p className="eyebrow mb-5">About the practice</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
              A small firm <br /> by intention, modern by design.
            </h2>
            <p className="mt-6 text-navy/75 leading-relaxed text-lg max-w-xl">
              Founded in 2008, ABC &amp; Associates is a partner-led practice serving founders,
              family offices and mid-market enterprises. We pair classical CA rigour with
              modern systems, secure portals and real-time financial visibility.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { t: "Highlight", d: "Empanelled with leading public-sector banks for statutory and concurrent audits." },
                { t: "Approach", d: "Cloud-first workflows. Encrypted client portals. Quarterly partner reviews." },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl bg-cream-soft border border-border p-5 shadow-soft">
                  <p className="eyebrow mb-2">{b.t}</p>
                  <p className="text-sm text-navy/75 leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-ghost mt-10">Read our story <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="relative bg-gradient-to-br from-navy via-navy-deep to-[oklch(0.40_0.06_232)] text-cream-soft py-20">
        <div className="blob bg-blue/40 w-[400px] h-[400px] top-0 right-0" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8" data-stagger>
          {stats.map((s) => (
            <Stat key={s.l} value={s.v} suffix={s.suffix} label={s.l} dark big />
          ))}
        </div>
      </section>

      {/* SERVICES — premium cards */}
      <section className="relative py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7" data-reveal>
              <p className="eyebrow mb-5">What we do</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
                Six disciplines. <br /> One uncompromising standard.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9" data-reveal>
              <p className="text-navy/70 leading-relaxed">
                Every service is led by a partner who knows your file by name —
                supported by a small, deliberate, modern team.
              </p>
              <Link to="/services" className="btn-ghost mt-6">All services <span aria-hidden>→</span></Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            {services.map((s) => (
              <article key={s.n} className="svc-card group">
                <span className="svc-num eyebrow !text-blue absolute top-7 right-7">{s.n}</span>
                <div className="svc-icon">{s.icon}</div>
                <h3 className="svc-title font-display text-2xl text-navy mb-3">{s.title}</h3>
                <p className="svc-desc text-navy/70 leading-relaxed text-sm">{s.desc}</p>
                <div className="svc-arrow mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue group-hover:text-cream-soft transition-colors">
                  Learn more <span aria-hidden>→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — split with circular icons */}
      <section className="relative bg-gradient-to-b from-cream-soft to-background py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5 relative" data-reveal>
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img src={about2} alt="Working session" className="w-full h-[560px] object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 glass rounded-2xl p-6 shadow-card max-w-[260px]">
              <p className="eyebrow mb-2">Client retention</p>
              <p className="font-display text-5xl text-navy">96%</p>
              <p className="text-xs text-navy/65 mt-2">Most clients stay with us beyond a decade.</p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-10" data-reveal>
            <p className="eyebrow mb-5">Why clients stay</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-[1.08]">
              Quiet conviction, <br /> returned in kind.
            </h2>
            <p className="mt-5 text-navy/70 max-w-xl leading-relaxed">
              We don't compete on scale — we compete on attention. Here is what makes the difference.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6" data-stagger>
              {reasons.map((r) => (
                <div key={r.k} className="group p-5 rounded-2xl border border-transparent hover:border-border hover:bg-cream-soft transition-all duration-500">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-light/50 to-blue/30 flex items-center justify-center text-navy mb-4 group-hover:from-navy group-hover:to-blue group-hover:text-cream-soft transition-all duration-500">
                    {r.icon}
                  </div>
                  <h3 className="font-display text-xl text-navy mb-2">{r.k}</h3>
                  <p className="text-sm text-navy/70 leading-relaxed">{r.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div data-reveal>
              <p className="eyebrow mb-4">The people</p>
              <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
                Partners who stay <br /> on the file.
              </h2>
            </div>
            <Link to="/team" className="btn-ghost self-start md:self-end">Meet the team <span aria-hidden>→</span></Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-stagger>
            {teamPreview.map((m) => (
              <article key={m.name} className="group relative rounded-3xl overflow-hidden shadow-card cursor-pointer">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-[440px] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="eyebrow !text-blue-light mb-2">{m.role}</p>
                  <h3 className="font-display text-2xl text-cream-soft">{m.name}</h3>
                  <div className="h-px w-10 bg-blue-light mt-4 group-hover:w-20 transition-all duration-500" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-navy via-navy-deep to-[oklch(0.42_0.07_230)] p-10 md:p-16 text-cream-soft shadow-elevated">
            <div className="blob bg-blue/45 w-[420px] h-[420px] -top-32 -right-20" />
            <div className="blob bg-blue-light/30 w-[320px] h-[320px] -bottom-24 -left-12" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8" data-reveal>
                <p className="eyebrow !text-blue-light mb-5">Begin</p>
                <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
                  Let's talk about <br /> what your numbers don't say yet.
                </h2>
                <p className="mt-5 text-cream/75 max-w-xl leading-relaxed">
                  Tell us a little about your enterprise. A partner will respond personally within two working days.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end" data-reveal>
                <Link to="/contact" className="btn-primary !bg-cream-soft !text-navy" style={{ background: "linear-gradient(135deg, var(--cream-soft), var(--blue-light))" }}>
                  Write to us <span aria-hidden>→</span>
                </Link>
                <Link to="/query" className="btn-outline">Quick query</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Stat({ value, suffix, label, dark, big }: { value: number; suffix: string; label: string; dark?: boolean; big?: boolean }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div>
      <p className={`font-display ${big ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"} ${dark ? "text-cream-soft" : "text-navy"}`}>
        <span ref={ref}>{v}</span>{suffix}
      </p>
      <p className={`mt-2 text-xs uppercase tracking-widest ${dark ? "text-cream/70" : "text-navy/60"}`}>{label}</p>
    </div>
  );
}
