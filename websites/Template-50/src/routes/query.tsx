import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { useFadeIn } from "@/hooks/useFadeIn";

export const Route = createFileRoute("/query")({
  head: () => ({
    meta: [
      { title: "Query — ABC & Associates" },
      { name: "description", content: "Submit a query and a partner will respond personally within two working days." },
      { property: "og:title", content: "Query — ABC & Associates" },
      { property: "og:description", content: "A modern form. A considered reply." },
    ],
  }),
  component: QueryPage,
});

function QueryPage() {
  const ref = useFadeIn<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <div ref={ref}>
        <PageHeader
          eyebrow="A query"
          title="Ask anything. Quietly."
          subtitle="Whether it is a passing question on tax, a structuring dilemma, or simply a wish to be introduced — write to us. A partner will respond personally within two working days."
        />

        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 grid md:grid-cols-12 gap-12">
          <aside className="md:col-span-4 space-y-6" data-fade>
            <div className="rounded-3xl bg-gradient-to-br from-navy to-blue text-cream-soft p-8 shadow-card">
              <p className="eyebrow !text-blue-light mb-3">Direct</p>
              <p className="font-display text-2xl">queries@abcassociates.in</p>
              <p className="eyebrow !text-blue-light mt-6 mb-3">Telephone</p>
              <p className="font-display text-2xl">+91 80 4567 8900</p>
              <p className="eyebrow !text-blue-light mt-6 mb-3">Hours</p>
              <p className="text-sm text-cream/80 leading-relaxed">Mon–Fri · 09:30 – 18:30 IST<br />Sat · By appointment</p>
            </div>
            <div className="rounded-3xl bg-cream-soft border border-border p-7 shadow-soft">
              <p className="text-sm italic text-navy/75 leading-relaxed">
                "Every message is read by a partner before it is acted on. Your reply will not be a template."
              </p>
            </div>
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="md:col-span-8 rounded-3xl bg-cream-soft border border-border p-8 md:p-10 shadow-card space-y-6"
            data-fade
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="field">
                <label>Your name</label>
                <input required placeholder="Full name" />
              </div>
              <div className="field">
                <label>Email</label>
                <input required type="email" placeholder="name@email.com" />
              </div>
              <div className="field">
                <label>Telephone</label>
                <input placeholder="Optional" />
              </div>
              <div className="field">
                <label>Subject area</label>
                <select>
                  <option>Audit & Assurance</option>
                  <option>Taxation</option>
                  <option>Corporate Advisory</option>
                  <option>Compliance & ROC</option>
                  <option>Risk & Forensic</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>Your message</label>
              <textarea required rows={5} placeholder="A few sentences will do." />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs text-navy/60 italic">We reply within two working days.</p>
              <button type="submit" disabled={sent} className="btn-primary disabled:opacity-60">
                {sent ? "Thank you — received." : "Send query"} <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </PageShell>
  );
}
