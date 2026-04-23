import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Loader2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(10, "Message too short").max(1000),
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
      setErrors(fe);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const field = (name: keyof typeof form, type: string, placeholder: string, textarea = false) => (
    <div>
      {textarea ? (
        <textarea
          rows={5}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          placeholder={placeholder}
          className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
        />
      ) : (
        <input
          type={type}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          placeholder={placeholder}
          className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
        />
      )}
      {errors[name] && <p className="mt-1.5 text-xs text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">Get in Touch</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold">Let's talk about your business</h2>
          <p className="mt-4 text-muted-foreground">Send us a query and we'll respond within one business day.</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 rounded-3xl gradient-primary p-8 text-primary-foreground shadow-soft relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/10" />
            <h3 className="text-2xl font-bold relative">Contact Information</h3>
            <p className="mt-2 text-primary-foreground/80 relative">Reach us via any of the channels below.</p>
            <ul className="mt-8 space-y-5 relative">
              <li className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm opacity-80">Office</div>
                  <div className="font-medium">204, Business Hub, MG Road,<br />Mumbai, India 400001</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center"><Phone className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm opacity-80">Phone</div>
                  <div className="font-medium">+91 98765 43210</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center"><Mail className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm opacity-80">Email</div>
                  <div className="font-medium">hello@abcassociates.com</div>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-3xl bg-surface border border-border p-8 shadow-card space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {field("name", "text", "Your Name")}
              {field("email", "email", "Email Address")}
            </div>
            {field("phone", "tel", "Phone Number")}
            {field("message", "text", "Tell us about your requirement", true)}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full gradient-primary text-primary-foreground font-semibold shadow-soft hover:translate-y-[-2px] transition disabled:opacity-70 disabled:translate-y-0"
            >
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <>Send Message <Send className="h-4 w-4" /></>}
            </button>
            {sent && <p className="text-sm text-primary font-medium">✓ Thanks! We'll get back to you shortly.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
