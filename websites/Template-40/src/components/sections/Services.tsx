import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calculator, Receipt, ClipboardCheck, Building2, Briefcase, ShieldCheck, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Strategic income tax planning for individuals & corporates — minimize liability, maximize savings, stay compliant." },
  { icon: Receipt, title: "GST Services", desc: "End-to-end GST registration, return filing, reconciliation, and litigation support tailored to your business." },
  { icon: ClipboardCheck, title: "Audit & Assurance", desc: "Statutory, internal, and tax audits delivered with precision, independence, and actionable insights." },
  { icon: Building2, title: "Company Registration", desc: "Seamless incorporation of Pvt Ltd, LLP, OPC, and other entities with full ROC and statutory support." },
  { icon: Briefcase, title: "Business Consulting", desc: "CFO advisory, financial modeling, and growth strategy designed to accelerate your business journey." },
  { icon: ShieldCheck, title: "Compliance Services", desc: "ROC, TDS, PF, ESI, and labour-law compliance handled end-to-end so you can focus on what matters." },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".srv-head",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1,
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(".srv-card",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: ".srv-grid", start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-gradient-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="srv-head text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">What we do</div>
          <h2 className="srv-head text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Comprehensive services for <span className="text-gradient-maroon">every financial need</span>
          </h2>
          <p className="srv-head text-muted-foreground text-lg">
            From tax to audit, compliance to consulting — one trusted partner for your entire financial journey.
          </p>
        </div>

        <div className="srv-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="srv-card card-lift group bg-card rounded-2xl p-8 border border-border shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-smooth" />
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-charcoal">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
