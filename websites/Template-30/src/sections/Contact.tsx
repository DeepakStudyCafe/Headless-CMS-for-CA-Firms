import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Loader2, Send } from "lucide-react";
import { z } from "zod";

gsap.registerPlugin(ScrollTrigger);

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(120),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  message: z.string().trim().min(10, "Message too short").max(1000),
});

export function Contact() {
  const root = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setDone(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact" ref={root} className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto contact-anim">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get in Touch</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            Let's discuss your <span className="text-gradient-primary">requirements</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Send us a query and our team will reach out within one business day.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="contact-anim lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: "Office Address", text: "123 Finance Tower, MG Road, Bengaluru, Karnataka 560001" },
              { icon: Phone, title: "Call Us", text: "+91 98765 43210" },
              { icon: Mail, title: "Email Us", text: "contact@abcassociates.in" },
            ].map((c) => (
              <div key={c.title} className="bg-card border border-border rounded-2xl p-5 shadow-card-soft flex gap-4 card-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shrink-0">
                  <c.icon className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{c.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.text}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="contact-anim lg:col-span-3 bg-card border border-border rounded-2xl p-7 shadow-elegant space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Full Name" error={errors.name} />
              <Field name="email" label="Email Address" type="email" error={errors.email} />
            </div>
            <Field name="phone" label="Phone Number" error={errors.phone} />
            <div>
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea
                name="message"
                rows={5}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                placeholder="Tell us about your requirements..."
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground px-6 py-3.5 rounded-full font-medium shadow-elegant hover:shadow-glow transition disabled:opacity-70"
            >
              {loading ? <><Loader2 className="animate-spin" size={18} /> Sending...</>
                : done ? "Message Sent ✓"
                : <>Send Message <Send size={16} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        placeholder={label}
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
