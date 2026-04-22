import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Precision in Numbers" },
      { name: "description", content: "Premium chartered accountancy: audit, tax, and advisory crafted with discretion for founders, families and institutions." },
      { property: "og:title", content: "ABC & Associates — Precision in Numbers" },
      { property: "og:description", content: "Audit. Tax. Advisory. Built on precision." },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Audit & Assurance", d: "Statutory, internal and forensic audits with institutional rigor." },
  { n: "02", t: "Direct Tax", d: "Strategic tax planning, compliance and representation." },
  { n: "03", t: "GST & Indirect", d: "End-to-end GST advisory, filings and litigation support." },
  { n: "04", t: "Corporate Advisory", d: "Structuring, governance and CFO services for scale." },
  { n: "05", t: "Transactions", d: "M&A, due diligence and valuation for decisive moves." },
  { n: "06", t: "Family Office", d: "Discreet wealth structuring across generations." },
];

const stats = [
  { k: "₹4,200Cr+", v: "Audited annually" },
  { k: "27", v: "Years of practice" },
  { k: "340+", v: "Active clients" },
  { k: "9", v: "Cities served" },
];

function Index() {
  return (
    <div className="relative">
      {/* HERO — asymmetric split with vertical typography */}
      <section className="relative min-h-screen overflow-hidden pt-24">
        <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-brand/20 blur-[140px]" />
        <div className="pointer-events-none absolute left-1/3 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-deep/20 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 sm:px-8">
          {/* left meta column */}
          <div className="col-span-12 flex items-start justify-between md:col-span-1 md:flex-col">
            <span className="rotate-180 font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground md:[writing-mode:vertical-rl]">
              N° 001 — Mumbai
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand md:mt-auto md:[writing-mode:vertical-rl] md:rotate-180">
              Chartered · Trusted
            </span>
          </div>

          {/* main hero */}
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px w-8 bg-brand" />
                <span className="font-mono uppercase tracking-[0.3em]">A Chartered Accountancy Firm</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-8 font-display text-[clamp(2.8rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tight text-balance">
                Precision is a <br className="hidden sm:block" />
                <span className="shimmer-text">discipline,</span> <br className="hidden sm:block" />
                <span className="text-muted-foreground">not a feature.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                ABC & Associates serves founders, family offices and institutions with audit, tax and advisory engineered for the long arc of a business.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-brand-deep red-glow">
                  Begin an engagement
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link to="/services" className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition hover:border-brand hover:text-brand-bright">
                  Explore services
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* right ledger card */}
          <div className="col-span-12 md:col-span-3">
            <Reveal delay={0.3}>
              <div className="relative overflow-hidden rounded-xl border border-border bg-surface/60 p-6 backdrop-blur">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Engagement Ledger</p>
                <div className="mt-4 space-y-4">
                  {stats.map((s) => (
                    <div key={s.v} className="flex items-baseline justify-between border-b border-border/60 pb-2 last:border-0">
                      <span className="font-display text-xl font-semibold text-foreground">{s.k}</span>
                      <span className="text-[11px] text-muted-foreground">{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* marquee credentials */}
        <div className="mt-20 border-y border-border bg-surface/40">
          <div className="flex items-center gap-12 overflow-hidden whitespace-nowrap py-5 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex shrink-0 items-center gap-12 pl-12"
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span>ICAI Member Firm</span><span className="text-brand">◆</span>
                  <span>Peer Reviewed</span><span className="text-brand">◆</span>
                  <span>ISO 27001 Aligned</span><span className="text-brand">◆</span>
                  <span>Empanelled — RBI · C&AG</span><span className="text-brand">◆</span>
                  <span>FEMA · Transfer Pricing</span><span className="text-brand">◆</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — bento style */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-4">
            <Reveal className="col-span-12 md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">/ 02 Philosophy</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                The work is quiet. <br /> The outcome isn't.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="col-span-12 md:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Discretion", d: "Your numbers stay your numbers. We earn trust by keeping it." },
                  { t: "Rigor", d: "Every figure traced. Every position defended. Every disclosure deliberate." },
                  { t: "Counsel", d: "We don't just file — we advise. Strategy threaded through compliance." },
                  { t: "Continuity", d: "Partners who know your business across cycles, transitions and audits." },
                ].map((c, i) => (
                  <motion.div
                    key={c.t}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.6 }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-xl border border-border bg-surface/50 p-6 transition hover:border-brand/60"
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/0 blur-2xl transition group-hover:bg-brand/20" />
                    <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES — index list */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">/ 03 Practice Areas</p>
              <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">An index of capability.</h2>
            </div>
            <Link to="/services" className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-brand-bright sm:inline-flex">
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group grid cursor-pointer grid-cols-12 items-center gap-4 py-7 transition hover:bg-surface/40"
              >
                <span className="col-span-2 font-mono text-xs text-muted-foreground sm:col-span-1">{s.n}</span>
                <h3 className="col-span-10 font-display text-2xl font-medium transition group-hover:text-brand-bright sm:col-span-4 sm:text-3xl">
                  {s.t}
                </h3>
                <p className="col-span-12 text-sm text-muted-foreground sm:col-span-6">{s.d}</p>
                <ArrowUpRight className="col-span-12 h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand sm:col-span-1 sm:justify-self-end" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST — testimonial spread */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-8">
            <Reveal className="col-span-12 lg:col-span-5">
              <div className="sticky top-32">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">/ 04 Trust</p>
                <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                  Built on relationships, <br/> measured in decades.
                </h2>
                <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
                  {["Manufacturing","SaaS","Real Estate","BFSI","Healthcare","D2C"].map((tag) => (
                    <div key={tag} className="rounded-md border border-border bg-surface/40 px-3 py-2 text-center text-xs text-muted-foreground">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="col-span-12 space-y-5 lg:col-span-7">
              {[
                { q: "ABC has been our finance conscience through three funding rounds and an acquisition. Unflappable.", a: "CFO, Series C SaaS" },
                { q: "Their tax strategy on our promoter restructuring was elegant. Defensible. Quiet brilliance.", a: "Promoter, Listed Manufacturer" },
                { q: "Audits used to feel adversarial. With ABC, they feel like a partnership in standards.", a: "Audit Committee Chair" },
              ].map((t, i) => (
                <Reveal key={t.a} delay={i * 0.08}>
                  <div className="relative rounded-xl border border-border bg-surface/40 p-8 transition hover:border-brand/40">
                    <Quote className="absolute right-6 top-6 h-8 w-8 text-brand/40" />
                    <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">"{t.q}"</p>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">— {t.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface via-background to-surface p-10 sm:p-16">
              <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-brand/20 blur-[120px]" />
              <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-brand-deep/20 blur-[120px]" />
              <div className="relative grid items-end gap-10 md:grid-cols-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">/ Begin</p>
                  <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                    Let's talk about <br/> what's on your books.
                  </h2>
                </div>
                <div className="flex flex-col items-start gap-4 md:items-end">
                  <p className="max-w-md text-sm text-muted-foreground md:text-right">
                    A short, confidential conversation with a partner. No templates, no scripts.
                  </p>
                  <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-brand-deep red-glow">
                    Request a consultation
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
