import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { z } from "zod";

gsap.registerPlugin(ScrollTrigger);

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cnt-info, .cnt-form",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      setErr(r.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setDone(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-cream-deep relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-deep">Get in Touch</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight">
            Send us your <span className="gold-text italic">query</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="cnt-info lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: "Office Address", text: "123 Capital Tower, Nariman Point, Mumbai, MH 400021" },
              { icon: Phone, title: "Call Us", text: "+91 98200 00000" },
              { icon: Mail, title: "Email", text: "hello@cafirm.in" },
            ].map((i) => (
              <div key={i.title} className="p-6 rounded-2xl bg-cream border border-gold/10 flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-white">
                  <i.icon size={22} />
                </div>
                <div>
                  <div className="font-semibold text-ink">{i.title}</div>
                  <div className="text-sm text-ink-soft mt-1">{i.text}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="cnt-form lg:col-span-3 p-8 lg:p-10 rounded-3xl bg-cream shadow-luxe border border-gold/10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field name="name" label="Full Name" />
              <Field name="email" label="Email Address" type="email" />
            </div>
            <Field name="phone" label="Phone Number" type="tel" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Message</label>
              <textarea
                name="message"
                rows={5}
                maxLength={1000}
                required
                className="mt-2 w-full px-4 py-3 rounded-xl bg-cream-deep border border-gold/10 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition resize-none"
                placeholder="Tell us about your requirement..."
              />
            </div>

            {err && <p className="text-sm text-red-600">{err}</p>}
            {done && <p className="text-sm text-green-700">Thanks! We'll get back to you shortly.</p>}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gold-gradient text-white font-semibold shadow-luxe hover:scale-105 transition-transform disabled:opacity-70 disabled:hover:scale-100"
            >
              {loading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Send Message <Send size={16} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{label}</label>
      <input
        name={name}
        type={type}
        required
        maxLength={255}
        className="mt-2 w-full px-4 py-3 rounded-xl bg-cream-deep border border-gold/10 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition"
        placeholder={label}
      />
    </div>
  );
}
