import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import type { FormEvent } from "react";

export const Route = createFileRoute("/query")({
  head: () => ({
    meta: [
      { title: "Submit a Query — ABC & Associates" },
      { name: "description", content: "Have a tax, audit, or compliance question? Send a confidential query to our partners." },
      { property: "og:title", content: "Submit a Query — ABC & Associates" },
      { property: "og:description", content: "A confidential channel for tax, audit, and compliance questions." },
    ],
  }),
  component: QueryPage,
});

const TOPICS = ["Income Tax", "GST & Indirect Tax", "Statutory Audit", "ROC / FEMA", "Virtual CFO", "Other"];

function QueryPage() {
  const submit = (e: FormEvent) => e.preventDefault();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Query"
        title="Ask the partners, in confidence."
        subtitle="A direct channel for technical questions on tax, audit, GST, and compliance — typically answered within 48 hours."
      />
      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-4 space-y-8">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-forest-3 mb-4">— What you can ask</div>
              <ul className="space-y-3 text-ink-soft text-[15px]">
                {TOPICS.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-4 bg-forest-3" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-forest-1 text-cream p-7">
              <p className="font-display text-2xl leading-snug">"Plain‑English answers, with the section reference."</p>
              <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-forest-4">— Our promise to enquirers</p>
            </div>
          </aside>

          <form onSubmit={submit} className="lg:col-span-8 bg-card border border-border p-8 lg:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField label="Full name" name="name" />
              <FormField label="Email" name="email" type="email" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField label="Phone (optional)" name="phone" />
              <div>
                <label className="text-[10px] tracking-[0.3em] uppercase text-ink-soft">Topic</label>
                <select className="w-full mt-2 border-b border-border bg-transparent py-3 outline-none focus:border-forest-3" name="topic">
                  {TOPICS.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <FormField label="Subject" name="subject" />
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-ink-soft">Your question</label>
              <textarea
                rows={6}
                name="question"
                className="w-full mt-2 border-b border-border bg-transparent py-3 outline-none focus:border-forest-3 resize-none"
                placeholder="Describe the matter — facts, figures, what you have already considered…"
              />
            </div>
            <p className="text-xs text-ink-soft">All queries are treated as privileged and confidential.</p>
            <button className="inline-flex items-center gap-3 bg-forest-3 text-cream px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-forest-1 transition-colors">
              Send query →
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function FormField({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-ink-soft">{label}</label>
      <input name={name} type={type} className="w-full mt-2 border-b border-border bg-transparent py-3 outline-none focus:border-forest-3 transition-colors" />
    </div>
  );
}
