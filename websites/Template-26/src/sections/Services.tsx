import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calculator, Receipt, ShieldCheck, Building2, BriefcaseBusiness, FileCheck2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Strategic tax structuring to minimize liability while staying fully compliant." },
  { icon: Receipt, title: "GST Services", desc: "End-to-end GST registration, filing, reconciliation and advisory." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal and management audits with actionable insights." },
  { icon: Building2, title: "Company Registration", desc: "Seamless incorporation for Pvt Ltd, LLP, OPC and partnerships." },
  { icon: BriefcaseBusiness, title: "Business Consulting", desc: "Financial strategy, modelling and growth advisory tailored to you." },
  { icon: FileCheck2, title: "Compliance Services", desc: "ROC, MCA, TDS and labour law compliance — handled end to end." },
];

export default function Services() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-card", {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="py-24 bg-surface/60">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">Our Services</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold">
            Everything your business needs, under one roof
          </h2>
          <p className="mt-4 text-muted-foreground">
            From day-to-day compliance to long-term financial strategy — we cover the full spectrum.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="svc-card lift group relative rounded-2xl bg-surface border border-border p-7 shadow-card"
            >
              <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground shadow-soft group-hover:scale-110 transition">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
