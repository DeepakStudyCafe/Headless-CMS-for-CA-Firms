import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl bg-card border border-border overflow-hidden grid lg:grid-cols-5 shadow-[0_30px_80px_-40px_oklch(0.2_0.1_260_/_0.3)]">
          <div className="lg:col-span-2 bg-primary-deeper text-white p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute inset-0 blueprint opacity-30" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-accent-gold">05 — Inquire</div>
              <h2 className="mt-4 font-display text-4xl leading-tight">Begin a conversation.</h2>
              <p className="mt-5 text-white/70 leading-relaxed">
                Share a few details and a partner will respond personally within one business day.
              </p>

              <div className="mt-12 space-y-6 text-sm">
                <div>
                  <div className="text-white/50 uppercase tracking-wider text-xs">Mumbai (HQ)</div>
                  <div className="mt-1 text-white/90">12th Floor, Maker Chambers V<br />Nariman Point, Mumbai 400021</div>
                </div>
                <div>
                  <div className="text-white/50 uppercase tracking-wider text-xs">Direct</div>
                  <div className="mt-1 text-white/90">+91 22 4000 0000<br />partners@abcassociates.in</div>
                </div>
                <div>
                  <div className="text-white/50 uppercase tracking-wider text-xs">Hours</div>
                  <div className="mt-1 text-white/90">Mon — Fri · 09:30 to 18:30 IST</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 p-10 lg:p-14"
          >
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="h-full grid place-items-center text-center">
                <div>
                  <div className="mx-auto h-14 w-14 rounded-full bg-accent-gold/15 grid place-items-center text-accent-gold text-2xl">✓</div>
                  <h3 className="mt-6 font-display text-3xl text-primary-deeper">Message received.</h3>
                  <p className="mt-3 text-muted-foreground max-w-sm">A partner from our office will be in touch within one business day.</p>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" />
                  <Field label="Organisation" name="org" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Phone" name="phone" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Area of interest</label>
                  <select className="mt-2 w-full bg-transparent border-b border-border py-3 focus:border-primary-deeper outline-none text-foreground">
                    <option>Audit &amp; Assurance</option>
                    <option>Direct &amp; Indirect Tax</option>
                    <option>Strategic Advisory</option>
                    <option>Outsourced Finance</option>
                    <option>Regulatory &amp; FEMA</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Brief context</label>
                  <textarea rows={3} className="mt-2 w-full bg-transparent border-b border-border py-3 focus:border-primary-deeper outline-none resize-none text-foreground" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-4 inline-flex items-center gap-3 bg-primary-deeper text-primary-foreground px-7 py-4 rounded-full font-medium hover:bg-primary transition-colors"
                >
                  Send inquiry <span>→</span>
                </motion.button>
                <p className="text-xs text-muted-foreground">All conversations are treated as strictly confidential.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full bg-transparent border-b border-border py-3 focus:border-primary-deeper outline-none text-foreground"
      />
    </div>
  );
}
