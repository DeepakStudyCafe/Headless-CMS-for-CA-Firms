import { Reveal } from "@/components/Reveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ContactSection() {
  const items = [
    {
      icon: MapPin,
      title: "Visit",
      lines: ["4th Floor, Heritage Chambers", "M.G. Road, Mumbai 400001"],
    },
    {
      icon: Phone,
      title: "Call",
      lines: ["+91 22 4000 1234", "+91 98200 12345"],
    },
    {
      icon: Mail,
      title: "Write",
      lines: ["hello@abcassociates.in", "careers@abcassociates.in"],
    },
    {
      icon: Clock,
      title: "Hours",
      lines: ["Mon — Fri · 9:30 to 18:30", "Sat · By appointment"],
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10 items-end mb-16">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <div className="label-eyebrow mb-5">Get in touch</div>
              <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.1] text-balance">
                Begin with a conversation —
                <span className="italic text-ocean"> no obligation.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <p className="text-foreground/70 leading-relaxed text-[15px]">
                Tell us a little about your business. A partner will respond within one working day.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border mb-12">
          {items.map((it) => (
            <Reveal key={it.title} className="bg-background p-8 md:p-10">
              <div className="w-10 h-10 flex items-center justify-center bg-mist text-ocean mb-6">
                <it.icon size={18} strokeWidth={1.5} />
              </div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-brass mb-2">{it.title}</div>
              {it.lines.map((l) => (
                <div key={l} className="text-sm text-foreground/75 leading-relaxed">{l}</div>
              ))}
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-primary text-cream p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-display text-2xl md:text-3xl">Have a specific question?</div>
              <p className="text-cream/70 mt-2 text-sm">Submit a query and we'll route it to the right partner.</p>
            </div>
            <Link to="/query" className="bg-brass text-primary px-7 py-3.5 text-sm hover:bg-cream transition-colors">
              Submit a Query →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
