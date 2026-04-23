import { useRef, useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { MapPin, Phone, Mail, Loader2, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useReveal(ref, [
    { selector: ".ct-left > *", y: 30, stagger: 0.08 },
    { selector: ".ct-right", y: 30 },
  ]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || form.message.trim().length < 5) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setDone(false), 3500);
    }, 1400);
  };

  return (
    <section ref={ref} id="query" className="py-24 lg:py-36 relative overflow-hidden bg-gradient-luxe">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-gold opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold ornament">Get in Touch</p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            Let&apos;s craft your <span className="text-gradient-gold italic">financial story</span>
          </h2>
          <p className="mt-6 text-base lg:text-lg text-muted-foreground">
            Share a few details and a senior partner will reach out within one business day.
          </p>
        </div>

        <div id="contact" className="mt-16 grid lg:grid-cols-5 gap-8">
          <div className="ct-left lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: "Visit our office", v: "12 Marine Drive, Mumbai 400 020, India" },
              { icon: Phone, title: "Call us", v: "+91 98765 43210" },
              { icon: Mail, title: "Email us", v: "hello@sterlingco.in" },
            ].map((c) => (
              <div key={c.title} className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-maroon flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</p>
                  <p className="mt-1 font-display text-base lg:text-lg text-foreground break-words">{c.v}</p>
                </div>
              </div>
            ))}
            <div className="bg-gradient-maroon rounded-2xl p-7 text-primary-foreground shadow-elegant">
              <p className="font-display text-2xl">Office hours</p>
              <p className="text-sm opacity-80 mt-2">Mon – Fri · 9:30 AM – 7:00 PM</p>
              <p className="text-sm opacity-80">Sat · 10:00 AM – 2:00 PM</p>
            </div>
          </div>

          <form onSubmit={submit} className="ct-right lg:col-span-3 bg-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-border shadow-elegant space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" id="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required maxLength={100} />
              <Field label="Email address" id="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required maxLength={255} />
            </div>
            <Field label="Phone number" id="phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} maxLength={20} />
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Message</label>
              <textarea
                id="message" required maxLength={1000} rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full px-4 py-3 bg-background border border-input rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60
                  focus:outline-none focus:border-[var(--gold)] focus:ring-4 focus:ring-[var(--gold)]/15 transition-all resize-none"
                placeholder="Tell us about your business and how we can help..."
              />
            </div>
            <button
              type="submit"
              disabled={loading || done}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-maroon text-primary-foreground font-medium shadow-elegant hover:shadow-gold transition-all duration-300 disabled:opacity-70 hover:-translate-y-0.5 active:translate-y-0"
            >
              {done ? (<><CheckCircle2 className="w-5 h-5" /> Message sent</>) :
               loading ? (<><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>) :
               (<>Send Message <Send className="w-4 h-4" /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, value, onChange, type = "text", required, maxLength }: {
  label: string; id: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{label}</label>
      <input
        id={id} type={type} required={required} maxLength={maxLength}
        value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full px-4 py-3 bg-background border border-input rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60
          focus:outline-none focus:border-[var(--gold)] focus:ring-4 focus:ring-[var(--gold)]/15 transition-all"
        placeholder={label}
      />
    </div>
  );
}
