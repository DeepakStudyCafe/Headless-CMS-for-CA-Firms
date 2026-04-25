import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABC & Associates" },
      { name: "description", content: "Visit our New Delhi office, call, or write to us. ABC & Associates, Chartered Accountants." },
      { property: "og:title", content: "Contact — ABC & Associates" },
      { property: "og:description", content: "Let's read the numbers together." },
    ],
  }),
  component: ContactPage,
});

const CARDS = [
  { label: "Visit", glyph: "✦", lines: ["204, Maple Heights", "Civil Lines", "New Delhi 110054, India"] },
  { label: "Call", glyph: "❖", lines: ["+91 11 4000 0000", "Mon–Sat · 10:00 to 18:30 IST"] },
  { label: "Write", glyph: "✤", lines: ["hello@abcassociates.in", "careers@abcassociates.in"] },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's read the <em className="italic font-light text-primary">numbers</em> together.</>}
        intro="Drop in for a coffee, or send us a note. Whichever feels easier."
      />

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <article className="h-full rounded-3xl border border-border bg-card p-8 transition hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{c.label}</p>
                  <span className="text-2xl text-primary/50">{c.glyph}</span>
                </div>
                <div className="mt-8 space-y-1 font-display text-xl leading-snug text-foreground">
                  {c.lines.map((l) => (<p key={l}>{l}</p>))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.21%2C28.66%2C77.25%2C28.70&layer=mapnik"
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
