import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useEffect, useRef, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ct-reveal", {
        y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section ref={ref} id="contact" className="relative py-32 lg:py-40 px-6 lg:px-10 bg-forest-2 text-cream overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-forest-3/20 blur-3xl" />
      <div className="mx-auto max-w-[1400px] relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-2 ct-reveal text-[11px] tracking-[0.3em] uppercase text-forest-4">— 07</div>
          <h2 className="lg:col-span-7 ct-reveal font-display text-[36px] md:text-[56px] leading-[1.05] text-cream text-balance">
            Begin a conversation.
          </h2>
          <p className="lg:col-span-3 ct-reveal text-cream/70 leading-relaxed lg:pt-4">
            Tell us a little about your business — we will reply, by name, within one working day.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            {[
              { icon: MapPin, label: "Office", value: "14, Heritage Chambers, Civil Lines, New Delhi 110054" },
              { icon: Phone, label: "Telephone", value: "+91 11 4032 8800 · +91 98100 24578" },
              { icon: Mail, label: "Email", value: "hello@abcassociates.in" },
              { icon: Clock, label: "Hours", value: "Monday – Saturday · 09:30 – 18:30 IST" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="ct-reveal flex gap-5 p-6 border border-cream/15 bg-cream/5 backdrop-blur-sm">
                  <div className="h-11 w-11 shrink-0 border border-cream/20 flex items-center justify-center">
                    <Icon size={18} strokeWidth={1.4} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-forest-4 mb-2">{c.label}</div>
                    <p className="text-cream/90 leading-relaxed">{c.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 ct-reveal bg-cream text-ink p-8 lg:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Your name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Company" name="company" />
              <Field label="Service of interest" name="service" />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-ink-soft">Brief</label>
              <textarea
                name="message"
                rows={5}
                className="w-full mt-2 border-b border-border bg-transparent py-3 outline-none focus:border-forest-3 transition-colors resize-none"
                placeholder="A few sentences about what you need…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-forest-1 text-cream px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-forest-3 transition-colors"
            >
              Send enquiry →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-ink-soft">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full mt-2 border-b border-border bg-transparent py-3 outline-none focus:border-forest-3 transition-colors"
      />
    </div>
  );
}
