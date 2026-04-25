import { MapPin, Phone, Mail } from "lucide-react";

const blocks = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: ["Level 12, Maker Maxity", "Nariman Point, Mumbai 400 021"],
  },
  {
    icon: Phone,
    title: "By Phone",
    lines: ["+91 22 4001 2210", "Mon — Fri · 09:30 to 18:30 IST"],
  },
  {
    icon: Mail,
    title: "By Email",
    lines: ["partners@abc-associates.in", "careers@abc-associates.in"],
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
          (08) — Contact
        </div>
        <h2 className="mt-4 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl text-balance">
          Three offices. <span className="italic">One conversation</span> away.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`relative rounded-3xl p-8 md:p-10 border border-border ${
                  i === 1 ? "bg-ink text-background md:translate-y-6" : "bg-card"
                }`}
              >
                <div
                  className={`h-12 w-12 rounded-2xl grid place-items-center ${
                    i === 1 ? "bg-primary/30" : "bg-sky/40"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className={`mt-6 text-xs tracking-[0.3em] uppercase ${i === 1 ? "text-background/60" : "text-muted-foreground"}`}>
                  {b.title}
                </div>
                <div className="mt-3 space-y-1 font-display text-xl leading-snug">
                  {b.lines.map((l) => <div key={l}>{l}</div>)}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-4 text-sm text-foreground/70">
          {["Mumbai · HQ", "Bengaluru · Indiranagar", "Pune · Koregaon Park"].map((c) => (
            <div key={c} className="flex items-center gap-3 border-t border-border pt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
