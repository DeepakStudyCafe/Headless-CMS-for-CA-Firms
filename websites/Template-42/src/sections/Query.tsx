import { useState } from "react";

function Field({
  label,
  type = "text",
  value,
  onChange,
  textarea,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Tag: any = textarea ? "textarea" : "input";
  return (
    <label className="relative block">
      <Tag
        type={textarea ? undefined : type}
        rows={textarea ? 4 : undefined}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-transparent border-0 border-b border-foreground/25 focus:border-primary focus:outline-none py-4 text-foreground placeholder-transparent transition-colors resize-none"
        placeholder={label}
      />
      <span
        className={`pointer-events-none absolute left-0 transition-all ${
          active
            ? "top-0 text-[11px] tracking-[0.25em] uppercase text-primary"
            : "top-4 text-base text-foreground/50"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

export function Query() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="query" className="relative py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-5">
          <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
            (06) — Send a Query
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl leading-[1.1] text-balance">
            Tell us what you're working on.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed max-w-md">
            A partner reads every enquiry and responds within one business day.
            Your information is held in strict confidence.
          </p>
          <div className="mt-10 space-y-3 text-sm text-foreground/70">
            <div><span className="text-muted-foreground tracking-widest uppercase text-[11px] mr-3">Direct</span> partners@abc-associates.in</div>
            <div><span className="text-muted-foreground tracking-widest uppercase text-[11px] mr-3">Tel</span> +91 22 4001 2210</div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl bg-card border border-border p-8 md:p-12 space-y-8"
          >
            <Field label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <div className="grid md:grid-cols-2 gap-8">
              <Field label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label="Phone Number" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>
            <Field label="How can we help?" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} />

            <div className="flex items-center justify-between pt-4">
              <p className="text-xs text-muted-foreground max-w-xs">
                By submitting you agree to our confidentiality terms.
              </p>
              <button
                type="submit"
                className="rounded-full bg-foreground text-background px-7 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {sent ? "Thank you — we'll be in touch" : "Send enquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
