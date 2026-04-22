import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Loader2, Check } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3500);
    }, 1100);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full soft-blur-blob bg-primary/15 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] rounded-full soft-blur-blob bg-secondary/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-secondary">
            <span className="h-px w-8 bg-primary" /> 07 — Contact
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl text-foreground leading-[1.05]">
            Let's start a <em className="text-primary not-italic">conversation</em>.
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg">
            Tell us a little about yourself — we'll be in touch within one business day.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid lg:grid-cols-[1fr_1.3fr] gap-6 lg:gap-8 bg-card rounded-[2rem] border border-border shadow-lift overflow-hidden"
        >
          {/* LEFT — info panel */}
          <div className="relative bg-section p-8 md:p-12 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                Reach out — <span className="text-primary">we're listening.</span>
              </h3>
              <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                Whether you need an audit, tax counsel or a long-term partner — our doors,
                inboxes and phones are always open.
              </p>
            </div>

            <div className="relative mt-10 space-y-5">
              {[
                { icon: Phone, label: "Call us", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "hello@abc-associates.in" },
                { icon: MapPin, label: "Office", value: "Mumbai, India" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 group">
                  <div className="h-11 w-11 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/60 group-hover:bg-gradient-gold transition-all duration-300">
                    <c.icon size={17} className="text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">{c.label}</div>
                    <div className="text-sm md:text-base text-foreground mt-1 font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-10 pt-6 border-t border-border/70 text-xs text-muted-foreground">
              Mon — Sat · 10:00 am to 7:00 pm IST
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FloatingField label="Full Name" type="text" id="name" />
                <FloatingField label="Email Address" type="email" id="email" />
              </div>
              <FloatingField label="Phone Number" type="tel" id="phone" />
              <FloatingField label="How can we help?" type="textarea" id="msg" />

              <button
                type="submit"
                disabled={status !== "idle"}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background py-4 text-sm font-medium transition-all hover:bg-secondary hover:shadow-lift disabled:opacity-90"
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
                {status === "loading" && (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <Check size={16} /> Message Sent
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center pt-2">
                By submitting, you agree to our soft, no-spam communication policy.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingField({ label, type, id }: { label: string; type: string; id: string }) {
  const [val, setVal] = useState("");
  const isTextarea = type === "textarea";
  const filled = val.length > 0;

  const baseCls =
    "peer w-full rounded-2xl border border-border bg-background px-4 pt-6 pb-2 text-sm text-foreground focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all";

  return (
    <div className="relative">
      {isTextarea ? (
        <textarea
          id={id}
          required
          rows={4}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={`${baseCls} resize-none`}
          placeholder=" "
        />
      ) : (
        <input
          id={id}
          required
          type={type}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={baseCls}
          placeholder=" "
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all pointer-events-none text-muted-foreground ${
          filled
            ? "top-2 text-[0.65rem] uppercase tracking-wider text-primary"
            : "top-4 text-sm peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
