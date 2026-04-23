import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calculator, FileText, ShieldCheck, Building2, Briefcase, ClipboardCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Strategic tax advisory & filing for individuals and corporations to minimise liability legally." },
  { icon: FileText, title: "GST Services", desc: "End-to-end GST registration, returns, audits and refund management with precision." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal and forensic audits delivered to the highest professional standards." },
  { icon: Building2, title: "Company Registration", desc: "Private Ltd, LLP, OPC and NGO incorporations handled end-to-end with full compliance." },
  { icon: Briefcase, title: "Business Consulting", desc: "Financial strategy, valuation and growth advisory tailored to your business goals." },
  { icon: ClipboardCheck, title: "Compliance", desc: "ROC, MCA, TDS and labour law compliance — never miss a deadline again." },
];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".svc-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".svc-grid",
            start: "top 85%",
            once: true,
          },
        }
      );
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="py-24 bg-pink-light/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-pink font-semibold uppercase tracking-[0.2em] text-xs">What We Offer</span>
          <h2 className="text-4xl md:text-5xl text-navy font-bold mt-3 mb-4">Comprehensive CA Services</h2>
          <p className="text-muted-foreground">From day-one compliance to long-term advisory — one trusted partner for every financial milestone.</p>
        </div>

        <div className="svc-grid grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s) => (
            <div
              key={s.title}
              className="svc-card group bg-white rounded-2xl p-7 shadow-soft border-t-4 border-transparent hover:border-pink hover:-translate-y-2 hover:shadow-elegant hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-pink-light flex items-center justify-center mb-5 group-hover:gradient-pink transition-all">
                <s.icon className="h-7 w-7 text-pink group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
