import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Field({ label, type = "text", textarea }: { label: string; type?: string; textarea?: boolean }) {
  const [val, setVal] = useState("");
  const has = val.length > 0;
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          rows={4}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="peer w-full rounded-2xl border border-border bg-card px-4 pt-6 pb-3 text-foreground outline-none transition focus:border-[var(--gold)]"
        />
      ) : (
        <input
          type={type}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="peer w-full rounded-2xl border border-border bg-card px-4 pt-6 pb-3 text-foreground outline-none transition focus:border-[var(--gold)]"
        />
      )}
      <span className={`pointer-events-none absolute left-4 transition-all ${has ? "top-2 text-xs text-[var(--gold)]" : "top-4 text-sm text-muted-foreground"} peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--gold)]`}>
        {label}
      </span>
    </label>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ct-anim", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="ct-anim mx-auto max-w-3xl text-center mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">— Let's talk</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Begin a <span className="italic gold-text">conversation</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us about your business — a partner will personally respond within one business day.
          </p>
        </div>

        <div className="ct-anim mx-auto max-w-5xl rounded-[2.5rem] border border-border bg-card overflow-hidden grid lg:grid-cols-5">
          {/* Info side */}
          <div className="lg:col-span-2 relative p-10 text-primary-foreground"
               style={{ background: "linear-gradient(160deg, oklch(0.21 0.05 265), oklch(0.14 0.04 265))" }}>
            <div className="absolute top-6 right-6 h-24 w-24 rounded-full opacity-30 blur-2xl"
                 style={{ background: "oklch(0.78 0.14 75)" }} />
            <h3 className="font-display text-3xl">Reach us</h3>
            <p className="mt-3 text-primary-foreground/70 text-sm">
              Our partners read every enquiry personally.
            </p>
            <div className="mt-10 space-y-6 text-sm">
              <div className="flex gap-4">
                <Mail className="h-5 w-5 text-[var(--gold)] mt-0.5" />
                <div>
                  <div className="text-primary-foreground/60 text-xs uppercase tracking-widest">Email</div>
                  <div className="mt-1">hello@abcassociates.in</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 text-[var(--gold)] mt-0.5" />
                <div>
                  <div className="text-primary-foreground/60 text-xs uppercase tracking-widest">Phone</div>
                  <div className="mt-1">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-[var(--gold)] mt-0.5" />
                <div>
                  <div className="text-primary-foreground/60 text-xs uppercase tracking-widest">Office</div>
                  <div className="mt-1">12 Linking Road, Bandra West<br />Mumbai 400050</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <form className="lg:col-span-3 p-10 grid gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" />
              <Field label="Email address" type="email" />
            </div>
            <Field label="Company" />
            <Field label="How can we help?" textarea />
            <button type="submit" className="btn-gold mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold w-fit">
              Send enquiry <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
