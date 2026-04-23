import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => setDone(false), 3500);
      (e.target as HTMLFormElement).reset();
    }, 1400);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Contact</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Let's discuss your <span className="text-gold">requirements</span>
          </h2>
          <div className="fancy-divider mx-auto mt-6" />
          <p className="mt-5 text-muted-foreground">
            Send us a query and our team will respond within one business day.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="reveal lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: "Office Address", lines: ["301, Premier Towers", "Connaught Place, New Delhi 110001"] },
              { icon: Phone, title: "Call Us", lines: ["+91 98765 43210", "+91 11 4567 8900"] },
              { icon: Mail, title: "Email Us", lines: ["info@cafirm.com", "support@cafirm.com"] },
            ].map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex gap-4 p-6 rounded-2xl bg-card border border-border/70 shadow-card">
                <div className="h-12 w-12 rounded-xl gradient-gold grid place-items-center shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  {lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground mt-1">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal lg:col-span-3 bg-card rounded-3xl p-8 lg:p-10 shadow-soft border border-border/60"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Subject" name="subject" type="text" />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-4 focus:ring-gold/15"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-gold mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold disabled:opacity-70"
            >
              {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) :
               done ? "Message Sent ✓" :
               (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-4 focus:ring-gold/15"
        placeholder={label}
      />
    </div>
  );
}
