import { useReveal } from "@/hooks/useReveal";

export function ContactBlock() {
  const ref = useReveal();
  return (
    <section ref={ref as never} id="contact" className="relative py-28 bg-[var(--ink)] text-[var(--cream)] overflow-hidden">
      <div className="absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-[var(--moss)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div data-reveal className="text-xs tracking-[0.3em] uppercase text-[var(--moss)] mb-5">◇ Begin a Conversation</div>
          <h2 data-reveal className="font-display text-5xl lg:text-6xl leading-[1.05] text-balance">
            Tell us where the
            <span className="italic text-[var(--sage)]"> numbers </span>
            need attention.
          </h2>
          <p data-reveal className="mt-6 text-[var(--sage)]/80 max-w-md">
            A 30-minute first call, on us. We'll listen, take notes, and tell you
            honestly whether we're the right fit.
          </p>

          <div className="mt-10 space-y-6">
            {[
              ["Studio", "4th Floor, Heritage Square,\nMG Road, Bengaluru — 560001"],
              ["Phone", "+91 80 0000 0000"],
              ["Email", "hello@abcassociates.in"],
              ["Hours", "Mon–Fri · 9:30 AM to 6:30 PM IST"],
            ].map(([k, v]) => (
              <div key={k} data-reveal className="flex gap-6 border-t border-[var(--moss)]/30 pt-5">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--moss)] w-20 pt-1">{k}</div>
                <div className="text-[var(--sage)] whitespace-pre-line">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <form
          data-reveal
          onSubmit={(e) => e.preventDefault()}
          className="lg:col-span-7 lg:pl-10 grid gap-6 content-start"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Name" placeholder="Your full name" />
            <Field label="Company" placeholder="Where you work" />
            <Field label="Email" type="email" placeholder="you@company.com" />
            <Field label="Phone" placeholder="+91" />
          </div>
          <Field label="Service of interest" placeholder="e.g. statutory audit, GST, virtual CFO" />
          <div>
            <label className="text-[10px] tracking-[0.3em] uppercase text-[var(--moss)]">Brief</label>
            <textarea
              rows={5}
              placeholder="A short note about what you need."
              className="mt-2 w-full bg-transparent border-b border-[var(--moss)]/40 focus:border-[var(--sage)] outline-none py-3 text-[var(--cream)] placeholder:text-[var(--sage)]/40"
            />
          </div>
          <button className="justify-self-start mt-4 inline-flex items-center gap-3 rounded-full bg-[var(--cream)] text-[var(--ink)] px-7 py-3.5 text-sm hover:bg-[var(--sage)] transition-colors">
            Send enquiry <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-[var(--moss)]">{label}</label>
      <input
        {...props}
        className="mt-2 w-full bg-transparent border-b border-[var(--moss)]/40 focus:border-[var(--sage)] outline-none py-3 text-[var(--cream)] placeholder:text-[var(--sage)]/40"
      />
    </div>
  );
}
