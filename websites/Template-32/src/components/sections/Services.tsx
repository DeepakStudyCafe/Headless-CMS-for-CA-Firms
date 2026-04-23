import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calculator, Receipt, ShieldCheck, Building2, Briefcase, FileCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Strategic direct & indirect tax planning to minimise liabilities and maximise growth." },
  { icon: Receipt, title: "GST Services", desc: "End-to-end GST registration, returns, reconciliation and litigation support." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal and forensic audits delivering transparency and trust." },
  { icon: Building2, title: "Company Registration", desc: "Incorporation of Pvt Ltd, LLP, OPC and partnership firms with full compliance." },
  { icon: Briefcase, title: "Business Consulting", desc: "CFO advisory, valuations, MIS and strategic financial planning for scale." },
  { icon: FileCheck, title: "Compliance Services", desc: "ROC, FEMA, labour and regulatory compliance handled end-to-end." },
];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-head > *", {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from(".svc-card", {
        opacity: 0, y: 40, duration: 0.7, stagger: 0.1,
        scrollTrigger: { trigger: ".svc-grid", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="svc-head text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">Our Services</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Complete <span className="text-gradient-gold">financial expertise</span></h2>
          <p className="text-muted-foreground">From compliance to consulting — a full suite of services delivered with precision and care.</p>
        </div>

        <div className="svc-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="svc-card group glass rounded-2xl p-7 hover-lift cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mb-5 group-hover:from-gold/30 transition">
                <s.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
