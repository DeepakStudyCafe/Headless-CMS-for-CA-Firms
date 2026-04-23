import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Loader2, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ct-anim", {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); setTimeout(() => setSent(false), 3000); }, 1200);
  };

  return (
    <section id="contact" ref={ref} className="py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 ct-anim">
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Send us your <span className="text-gradient-gold">query</span></h2>
          <p className="text-muted-foreground">We respond within one business day.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4 ct-anim">
            {[
              { icon: MapPin, title: "Office Address", body: "12th Floor, Maker Tower\nNariman Point, Mumbai 400021" },
              { icon: Phone, title: "Call Us", body: "+91 98765 43210\n+91 22 4000 1234" },
              { icon: Mail, title: "Email Us", body: "info@cafirm.com\ncareers@cafirm.com" },
            ].map((c) => (
              <div key={c.title} className="glass rounded-2xl p-6 flex gap-4 items-start">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-gold/20 to-transparent border border-gold/20 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={submit} className="lg:col-span-3 glass rounded-2xl p-8 space-y-5 ct-anim">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input label="Your Name" type="text" required />
              <Input label="Email Address" type="email" required />
            </div>
            <Input label="Phone Number" type="tel" />
            <div className="relative group">
              <textarea required rows={5} placeholder=" " className="peer w-full bg-input/40 border border-border rounded-xl px-4 pt-6 pb-2 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition resize-none" />
              <label className="absolute left-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-gold pointer-events-none">Your Message</label>
            </div>
            <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-soft to-gold text-primary-foreground font-semibold hover:shadow-[0_0_40px_oklch(0.82_0.13_85/0.4)] transition disabled:opacity-70">
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : sent ? "Message Sent ✓" : <>Send Message <Send className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="relative group">
      <input {...props} placeholder=" " className="peer w-full bg-input/40 border border-border rounded-xl px-4 pt-6 pb-2 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition" />
      <label className="absolute left-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-gold pointer-events-none">{label}</label>
    </div>
  );
}
