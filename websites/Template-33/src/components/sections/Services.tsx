import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calculator, Receipt, ShieldCheck, Building2, Briefcase, FileCheck2, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Strategic direct & indirect tax optimization tailored to your structure." },
  { icon: Receipt, title: "GST Services", desc: "End-to-end GST registration, filing, reconciliation and advisory." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal, and forensic audits with uncompromising rigor." },
  { icon: Building2, title: "Company Registration", desc: "Seamless incorporation for Pvt Ltd, LLP, OPC, and foreign entities." },
  { icon: Briefcase, title: "Business Consulting", desc: "CFO advisory, valuations, M&A, and growth-stage strategy." },
  { icon: FileCheck2, title: "Compliance Services", desc: "ROC filings, secretarial, FEMA, labour & ongoing regulatory upkeep." },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".svc-head > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } });
      gsap.fromTo(".svc-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ".svc-grid", start: "top 85%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-cream-deep relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="svc-head text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-deep">Our Services</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight">
            Comprehensive <span className="gold-text italic">financial</span> expertise.
          </h2>
          <p className="text-ink-soft mt-5">A full spectrum of advisory, compliance, and assurance services — built around your business goals.</p>
        </div>

        <div className="svc-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="svc-card group relative p-8 rounded-3xl bg-cream border border-gold/10 hover:border-gold/40 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-luxe overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold/5 group-hover:bg-gold/15 transition-colors duration-700" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-white shadow-luxe mb-6">
                  <s.icon size={26} />
                </div>
                <h3 className="font-display text-2xl text-ink mb-3">{s.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed mb-6">{s.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-gold-deep group-hover:gap-3 transition-all">
                  Learn more <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
