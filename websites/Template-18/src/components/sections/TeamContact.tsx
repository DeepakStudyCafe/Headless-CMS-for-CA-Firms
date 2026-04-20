import { motion } from "framer-motion";
import { useRef } from "react";
import { Linkedin, ChevronLeft, ChevronRight, MapPin, Phone, Mail, Clock } from "lucide-react";

const TEAM = [
  { name: "Aakash Bhandari", role: "Managing Partner · FCA", bio: "20+ years in audit, M&A and group reporting.", initials: "AB" },
  { name: "Bhavna Chawla", role: "Partner · Direct Tax", bio: "Litigation, assessments, transfer pricing.", initials: "BC" },
  { name: "Chetan Rao", role: "Partner · Indirect Tax", bio: "GST advisory, refunds and customs.", initials: "CR" },
  { name: "Diya Kapoor", role: "Partner · Advisory", bio: "Virtual CFO, modelling, valuations.", initials: "DK" },
  { name: "Eshan Mehta", role: "Director · Audit", bio: "Statutory & internal audit programs.", initials: "EM" },
  { name: "Farah Sheikh", role: "Director · Compliance", bio: "ROC, FEMA, secretarial advisory.", initials: "FS" },
];

export function TeamScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "l" | "r") => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "l" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--color-background)]">
      <div className="container-tight py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">The people</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">A senior team, on every file.</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("l")}
              aria-label="Scroll left"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("r")}
              aria-label="Scroll right"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth -mx-5 px-5"
          style={{ scrollbarWidth: "thin" }}
        >
          {TEAM.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="snap-start shrink-0 w-[300px] rounded-xl border border-border bg-white p-6 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-accent)]/50 transition-all"
            >
              <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-2)] flex items-center justify-center text-white text-3xl font-semibold tracking-wide">
                {m.initials}
              </div>
              <h3 className="mt-5 text-base font-semibold text-[var(--color-primary)]">{m.name}</h3>
              <p className="text-xs font-medium text-[var(--color-accent)] mt-0.5">{m.role}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-navy-2)] hover:text-[var(--color-accent)]"
              >
                <Linkedin className="h-3.5 w-3.5" /> View profile
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSplit() {
  return (
    <section className="bg-white border-t border-border">
      <div className="container-tight py-24 grid gap-12 lg:grid-cols-12">
        {/* Left info */}
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">Get in touch</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">Let's talk about your books.</h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed max-w-md">
            Tell us a bit about your business and what you need. A partner will respond within one business day.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, t: "Office", d: "4th Floor, Trade Centre, Bandra Kurla Complex, Mumbai 400051" },
              { icon: Phone, t: "Phone", d: "+91 12345 67890" },
              { icon: Mail, t: "Email", d: "contact@abcassociates.in" },
              { icon: Clock, t: "Hours", d: "Mon – Sat · 10:00 to 19:00 IST" },
            ].map((i) => (
              <div key={i.t} className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-navy)]/5 text-[var(--color-navy-2)] shrink-0">
                  <i.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{i.t}</div>
                  <div className="text-sm text-[var(--color-foreground)] mt-0.5">{i.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 rounded-xl border border-border bg-[var(--color-background)] p-8 lg:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" placeholder="Jane Doe" />
            <Field label="Company" placeholder="Acme Pvt. Ltd." />
            <Field label="Email" placeholder="jane@acme.com" type="email" />
            <Field label="Phone" placeholder="+91 98765 43210" />
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                Service interest
              </label>
              <select className="w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)]">
                <option>Audit &amp; Assurance</option>
                <option>Direct Taxation</option>
                <option>GST Advisory</option>
                <option>Corporate Compliance</option>
                <option>Business Advisory</option>
                <option>Outsourced Accounting</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your requirement…"
                className="w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] resize-none"
              />
            </div>
          </div>
          <div className="mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              We respond within 1 business day. Your details stay confidential.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-navy-2)] transition-colors"
            >
              Send enquiry
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-[var(--color-foreground)] placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)]"
      />
    </div>
  );
}
