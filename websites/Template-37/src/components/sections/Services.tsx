import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calculator,
  Receipt,
  ShieldCheck,
  Building2,
  Briefcase,
  FileCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Strategic tax optimization for individuals and corporations to maximize savings within compliance." },
  { icon: Receipt, title: "GST Services", desc: "End-to-end GST registration, filing, reconciliation, and advisory for seamless compliance." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal, and management audits delivered with precision and integrity." },
  { icon: Building2, title: "Company Registration", desc: "Effortless incorporation of LLP, Pvt Ltd, OPC and partnership firms with full ROC support." },
  { icon: Briefcase, title: "Business Consulting", desc: "Strategic financial advisory to scale operations, optimize cost, and unlock growth." },
  { icon: FileCheck, title: "Compliance Services", desc: "ROC, TDS, ITR, and regulatory filings handled accurately and on time, every time." },
];

export default function Services() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".srv-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
        },
      );
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="relative py-28 bg-gradient-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Our Services</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive <span className="text-gradient-gold">financial solutions</span>
          </h2>
          <p className="text-muted-foreground">
            A full suite of CA services crafted with precision, transparency, and
            an unwavering commitment to your business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="srv-card group glass-card gold-border-glow rounded-2xl p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center text-primary-foreground mb-6 group-hover:rotate-6 transition-transform duration-500">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-6 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition">
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
