import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/query")({
  head: () => ({
    meta: [
      { title: "Send a Query — ABC & Associates" },
      { name: "description", content: "Have a question for our partners? Send a quick query and we'll respond within one working day." },
      { property: "og:title", content: "Send a query — ABC & Associates" },
      { property: "og:description", content: "We respond within one working day." },
    ],
  }),
  component: QueryPage,
});

function QueryPage() {
  useReveal();
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-32 lg:pt-40">
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 reveal-up">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-6">— Ask a question</p>
          <h1 className="font-display text-5xl lg:text-6xl text-primary leading-[1.05] text-balance">
            A short note. A considered reply.
          </h1>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Whether it's a clarification on a notice you've received, a query on a transaction
            you're considering, or simply an introduction — write to us. A partner will respond
            within one working day.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent">For new clients</div>
              <div className="text-primary mt-1">hello@abcassociates.in</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent">For existing clients</div>
              <div className="text-primary mt-1">care@abcassociates.in</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 reveal-up">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-lift">
            {sent ? (
              <div className="py-12 text-center">
                <div className="font-display text-3xl text-primary">Thank you.</div>
                <p className="mt-3 text-foreground/70">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Your name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Phone (optional)" name="phone" />
                <Field label="Subject" name="subject" required />
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2.5">Your query</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm transition focus-ring-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground shadow-elegant hover:bg-[color:var(--sand)] transition"
                >
                  Send query
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2.5">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm transition focus-ring-accent"
      />
    </div>
  );
}
