import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-border-soft">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-blue">Get in Touch</div>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-deep">
            Let's discuss your engagement.
          </h2>
          <p className="mt-4 text-subtext">
            Share a few details and a partner will respond within one business day.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-5 rounded-2xl overflow-hidden border border-border-soft shadow-[var(--shadow-card)] bg-white"
        >
          {/* Left: Contact details */}
          <div className="lg:col-span-2 bg-navy-deep text-white p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_80%_20%,white_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative">
              <h3 className="text-xl font-semibold">Reach our office</h3>
              <p className="mt-2 text-sm text-white/65">
                Speak directly with a partner during business hours.
              </p>
              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-accent-light shrink-0 mt-0.5" />
                  <span>12th Floor, Corporate Tower,<br />Bandra Kurla Complex, Mumbai 400051</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-accent-light shrink-0 mt-0.5" />
                  <span>+91 99999 99999</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-accent-light shrink-0 mt-0.5" />
                  <span>hello@abcassociates.in</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 text-accent-light shrink-0 mt-0.5" />
                  <span>Mon – Sat · 10:00 AM – 7:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="lg:col-span-3 p-8 lg:p-10 grid gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" placeholder="Your full name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            </div>
            <Field label="Phone" name="phone" placeholder="+91 ..." />
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-navy-deep">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your requirement..."
                className="mt-2 w-full rounded-md border border-border-soft bg-background px-4 py-3 text-sm text-navy-deep placeholder:text-subtext focus:outline-none focus:border-accent-blue focus:bg-white transition"
                required
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent-blue px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-navy-deep transition-all hover:shadow-lift"
            >
              {sent ? "Message Sent ✓" : "Send Message"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-navy-deep">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-md border border-border-soft bg-background px-4 py-3 text-sm text-navy-deep placeholder:text-subtext focus:outline-none focus:border-accent-blue focus:bg-white transition"
      />
    </div>
  );
}
