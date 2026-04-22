import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const info = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "204, Pearl Heights, Andheri West,\nMumbai — 400053, India",
  },
  { icon: Phone, label: "Phone", value: "+91 22 4000 1234\n+91 98200 12345" },
  { icon: Mail, label: "Email", value: "contact@abcassociates.in\ninfo@abcassociates.in" },
  { icon: Clock, label: "Office Hours", value: "Mon – Fri: 9:30 AM – 6:30 PM\nSat: 10 AM – 2 PM" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-gold-deep">Get in Touch</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-foreground">
            Let's discuss your requirements.
          </h2>
          <p className="mt-5 text-base md:text-lg text-subink leading-relaxed">
            Reach out for a confidential consultation. Our team typically responds within one
            business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {info.map((i) => (
              <div
                key={i.label}
                className="flex gap-4 p-5 bg-surface border border-hairline rounded-xl"
              >
                <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-background border border-hairline text-gold-deep">
                  <i.icon size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-subink">{i.label}</div>
                  <div className="mt-1.5 text-sm text-foreground whitespace-pre-line leading-relaxed">
                    {i.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-surface border border-hairline rounded-2xl p-6 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Subject" name="subject" type="text" />
            </div>
            <div className="mt-5">
              <label className="block text-xs uppercase tracking-[0.15em] text-subink mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-hairline bg-background px-4 py-3 text-sm text-foreground placeholder-subink/50 focus:outline-none focus:border-gold-deep transition-colors resize-none"
                placeholder="Tell us briefly about your requirements…"
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-subink">By submitting you agree to our privacy policy.</p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-colors hover:bg-gold-deep"
              >
                {submitted ? "Message Sent ✓" : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.15em] text-subink mb-2">
        {label} {required && <span className="text-gold-deep">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-hairline bg-background px-4 py-3 text-sm text-foreground placeholder-subink/50 focus:outline-none focus:border-gold-deep transition-colors"
        placeholder={label}
      />
    </div>
  );
}
