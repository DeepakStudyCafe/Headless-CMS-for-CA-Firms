import { useState } from "react";
import { MapPin, Phone, Mail, Loader2, Send } from "lucide-react";
import { API_URL, WEBSITE_SLUG } from "@/lib/api";

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

export function Contact({ data }: { data?: any }) {
  if (!data) return null;
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/forms/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: WEBSITE_SLUG })
      });
      if (res.ok) {
        setDone(true);
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setDone(false), 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-accent-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{data?.textContent?.heading}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {data?.textContent?.title?.split(' ').map((word: string, i: number, arr: any) => {
              if (i === arr.length - 1 || i === arr.length - 2) {
                 return <span key={i} className="text-gradient"> {word}</span>;
              }
              return <span key={i}> {word}</span>;
            })}
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            {data?.textContent?.description}
          </p>

          <div className="mt-10 space-y-5">
            {(data?.textContent?.items || []).map((c: any) => {
              const Icon = c.icon && typeof c.icon === 'string' ? 
                (c.icon === 'MapPin' ? MapPin : c.icon === 'Phone' ? Phone : Mail) 
                : (c.icon || MapPin);
              return (
              <div key={c.title || c.t} className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center shrink-0 shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{c.title || c.t}</div>
                  <div className="text-sm text-muted-foreground whitespace-pre-line">{c.description || c.d}</div>
                </div>
              </div>
            )})}
          </div>
        </div>

        <form onSubmit={submit} className="glass rounded-3xl p-8 shadow-card space-y-5">
          <FloatingInput id="name" label={data?.textContent?.formLabels?.name || "Your Name"} value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <div className="grid sm:grid-cols-2 gap-5">
            <FloatingInput id="email" label={data?.textContent?.formLabels?.email || "Email Address"} type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <FloatingInput id="phone" label={data?.textContent?.formLabels?.phone || "Phone Number"} value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
          </div>
          <FloatingInput id="message" label={data?.textContent?.formLabels?.message || "Your Message"} as="textarea" value={form.message} onChange={(v) => setForm({ ...form, message: v })} />

          <button
            type="submit"
            disabled={loading}
            className="relative w-full inline-flex items-center justify-center gap-2 btn-premium disabled:opacity-70 overflow-hidden"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {loading ? "Sending..." : done ? "Message Sent ✓" : (data?.textContent?.formLabels?.button || "Send Message")}
          </button>
        </form>
      </div>
    </section>
  );
}
