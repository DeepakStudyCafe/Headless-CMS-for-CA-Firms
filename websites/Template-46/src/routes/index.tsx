import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "../assets/hero.jpg";
import aboutImg from "../assets/about.jpg";
import gallery2 from "../assets/gallery2.jpg";
import { Reveal } from "../components/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Boutique Chartered Accountants" },
      {
        name: "description",
        content:
          "Reliable financial guidance for growing businesses. Audit, taxation, advisory and compliance — delivered with editorial care.",
      },
      { property: "og:title", content: "ABC & Associates — Boutique Chartered Accountants" },
      { property: "og:description", content: "Reliable financial guidance for growing businesses." },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    no: "01",
    title: "Audit & Assurance",
    desc: "Statutory, internal and management audits performed with a forensic eye and a quiet, methodical hand. Reports your board can rely on.",
    glyph: "✦",
  },
  {
    no: "02",
    title: "Direct Taxation",
    desc: "Income-tax planning, return filing, representation and advisory for individuals, partnerships, LLPs and companies of every size.",
    glyph: "❖",
  },
  {
    no: "03",
    title: "GST & Indirect Tax",
    desc: "End-to-end GST compliance, audits, refunds and litigation support — keeping your indirect tax exposure measured and well-papered.",
    glyph: "✤",
  },
  {
    no: "04",
    title: "Corporate Advisory",
    desc: "Entity structuring, ROC filings, transaction advisory and CFO-level guidance for founders navigating their next growth chapter.",
    glyph: "✺",
  },
  {
    no: "05",
    title: "Bookkeeping & MIS",
    desc: "Cloud-based bookkeeping with monthly MIS dashboards — so the numbers tell you a story long before the financial year ends.",
    glyph: "✶",
  },
  {
    no: "06",
    title: "FEMA & Cross-border",
    desc: "FEMA compliance, transfer pricing, ODI/FDI documentation and structuring for businesses with an international footprint.",
    glyph: "❀",
  },
];

const PILLARS = [
  {
    year: "I.",
    title: "Expertise that compounds",
    text: "Three decades of practice across audit, tax and advisory mandates — distilled into the way every engagement is led.",
  },
  {
    year: "II.",
    title: "Transparency, by default",
    text: "Clear scopes, fixed fees where possible, and partner access on every file. No surprises, ever.",
  },
  {
    year: "III.",
    title: "Delivered on time, in full",
    text: "Disciplined workflows and a small-team-per-client model mean deadlines are met without theatrics.",
  },
  {
    year: "IV.",
    title: "Client-first counsel",
    text: "We exist to help you sleep better at quarter-end. Every recommendation is weighed against your reality, not a template.",
  },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text fade in
      gsap.from(".hero-line", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".hero-meta", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.9,
        ease: "power2.out",
      });

      // Parallax on hero image
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Marquee
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <div ref={heroImgRef} className="absolute inset-0 -top-10 -bottom-10">
          <img
            src={heroImg}
            alt="A calm, sunlit financial advisory office"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 grain opacity-60" />

        {/* corner marks */}
        <div className="pointer-events-none absolute inset-6 hidden border border-[var(--cream)]/15 sm:block" />

        <div ref={heroTextRef} className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 sm:pb-28">
          <div className="mx-auto w-full max-w-7xl">
            <div className="hero-meta mb-10 flex items-center gap-4 text-[var(--cream)]/80">
              <span className="h-px w-10 bg-[var(--cream)]/60" />
              <span className="text-[11px] uppercase tracking-[0.4em]">
                Est. 1994 · Chartered Accountants
              </span>
            </div>

            <div className="grid items-end gap-10 lg:grid-cols-12">
              <h1 className="hero-line lg:col-span-9 font-display text-balance text-[clamp(2.5rem,6vw,5.25rem)] font-light leading-[1.02] text-[var(--cream)]">
                Reliable financial<br />
                guidance for <em className="italic font-light text-[var(--sand)]">growing</em> businesses.
              </h1>

              <div className="hero-line lg:col-span-3 max-w-md">
                <div className="glass rounded-2xl p-6">
                  <p className="text-sm leading-relaxed text-foreground/85">
                    A boutique chartered accountancy practice — pairing
                    technical depth with the kind of personal counsel that
                    larger firms have quietly forgotten how to give.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    Begin a conversation <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="hero-meta absolute bottom-6 right-6 z-10 hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--cream)]/70 sm:flex">
          Scroll <span className="h-8 w-px bg-[var(--cream)]/40" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/60 bg-secondary/40 py-5 overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap font-display text-2xl text-primary/80">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-10 px-5">
              {[
                "Audit & Assurance",
                "Direct Tax",
                "GST Advisory",
                "Corporate Structuring",
                "Cross-border · FEMA",
                "Virtual CFO",
                "Family Office",
                "Litigation Support",
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-10">
                  {t}
                  <span className="text-sand">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT — offset split */}
      <section className="relative px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5 relative">
              <Reveal>
                <div className="relative">
                  <img
                    src={aboutImg}
                    alt="Hands reviewing financial statements"
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
                  />
                  {/* floating card */}
                  <div className="absolute -bottom-10 -right-6 sm:-right-12 w-[260px] glass rounded-2xl p-5 shadow-[var(--shadow-card)]">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">Since 1994</p>
                    <p className="mt-3 font-display text-3xl text-foreground leading-tight">
                      30+ years
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      of unbroken practice across three generations of clients.
                    </p>
                  </div>
                  {/* small offset accent */}
                  <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-accent/40 blur-2xl" aria-hidden />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">— On the firm</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                  A small firm, deliberately so.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
                  <p>
                    ABC & Associates was founded with a simple conviction —
                    that the most consequential financial decisions deserve
                    quiet rooms, careful reading, and a partner who actually
                    knows the file. Three decades on, that conviction still
                    shapes how we work.
                  </p>
                  <p>
                    Our practice spans statutory audit, taxation, regulatory
                    compliance and advisory — but our reputation rests on
                    something less easily measured: the steadiness with which
                    we hold our clients through scrutiny notices, transactions,
                    successions and growth.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                  <Stat label="Clients served" value="600+" />
                  <Stat label="Industries" value="24" />
                  <Stat label="Partners" value="5" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — staggered editorial cards */}
      <section className="relative bg-[var(--sand)]/40 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">— Practice areas</p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl max-w-xl">
                  Six disciplines, one team behind the file.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Explore all services <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.05}>
                <article
                  className={`group relative h-full rounded-2xl border border-border/70 bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-card)] ${
                    i % 3 === 1 ? "lg:translate-y-8" : ""
                  } ${i % 3 === 2 ? "lg:translate-y-4" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm text-primary/60">{s.no}</span>
                    <span className="text-xl text-primary/50 transition-transform group-hover:rotate-12">
                      {s.glyph}
                    </span>
                  </div>
                  <h3 className="mt-10 font-display text-2xl leading-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <div className="mt-8 h-px w-full bg-border transition-all group-hover:bg-primary" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY — vertical timeline */}
      <section className="relative px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">— Why work with us</p>
                <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                  Four quiet principles.
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                  We don't sell promises. We do, however, hold ourselves
                  accountable to the way we practice — and these are the
                  rails we never leave.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ol className="relative space-y-12 border-l border-border pl-8">
                {PILLARS.map((p, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <li className="relative">
                      <span className="absolute -left-[42px] top-1 grid h-7 w-7 place-items-center rounded-full border border-primary bg-background font-display text-[11px] text-primary">
                        {p.year}
                      </span>
                      <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                        {p.text}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — overlapping editorial block */}
      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground sm:px-16 sm:py-24">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--sage-light)]/30 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[var(--sand)]/40 blur-3xl"
              />
              <div className="relative grid items-end gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--sand)]">— Begin</p>
                  <h2 className="mt-5 font-display text-balance text-4xl leading-tight sm:text-6xl">
                    Let's read the numbers together.
                  </h2>
                </div>
                <div className="lg:col-span-5 lg:text-right">
                  <p className="text-sm leading-relaxed text-primary-foreground/80">
                    A 30-minute introductory call, no obligations. Tell us
                    what's keeping you up at quarter-end and we'll tell you
                    how we'd approach it.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--cream)] px-7 py-4 text-sm font-medium text-foreground transition hover:bg-[var(--sand)]"
                  >
                    Schedule a consultation <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>

              <img
                src={gallery2}
                alt=""
                aria-hidden
                width={1024}
                height={800}
                loading="lazy"
                className="pointer-events-none absolute -bottom-10 -right-10 hidden h-48 w-64 rounded-2xl border border-[var(--cream)]/20 object-cover opacity-30 lg:block"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-primary">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}
