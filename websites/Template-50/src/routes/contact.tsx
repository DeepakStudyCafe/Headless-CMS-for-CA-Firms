import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { useFadeIn } from "@/hooks/useFadeIn";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABC & Associates" },
      { name: "description", content: "Visit, call or write. ABC & Associates, Bengaluru." },
      { property: "og:title", content: "Contact — ABC & Associates" },
      { property: "og:description", content: "An introduction is the simplest first step." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const ref = useFadeIn<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <div ref={ref}>
        <PageHeader
          eyebrow="Contact"
          title="An introduction, simply."
          subtitle="Visit us in Bengaluru, send a note, or pick up the telephone — the first conversation is always with a partner."
        />

        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-5" data-fade>
            {[
              { e: "Office", v: <>Suite 402, Lotus Heights<br />14, MG Road<br />Bengaluru 560001, Karnataka</> },
              { e: "Telephone", v: <>+91 80 4567 8900<br />+91 98450 12345</> },
              { e: "Email", v: <>hello@abcassociates.in<br />partners@abcassociates.in</> },
              { e: "Hours", v: <>Mon–Fri · 09:30 – 18:30 IST<br />Sat · By appointment</> },
            ].map((i) => (
              <div key={i.e} className="rounded-2xl bg-cream-soft border border-border p-6 shadow-soft">
                <p className="eyebrow mb-2">{i.e}</p>
                <p className="font-display text-xl text-navy leading-snug">{i.v}</p>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="md:col-span-7 rounded-3xl bg-gradient-to-br from-navy to-blue text-cream-soft p-8 md:p-10 shadow-card space-y-6 relative overflow-hidden"
            data-fade
          >
            <div className="blob bg-blue-light/30 w-[320px] h-[320px] -top-24 -right-12" />
            <div className="relative space-y-6">
              <div>
                <p className="eyebrow !text-blue-light">Write to us</p>
                <h2 className="font-display text-3xl md:text-4xl text-cream-soft mt-2">Tell us a little about your enterprise.</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="field">
                  <label className="!text-blue-light">Name</label>
                  <input required className="!bg-cream-soft/15 !border-cream-soft/25 !text-cream-soft placeholder:!text-cream/50" />
                </div>
                <div className="field">
                  <label className="!text-blue-light">Email</label>
                  <input required type="email" className="!bg-cream-soft/15 !border-cream-soft/25 !text-cream-soft" />
                </div>
              </div>
              <div className="field">
                <label className="!text-blue-light">Organisation</label>
                <input className="!bg-cream-soft/15 !border-cream-soft/25 !text-cream-soft" placeholder="Optional" />
              </div>
              <div className="field">
                <label className="!text-blue-light">How can we help?</label>
                <textarea required rows={5} className="!bg-cream-soft/15 !border-cream-soft/25 !text-cream-soft" />
              </div>
              <button type="submit" disabled={sent} className="btn-primary !bg-cream-soft !text-navy disabled:opacity-60" style={{ background: "linear-gradient(135deg, var(--cream-soft), var(--blue-light))" }}>
                {sent ? "Message received." : "Send message"} <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        </section>

        {/* Map */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24" data-fade>
          <div className="rounded-3xl overflow-hidden border border-border shadow-card aspect-[21/9]">
            <iframe
              title="Office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.6055%2C12.9698%2C77.6155%2C12.9758&amp;layer=mapnik&amp;marker=12.9728%2C77.6105"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <p className="eyebrow mt-4 text-muted-foreground">MG Road, Bengaluru</p>
        </section>
      </div>
    </PageShell>
  );
}
