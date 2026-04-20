import { useState } from "react";
import { MapPin, Phone, Mail, Loader2, Send } from "lucide-react";

function FloatingInput({ id, label, type = "text", value, onChange, as }: {
  id: string; label: string; type?: string; value: string;
  onChange: (v: string) => void; as?: "textarea";
}) {
  const Cmp: any = as === "textarea" ? "textarea" : "input";
  return (
    <div className="relative">
      <Cmp
        id={id}
        type={type}
        rows={as === "textarea" ? 4 : undefined}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full bg-transparent border border-border rounded-xl px-4 pt-5 pb-2 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-1.5 text-[11px] font-medium text-muted-foreground transition-all
                   peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                   peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setDone(false), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-accent-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Get in Touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Let's talk about your <span className="text-gradient">financial goals</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Send us a query and one of our partners will respond within one business day.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, t: "Office Address", d: "501, Corporate Tower, MG Road, Mumbai 400001" },
              { icon: Phone, t: "Phone", d: "+91 XXXXX XXXXX" },
              { icon: Mail, t: "Email", d: "contact@abcassociates.com" },
            ].map((c) => (
              <div key={c.t} className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center shrink-0 shadow-soft">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{c.t}</div>
                  <div className="text-sm text-muted-foreground">{c.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="glass rounded-3xl p-8 shadow-card space-y-5">
          <FloatingInput id="name" label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <div className="grid sm:grid-cols-2 gap-5">
            <FloatingInput id="email" label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <FloatingInput id="phone" label="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
          </div>
          <FloatingInput id="message" label="Your Message" as="textarea" value={form.message} onChange={(v) => setForm({ ...form, message: v })} />

          <button
            type="submit"
            disabled={loading}
            className="relative w-full inline-flex items-center justify-center gap-2 btn-premium disabled:opacity-70 overflow-hidden"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {loading ? "Sending..." : done ? "Message Sent ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
