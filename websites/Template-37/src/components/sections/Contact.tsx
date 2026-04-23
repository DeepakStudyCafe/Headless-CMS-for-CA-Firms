import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Loader2, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const root = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-fade",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
        },
      );
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 3500);
    }, 1400);
  };

  return (
    <section id="contact" ref={root} className="relative py-28 bg-gradient-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="cta-fade text-xs uppercase tracking-[0.3em] text-primary mb-3">Get in Touch</div>
          <h2 className="cta-fade text-4xl md:text-5xl font-bold mb-4">
            Send us your <span className="text-gradient-gold">query</span>
          </h2>
          <p className="cta-fade text-muted-foreground">
            Have a question or need a consultation? Our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="cta-fade lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: "Office Address", text: "501, Premier Heights, MG Road, Mumbai 400001, India" },
              { icon: Phone, title: "Phone", text: "+91 98765 43210" },
              { icon: Mail, title: "Email", text: "contact@cafirm.com" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="glass-card gold-border-glow rounded-2xl p-6 flex gap-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-gradient-gold grid place-items-center text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-primary mb-1">{c.title}</div>
                    <div className="text-foreground/90">{c.text}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <form
            onSubmit={onSubmit}
            className="cta-fade lg:col-span-3 glass-card rounded-3xl p-8 md:p-10 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Input label="Name" type="text" placeholder="Your full name" />
              <Input label="Email" type="email" placeholder="you@email.com" />
            </div>
            <Input label="Phone" type="tel" placeholder="+91 ..." />
            <div>
              <label className="block text-xs uppercase tracking-wider text-primary mb-2">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your requirement..."
                className="w-full bg-background/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-xl px-4 py-3 outline-none transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-[1.02] transition disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                </>
              ) : sent ? (
                "✓ Message Sent"
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-primary mb-2">{label}</label>
      <input
        required
        {...props}
        className="w-full bg-background/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-xl px-4 py-3 outline-none transition"
      />
    </div>
  );
}
