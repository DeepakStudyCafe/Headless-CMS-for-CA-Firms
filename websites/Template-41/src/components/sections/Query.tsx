import { useState } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Send, CheckCircle2 } from "lucide-react";

export function Query() {
  const ref = useGsapReveal<HTMLElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="query" ref={ref as never} className="py-28 bg-secondary">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div data-reveal className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
            Send a Query
          </div>
          <h2 data-reveal className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Have a question? <span className="italic text-gradient-gold">We're listening.</span>
          </h2>
          <p data-reveal className="text-muted-foreground leading-relaxed mb-8">
            Share a brief about your business and what you'd like help with. A
            partner will get back to you within one business day with a tailored
            response — no sales pitch, just clarity.
          </p>
          <ul data-reveal className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Confidential & NDA-backed by default</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Free 30-minute discovery call</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Transparent fee proposal upfront</li>
          </ul>
        </div>

        <form
          data-reveal
          onSubmit={onSubmit}
          className="glass rounded-3xl p-8 md:p-10 shadow-[var(--shadow-soft)] space-y-5"
        >
          {(["name", "email", "phone"] as const).map((f) => (
            <div key={f} className="relative">
              <input
                type={f === "email" ? "email" : f === "phone" ? "tel" : "text"}
                required={f !== "phone"}
                maxLength={120}
                value={form[f]}
                onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 bg-background/60 border border-border rounded-xl outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
              />
              <label className="absolute left-4 top-2 text-xs text-muted-foreground uppercase tracking-wider pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase">
                {f === "name" ? "Full Name" : f === "email" ? "Email Address" : "Phone (optional)"}
              </label>
            </div>
          ))}
          <div className="relative">
            <textarea
              required
              maxLength={1500}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 bg-background/60 border border-border rounded-xl outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
            />
            <label className="absolute left-4 top-2 text-xs text-muted-foreground uppercase tracking-wider pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase">
              How can we help?
            </label>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-gold)] transition-all"
          >
            {sent ? (<><CheckCircle2 className="h-4 w-4" /> Message Sent</>) : (<>Send Message <Send className="h-4 w-4" /></>)}
          </button>
        </form>
      </div>
    </section>
  );
}