import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calculator,
  Receipt,
  ClipboardCheck,
  Building2,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Strategic tax optimisation for individuals and corporates with year-round planning." },
  { icon: Receipt, title: "GST Services", desc: "End-to-end GST registration, filing, reconciliation and advisory services." },
  { icon: ClipboardCheck, title: "Audit & Assurance", desc: "Statutory, internal and forensic audits performed with rigorous accuracy." },
  { icon: Building2, title: "Company Registration", desc: "Hassle-free incorporation of Pvt Ltd, LLP, OPC and partnership firms." },
  { icon: Briefcase, title: "Business Consulting", desc: "Growth-driven advisory on financial strategy, valuation and restructuring." },
  { icon: ShieldCheck, title: "Compliance Services", desc: "ROC, MCA, TDS and labour law compliance — managed seamlessly for you." },
];

export function Services() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive financial <span className="text-gradient-primary">solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete suite of accounting, tax and advisory services tailored to your business needs.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card card-hover bg-card border border-border rounded-2xl p-7 shadow-card-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center shadow-elegant">
                <s.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <a
                href="#contact"
                className="mt-5 inline-block text-sm font-medium text-primary hover:text-primary-deep"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
