import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/query")({
  head: () => ({
    meta: [
      { title: "Raise a Query — ABC & Associates" },
      { name: "description", content: "Submit a tax, audit or compliance question. A partner will respond within 24 working hours." },
      { property: "og:title", content: "Raise a Query — ABC & Associates" },
      { property: "og:description", content: "Ask a partner directly." },
    ],
  }),
  component: QueryPage,
});

function QueryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Query"
        title="Ask a partner,"
        italic="directly."
        intro="A short form. A real human reply within one working day."
      />
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl bg-card border border-border p-8 lg:p-12 shadow-xl shadow-[var(--forest)]/10 grid gap-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@company.com" />
              <Field label="Phone" placeholder="+91" />
              <Field label="Subject area" placeholder="GST, Income Tax, Audit…" />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-[var(--forest)]">Your question</label>
              <textarea
                rows={6}
                placeholder="Describe the issue. Attach context if useful — turnover band, sector, period."
                className="mt-2 w-full bg-transparent border-b border-border focus:border-[var(--moss)] outline-none py-3 text-[var(--ink)] placeholder:text-[var(--ink)]/40"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
              <p className="text-xs text-[var(--ink)]/60">
                Confidentiality assured. Replies within 24 working hours.
              </p>
              <button className="inline-flex items-center gap-3 rounded-full bg-[var(--ink)] text-[var(--cream)] px-7 py-3.5 text-sm hover:bg-[var(--forest)] transition-colors">
                Submit query <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-[var(--forest)]">{label}</label>
      <input
        {...props}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-[var(--moss)] outline-none py-3 text-[var(--ink)] placeholder:text-[var(--ink)]/40"
      />
    </div>
  );
}
