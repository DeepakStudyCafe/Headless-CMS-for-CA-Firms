import { useState } from "react";

function FloatingInput({
  label,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const [val, setVal] = useState("");
  const filled = val.length > 0;
  const cls =
    "peer w-full bg-transparent outline-none border-b border-border focus:border-gold transition pt-6 pb-2 text-foreground";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          rows={4}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          required={required}
          className={cls + " resize-none"}
        />
      ) : (
        <input
          type={type}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          required={required}
          className={cls}
        />
      )}
      <span
        className={`absolute left-0 transition-all pointer-events-none text-muted-foreground ${
          filled ? "top-0 text-xs text-gold" : "top-6 text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gold"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

export function Contact() {
  return (
    <>
      <section id="query" className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2.5rem] bg-card ring-1 ring-border shadow-luxe p-8 sm:p-14 grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="text-gold">◆</span> Send a query
              </div>
              <h2 className="mt-4 font-display text-4xl leading-tight">
                Let's start a <em className="gradient-text-gold not-italic">conversation.</em>
              </h2>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Share a few details and a partner will personally respond within one business day.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <div className="flex gap-3"><span className="text-gold">✆</span> +91 98765 43210</div>
                <div className="flex gap-3"><span className="text-gold">✉</span> hello@abcassociates.in</div>
                <div className="flex gap-3"><span className="text-gold">⌖</span> Bandra Kurla Complex, Mumbai 400051</div>
              </div>
            </div>

            <form
              className="lg:col-span-3 grid sm:grid-cols-2 gap-x-6 gap-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you — we'll be in touch shortly.");
              }}
            >
              <FloatingInput label="Full name" required />
              <FloatingInput label="Email address" type="email" required />
              <FloatingInput label="Phone" type="tel" />
              <FloatingInput label="Subject" />
              <div className="sm:col-span-2">
                <FloatingInput label="How can we help?" textarea required />
              </div>
              <div className="sm:col-span-2 mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:bg-foreground transition shadow-luxe"
                >
                  Send message <span className="text-gold">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Career strip */}
      <section id="career" className="py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-6 rounded-[2.5rem] bg-primary text-primary-foreground p-10 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-luxe">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">◆ Careers</div>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl max-w-xl leading-tight">
              Build your career at a firm that <em className="gradient-text-gold not-italic">invests in you.</em>
            </h3>
          </div>
          <a href="mailto:careers@abcassociates.in" className="inline-flex items-center gap-2 rounded-full bg-card text-primary px-7 py-4 text-sm font-medium hover:bg-gold transition">
            View openings <span>→</span>
          </a>
        </div>
      </section>

      <section id="contact" className="sr-only">Contact</section>
    </>
  );
}
