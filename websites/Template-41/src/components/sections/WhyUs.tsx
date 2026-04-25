import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Award, HandshakeIcon, Clock, UserCog, Headphones, Lock } from "lucide-react";

const points = [
  { icon: Award, title: "Experienced Chartered Accountants",
    desc: "Partners with 15+ years of practice across Big 4 backgrounds, mid-market firms and industry CFO roles." },
  { icon: HandshakeIcon, title: "Transparent & Ethical Practices",
    desc: "Clear scope, upfront pricing and uncompromising adherence to ICAI's professional code of ethics." },
  { icon: Clock, title: "Timely Compliance",
    desc: "Calendar-driven workflows and proactive reminders ensure you never miss a statutory deadline." },
  { icon: UserCog, title: "Personalized Solutions",
    desc: "No template advice — every engagement is shaped around your industry, scale and long-term goals." },
  { icon: Headphones, title: "Dedicated Client Support",
    desc: "A named partner and relationship manager for every client, with response SLAs in writing." },
  { icon: Lock, title: "Confidential & Secure",
    desc: "Encrypted document exchange, secure data rooms and strict NDA-backed handling of sensitive financials." },
];

export function WhyUs() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section ref={ref as never} className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div data-reveal className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
            Why Choose Us
          </div>
          <h2 data-reveal className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Built for clients who value <span className="italic text-gradient-gold">accuracy</span>, calm and clarity.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                data-reveal
                className="group p-10 bg-background hover:bg-secondary transition-colors"
              >
                <Icon className="h-10 w-10 text-gold mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}