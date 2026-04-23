import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".con-fade",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1,
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  const info = [
    { icon: MapPin, title: "Visit Us", lines: ["302, Heritage Tower,", "MG Road, New Delhi 110001"] },
    { icon: Phone, title: "Call Us", lines: ["+91 98765 43210", "+91 11 4567 8900"] },
    { icon: Mail, title: "Email Us", lines: ["info@abcassociates.in", "support@abcassociates.in"] },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-gradient-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="con-fade text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Get in touch</div>
          <h2 className="con-fade text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Let's discuss your <span className="text-gradient-maroon">financial goals</span>
          </h2>
          <p className="con-fade text-muted-foreground text-lg">Fill the form and our team will reach out within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="con-fade lg:col-span-2 space-y-4">
            {info.map((i) => (
              <div key={i.title} className="bg-card rounded-2xl p-6 border border-border shadow-card flex gap-5 card-lift">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center">
                  <i.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-charcoal mb-1">{i.title}</div>
                  {i.lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={submit} className="con-fade lg:col-span-3 bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-elegant space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full Name" type="text" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            </div>
            <Field label="Phone Number" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Your Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-soft hover:shadow-elegant disabled:opacity-70 transition-smooth"
            >
              {status === "loading" && <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>}
              {status === "sent" && <><CheckCircle2 className="h-4 w-4" /> Message Sent!</>}
              {status === "idle" && <>Send Message <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, value, onChange, required }: { label: string; type: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={255}
        className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
      />
    </div>
  );
}
