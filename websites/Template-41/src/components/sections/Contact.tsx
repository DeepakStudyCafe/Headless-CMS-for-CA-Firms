import { useGsapReveal } from "@/hooks/useGsapReveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const items = [
  { icon: MapPin, title: "Visit Our Office", lines: ["ABC & Associates", "401, Trade Centre, Bandra Kurla Complex", "Mumbai, Maharashtra 400051, India"] },
  { icon: Phone, title: "Call Us", lines: ["+91 22 4000 1234", "+91 98200 12345"] },
  { icon: Mail, title: "Email Us", lines: ["partners@abcassociates.in", "careers@abcassociates.in"] },
  { icon: Clock, title: "Working Hours", lines: ["Mon – Fri: 9:30 AM – 6:30 PM", "Saturday: 10:00 AM – 2:00 PM", "Sunday: Closed"] },
];

export function Contact() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section id="contact" ref={ref as never} className="py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div data-reveal className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
            Get In Touch
          </div>
          <h2 data-reveal className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            We'd love to <span className="italic text-gradient-gold">hear from you</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                data-reveal
                className="p-8 rounded-2xl bg-background border border-border hover:border-gold hover:shadow-[var(--shadow-soft)] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-soft flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3">{it.title}</h3>
                {it.lines.map((l) => (
                  <p key={l} className="text-sm text-muted-foreground leading-relaxed">{l}</p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}