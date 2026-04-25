import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Calculator, ShieldCheck, FileText, Building2, TrendingUp, ScrollText } from "lucide-react";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-office.jpg";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Precision. Compliance. Growth." },
      { name: "description", content: "Boutique chartered accountancy firm offering tax advisory, audit, GST, company formation and financial consulting." },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      { property: "og:description", content: "Precision. Compliance. Growth. Boutique chartered accountancy for ambitious businesses." },
    ],
  }),
  component: HomePage,
});

const services = [
  { num: "01", icon: Calculator, title: "Tax Advisory", desc: "Strategic direct & indirect tax planning that protects margins and unlocks lawful efficiency." },
  { num: "02", icon: ScrollText, title: "GST Services", desc: "End-to-end GST registration, return filing, reconciliation and litigation support across India." },
  { num: "03", icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal and management audits engineered to surface risk and inspire confidence." },
  { num: "04", icon: Building2, title: "Company Formation", desc: "Incorporation, ROC filings, FEMA and secretarial compliance for startups and global entrants." },
  { num: "05", icon: TrendingUp, title: "Financial Consulting", desc: "CFO-grade insight on capital structure, valuation, due diligence and growth modelling." },
  { num: "06", icon: FileText, title: "Compliance Management", desc: "A single, calm desk for every statutory deadline, filing and regulator across your business." },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero text reveal
      gsap.from("[data-hero-line]", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.2,
      });
      gsap.from("[data-hero-sub]", { y: 30, opacity: 0, duration: 1, delay: 0.9, ease: "power3.out" });
      gsap.from("[data-hero-cta]", { y: 20, opacity: 0, duration: 0.9, delay: 1.1, stagger: 0.1, ease: "power3.out" });

      // Hero parallax
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: 18,
          scale: 1.12,
          ease: "none",
          scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      }

      // Generic reveal
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });

      // Service rows slide in
      gsap.utils.toArray<HTMLElement>("[data-service-row]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { x: i % 2 === 0 ? -80 : 80, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 1.1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });

      // About image overlap
      gsap.fromTo(
        "[data-about-img]",
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.4, ease: "power3.out",
          scrollTrigger: { trigger: "[data-about-img]", start: "top 80%" },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img
          ref={heroImgRef}
          src={heroImg}
          alt="Premium financial office at dusk"
          className="absolute inset-0 h-[115%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/70 via-[#2C2C2C]/30 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
          <div className="max-w-3xl text-white">
            <span data-hero-line className="inline-block text-xs uppercase tracking-[0.4em] text-white/70 mb-8">
              Chartered Accountants · Est. 2004
            </span>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] mb-8">
              <span data-hero-line className="block">Precision.</span>
              <span data-hero-line className="block italic text-white/90">Compliance.</span>
              <span data-hero-line className="block text-wine">Growth.</span>
            </h1>
            <p data-hero-sub className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
              ABC & Associates is a boutique chartered accountancy practice translating complex tax,
              audit and advisory work into quiet confidence — for founders, families and global businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                data-hero-cta
                to="/query"
                className="group inline-flex items-center gap-3 bg-gradient-wine text-white px-8 py-4 text-sm uppercase tracking-[0.2em] hover:shadow-luxe transition-all"
              >
                Book Consultation
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                data-hero-cta
                to="/services"
                className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-[10px] uppercase tracking-[0.4em]">
          <div className="flex flex-col items-center gap-3">
            <span>Scroll</span>
            <span className="block h-12 w-px bg-white/40" />
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="bg-ink text-white py-6 overflow-hidden border-y border-white/10">
        <div className="flex marquee whitespace-nowrap text-2xl md:text-4xl font-display">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 pr-12">
              {["Driven by Accuracy", "Built on Trust", "Focused on Compliance", "Engineered for Growth", "Quietly Excellent"].map((s, i) => (
                <span key={i} className="flex items-center gap-12">
                  <span className="italic">{s}</span>
                  <span className="text-wine">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-wine opacity-95 hidden lg:block" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <img
              data-about-img
              src={aboutImg}
              alt="ABC & Associates partners"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover shadow-luxe"
            />
            <div className="absolute -bottom-8 -right-8 bg-bone p-8 max-w-[220px] hidden md:block shadow-soft">
              <div className="font-display text-5xl text-wine leading-none">20+</div>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/70">Years guiding Indian enterprise</p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-16">
            <span data-reveal className="text-xs uppercase tracking-[0.3em] text-wine">About the firm</span>
            <h2 data-reveal className="font-display text-4xl md:text-6xl mt-4 mb-8 text-ink leading-[1.05]">
              A practice built on
              <span className="italic text-wine"> long conversations </span>
              and longer relationships.
            </h2>
            <p data-reveal className="text-ink/75 text-lg leading-relaxed mb-6">
              We started in 2004 with a simple conviction: the best chartered accountants are listeners
              first. Two decades and several hundred clients later, that conviction still shapes every
              engagement — from a first-time founder's incorporation to a multi-jurisdictional group audit.
            </p>
            <p data-reveal className="text-ink/75 text-lg leading-relaxed mb-10">
              Our partners are ICAI fellows with backgrounds across Big Four assurance, in-house finance
              and capital markets advisory. The result is a calm, senior-led practice that prefers depth
              over breadth and craft over volume.
            </p>
            <div data-reveal className="grid grid-cols-3 gap-8 pt-8 border-t border-ink/10">
              {[
                { n: "850+", l: "Clients served" },
                { n: "12", l: "Industries" },
                { n: "5", l: "Cities" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-ink">{s.n}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ink/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — alternating editorial rows */}
      <section className="bg-white py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <span data-reveal className="text-xs uppercase tracking-[0.3em] text-wine">What we do</span>
              <h2 data-reveal className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">
                Six disciplines.
                <span className="block italic text-wine">One standard.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p data-reveal className="text-ink/70 text-lg leading-relaxed">
                Each engagement is led by a partner and staffed by qualified chartered accountants —
                no juniors-by-default, no white-labelled outsourcing. Just considered, senior work.
              </p>
            </div>
          </div>

          <div className="space-y-0 border-t border-ink/15">
            {services.map((s, i) => (
              <div
                key={s.num}
                data-service-row
                className="group grid lg:grid-cols-12 gap-6 py-12 border-b border-ink/15 hover:bg-bone transition-colors duration-500 cursor-pointer items-center px-2"
              >
                <div className="lg:col-span-1 font-display text-2xl text-wine">{s.num}</div>
                <div className="lg:col-span-1">
                  <div className="h-12 w-12 rounded-full bg-gradient-wine flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <s.icon size={20} />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="font-display text-3xl text-ink group-hover:text-wine transition-colors">
                    {s.title}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-ink/70 leading-relaxed">{s.desc}</p>
                </div>
                <div className="lg:col-span-1 flex justify-end">
                  <ArrowUpRight
                    size={28}
                    className="text-ink/30 group-hover:text-wine group-hover:rotate-45 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — bold visual strip */}
      <section className="relative bg-gradient-wine text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <span data-reveal className="text-xs uppercase tracking-[0.3em] text-white/70">Why ABC</span>
          <h2 data-reveal className="font-display text-5xl md:text-7xl mt-4 mb-20 max-w-4xl leading-[0.95]">
            We were built for the work that matters most.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: "01", t: "Driven by Accuracy", d: "Every number is checked twice and signed by a partner. There is no faster route to trust." },
              { n: "02", t: "Built on Trust", d: "Long client relationships — many over fifteen years — are the only proof of work that matters." },
              { n: "03", t: "Focused on Compliance", d: "We watch the regulators so you can watch the road ahead. Filings on time, every time." },
            ].map((f) => (
              <div data-reveal key={f.n} className="border-t border-white/30 pt-8">
                <div className="text-xs tracking-[0.3em] text-white/60 mb-6">{f.n}</div>
                <h3 className="font-display text-3xl mb-4">{f.t}</h3>
                <p className="text-white/80 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-32 bg-bone">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 data-reveal className="font-display text-5xl md:text-7xl text-ink leading-[1] mb-8">
            Begin a conversation
            <span className="block italic text-wine">with our partners.</span>
          </h2>
          <p data-reveal className="text-ink/70 text-lg max-w-2xl mx-auto mb-10">
            A 30-minute introductory call, no obligations — just a clear view of where we can help.
          </p>
          <div data-reveal className="flex flex-wrap gap-4 justify-center">
            <Link to="/query" className="bg-ink text-white px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-wine transition-colors">
              Book a consultation
            </Link>
            <Link to="/contact" className="border border-ink/30 px-8 py-4 text-sm uppercase tracking-[0.2em] hover:border-wine hover:text-wine transition-colors">
              View contact details
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
