import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/query")({
  head: () => ({
    meta: [
      { title: "Submit a Query — ABC & Associates" },
      {
        name: "description",
        content:
          "Submit a question to ABC & Associates. A partner will respond to your tax, audit or advisory query within one working day.",
      },
      { property: "og:title", content: "Submit a Query — ABC & Associates" },
      {
        property: "og:description",
        content: "Tell us about your situation. A partner will respond within one working day.",
      },
    ],
  }),
  component: QueryPage,
});

function QueryPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Ask a question"
        title={<>A short note. <em className="italic text-ocean">A considered reply.</em></>}
        intro="Use the form below to share what's on your mind. We treat every submission in confidence and respond within one working day."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <div className="label-eyebrow mb-4">What to include</div>
              <ul className="space-y-4 text-sm text-foreground/75 leading-relaxed">
                <li className="flex gap-4"><span className="text-brass font-display">01</span>A brief description of your business or situation.</li>
                <li className="flex gap-4"><span className="text-brass font-display">02</span>The specific question or area where you'd like guidance.</li>
                <li className="flex gap-4"><span className="text-brass font-display">03</span>Any deadlines or notices you've received from authorities.</li>
                <li className="flex gap-4"><span className="text-brass font-display">04</span>Preferred contact method — phone or email.</li>
              </ul>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="bg-mist/40 p-8 md:p-10 border border-border space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Phone" name="phone" />
                  <Field label="Company" name="company" />
                </div>
                <Field label="Subject" name="subject" required />
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    Your query
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-ocean transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-cream px-7 py-3.5 text-sm hover:bg-ocean transition-colors"
                >
                  Submit Query →
                </button>
                {sent && (
                  <p className="text-sm text-ocean">Thank you — a partner will respond within one working day.</p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-ocean transition-colors"
      />
    </div>
  );
}
