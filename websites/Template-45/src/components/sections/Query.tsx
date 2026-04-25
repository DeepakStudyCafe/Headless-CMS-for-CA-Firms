import { useState } from "react";
import { Send } from "lucide-react";

function Field({ label, type = "text", textarea = false, name }: { label: string; type?: string; textarea?: boolean; name: string }) {
  const [val, setVal] = useState("");
  const filled = val.length > 0;
  const common =
    "peer w-full bg-transparent border-0 border-b border-[color:var(--cream)]/30 focus:border-[color:var(--rose)] outline-none px-0 py-3 text-[color:var(--cream)] placeholder-transparent transition-colors";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder={label}
          className={common + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder={label}
          className={common}
        />
      )}
      <label
        className={`pointer-events-none absolute left-0 transition-all duration-300 text-[color:var(--cream)]/60 ${
          filled ? "-top-2 text-xs text-[color:var(--rose)]" : "top-3 text-base"
        } peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[color:var(--rose)]`}
      >
        {label}
      </label>
    </div>
  );
}

export function Query() {
  return (
    <section id="query" className="relative py-24 sm:py-32 bg-[color:var(--ink)] text-[color:var(--cream)] overflow-hidden">
      <div className="blob top-10 left-10 h-80 w-80 bg-[color:var(--wine)]/50" />
      <div className="blob bottom-10 right-10 h-96 w-96 bg-[color:var(--rose)]/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--rose)] font-medium">
              Ask us anything
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05]">
              Have a question?<br /><span className="italic text-[color:var(--rose)]">Let's talk.</span>
            </h2>
            <p className="mt-6 text-[color:var(--cream)]/70 max-w-md leading-relaxed">
              Drop your details and a partner from the relevant practice will personally
              respond within 4 working hours.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--cream)]/50">Direct line</div>
                <div className="mt-2 font-display text-xl">+91 98200 12345</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--cream)]/50">Email</div>
                <div className="mt-2 font-display text-xl">hello@abcca.in</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-7 relative rounded-3xl glass-dark p-8 sm:p-10 shadow-[var(--shadow-luxe)]"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <Field name="name" label="Full name" />
              <Field name="email" label="Email address" type="email" />
              <Field name="phone" label="Phone number" type="tel" />
              <Field name="subject" label="Subject" />
              <div className="sm:col-span-2">
                <Field name="message" label="Tell us about your requirement" textarea />
              </div>
            </div>
            <button
              type="submit"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[color:var(--rose)] text-[color:var(--ink)] px-7 py-4 text-sm font-medium hover:bg-[color:var(--cream)] transition-colors"
            >
              Send enquiry
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
