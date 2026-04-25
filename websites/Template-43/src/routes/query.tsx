import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHeader } from "@/components/Layout";
import { useGsapReveal } from "@/hooks/useGsap";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/query")({
  head: () => ({
    meta: [
      { title: "Send a Query — ABC & Associates" },
      { name: "description", content: "Reach the partners directly. Tax, GST, audit or advisory — we respond within one business day." },
      { property: "og:title", content: "Send a Query — ABC & Associates" },
      { property: "og:description", content: "A direct line to our partners. We respond within one business day." },
    ],
  }),
  component: QueryPage,
});

function QueryPage() {
  useGsapReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <Layout>
      <PageHeader eyebrow="Query" title="Speak to a partner directly." />

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6" data-reveal>
            <h2 className="font-display text-4xl text-ink leading-tight">
              No gatekeepers, <span className="italic text-wine">no scripts.</span>
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed">
              Every query lands in a partner's inbox. We read it personally, decide who is best placed
              to respond, and revert within one business day — usually with a question or two of our own.
            </p>
            <ul className="space-y-3 pt-6 text-sm text-ink/75">
              {["Confidential by default", "Partner-led response", "No obligation to engage"].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-wine" /> {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7" data-reveal>
            {sent ? (
              <div className="bg-gradient-wine text-white p-12 shadow-luxe">
                <h3 className="font-display text-3xl mb-3">Thank you, {form.name.split(" ")[0] || "friend"}.</h3>
                <p className="text-white/85">A partner will be in touch within one business day at {form.email}.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="bg-white p-10 lg:p-12 shadow-soft space-y-6"
              >
                {[
                  { k: "name", l: "Your name", type: "text" },
                  { k: "email", l: "Email", type: "email" },
                  { k: "phone", l: "Phone", type: "tel" },
                ].map((f) => (
                  <div key={f.k}>
                    <label className="text-xs uppercase tracking-[0.25em] text-ink/60">{f.l}</label>
                    <input
                      required
                      type={f.type}
                      value={form[f.k as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                      className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-lg text-ink focus:border-wine outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-ink/60">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-lg text-ink focus:border-wine outline-none resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-ink text-white py-5 text-sm uppercase tracking-[0.25em] hover:bg-wine transition-colors"
                >
                  Send to a partner
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
