import { Award, Clock, Users2, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const points = [
  { icon: Award, title: "Proven Expertise", desc: "ICAI-certified professionals with deep, sector-wise experience." },
  { icon: ShieldCheck, title: "Absolute Confidentiality", desc: "Bank-grade data security and uncompromising client privacy." },
  { icon: Clock, title: "Always On-Time", desc: "Deadlines are sacred. We file early and never miss a date." },
  { icon: Users2, title: "Personalised Attention", desc: "Dedicated relationship partners — never an anonymous call centre." },
  { icon: Sparkles, title: "Tech-First Approach", desc: "Cloud accounting, real-time dashboards and paperless workflows." },
  { icon: HeartHandshake, title: "Long-Term Partnership", desc: "We grow as you grow. 90% of our clients have stayed for 5+ years." },
];

export default function WhyUs() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <span data-reveal className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Why Choose Us
          </span>
          <h2 data-reveal className="mt-4 text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Built on trust. <span className="italic text-primary">Delivered with precision.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} data-reveal className="flex gap-5">
              <div className="shrink-0 h-12 w-12 rounded-full bg-[color:var(--brand)]/10 inline-flex items-center justify-center text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
