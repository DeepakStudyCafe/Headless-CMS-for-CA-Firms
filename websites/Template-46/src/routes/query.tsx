import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/query")({
  head: () => ({
    meta: [
      { title: "Submit a Query — ABC & Associates" },
      { name: "description", content: "Send us a question on tax, audit, GST or advisory matters and we'll respond within one working day." },
      { property: "og:title", content: "Submit a Query — ABC & Associates" },
      { property: "og:description", content: "Send us a question and a partner will respond within one working day." },
    ],
  }),
  component: QueryPage,
});

function QueryPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Query"
        title={<>Send us your <em className="italic font-light text-primary">question</em>.</>}
        intro="Tax notice on the desk? GST refund stuck? Tell us about it. A partner reads every query and responds within one working day."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Why write to us</p>
              <h3 className="mt-4 font-display text-2xl text-foreground">A reading, not a sales call.</h3>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                {["Reviewed by a partner, not a chatbot", "Response within one working day", "No obligation to engage further", "Confidential and privileged"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.15}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border bg-card p-8 sm:p-10"
            >
              {sent ? (
                <div className="py-12 text-center">
                  <p className="font-display text-3xl text-primary">Thank you.</p>
                  <p className="mt-3 text-sm text-muted-foreground">A partner will respond within one working day.</p>
                </div>
              ) : (
                <div className="grid gap-5">
                  <Field label="Your name" name="name" required />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone (optional)" name="phone" />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Topic</label>
                    <select className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none focus:border-primary">
                      {["Income tax", "GST / Indirect tax", "Statutory audit", "Company law / ROC", "FEMA / Cross-border", "Other"].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Your query</label>
                    <textarea
                      rows={5}
                      required
                      className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-sm text-foreground outline-none focus:border-primary"
                      placeholder="Tell us, briefly, what's on your mind."
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    Send query <span aria-hidden>→</span>
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none focus:border-primary"
      />
    </div>
  );
}
