import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABC & Associates" },
      { name: "description", content: "Visit, call or email ABC & Associates. Our office is on MG Road, Bengaluru." },
      { property: "og:title", content: "Contact ABC & Associates" },
      { property: "og:description", content: "Bengaluru office. Mon–Sat. By appointment." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  return (
    <div className="pt-32 lg:pt-40">
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-6 reveal-up">— Reach the firm</p>
        <h1 className="font-display text-5xl lg:text-7xl text-primary leading-[1.05] max-w-4xl text-balance reveal-up">
          Drop in. Pick up the phone. Or simply write.
        </h1>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-6">
          <Card icon={MapPin} title="Office" lines={["203, Pinnacle Heights", "MG Road, Bengaluru — 560001", "Karnataka, India"]} className="lg:col-span-5" />
          <Card icon={Phone} title="Telephone" lines={["+91 80 4123 7890", "+91 98450 12345"]} className="lg:col-span-3" />
          <Card icon={Mail} title="Email" lines={["hello@abcassociates.in", "care@abcassociates.in"]} className="lg:col-span-4" />
          <Card icon={Clock} title="Hours" lines={["Monday — Friday  ·  9:30am – 7:00pm", "Saturday  ·  10:00am – 2:00pm", "By appointment otherwise"]} className="lg:col-span-7" />
          <div className="lg:col-span-5 bg-primary text-primary-foreground rounded-2xl p-8 lg:p-10 grain reveal-up">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">For partners</div>
            <p className="mt-4 font-display text-2xl leading-snug">
              Looking to refer an engagement or co-advise? Write directly to a partner.
            </p>
            <a href="mailto:partners@abcassociates.in" className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:underline">
              partners@abcassociates.in →
            </a>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 reveal-up">
          <div className="aspect-[16/8] overflow-hidden rounded-2xl border border-border">
            <iframe
              title="ABC & Associates location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.59%2C12.96%2C77.62%2C12.98&layer=mapnik"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  lines,
  className = "",
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  lines: string[];
  className?: string;
}) {
  return (
    <div className={`bg-card border border-border rounded-2xl p-8 lg:p-10 reveal-up ${className}`}>
      <div className="flex items-center gap-3 text-accent">
        <Icon size={20} />
        <span className="text-xs uppercase tracking-[0.25em]">{title}</span>
      </div>
      <div className="mt-5 space-y-1.5 font-display text-xl text-primary">
        {lines.map((l) => <div key={l}>{l}</div>)}
      </div>
    </div>
  );
}
