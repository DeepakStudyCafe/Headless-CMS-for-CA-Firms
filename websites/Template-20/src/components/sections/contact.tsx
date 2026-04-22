import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-background py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent-soft/30 blur-3xl" aria-hidden />

      <div className="container-pro relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Get in touch</span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-semibold text-primary leading-tight">
            Let's start a conversation.
          </h2>
          <p className="mt-4 text-subtext leading-relaxed">
            Tell us about your business and we'll respond within one working day with a tailored next step.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl bg-white border border-border shadow-[var(--shadow-lift)] overflow-hidden grid lg:grid-cols-5"
        >
          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 4000);
            }}
            className="lg:col-span-3 p-8 lg:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" type="email" name="email" required />
              <Field label="Phone" name="phone" />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium text-primary mb-1.5">Service of Interest</label>
              <select className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition">
                <option>Audit & Assurance</option>
                <option>Direct & Indirect Taxation</option>
                <option>Business Advisory / Virtual CFO</option>
                <option>Compliance & Secretarial</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium text-primary mb-1.5">How can we help?</label>
              <textarea
                rows={4}
                required
                className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-none"
                placeholder="A brief description of your requirement…"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition"
            >
              {submitted ? "Thanks — we'll be in touch" : "Send Enquiry"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Details */}
          <div className="lg:col-span-2 bg-secondary text-white p-8 lg:p-10 relative">
            <div className="absolute inset-0 grain opacity-20" aria-hidden />
            <div className="relative">
              <h3 className="text-lg font-semibold">Reach our office</h3>
              <p className="mt-1 text-sm text-white/60">We respond within one working day.</p>

              <ul className="mt-8 space-y-5 text-sm">
                <Detail icon={MapPin} title="Office">
                  4th Floor, Bandra Kurla Complex,<br /> Mumbai 400051, India
                </Detail>
                <Detail icon={Phone} title="Phone">+91 12345 67890</Detail>
                <Detail icon={Mail} title="Email">contact@abcassociates.com</Detail>
                <Detail icon={Clock} title="Hours">Mon – Sat · 9:30 AM – 6:30 PM</Detail>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-primary mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
      />
    </div>
  );
}

function Detail({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
        <Icon className="h-4 w-4 text-accent-soft" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-white/50">{title}</p>
        <p className="mt-0.5 text-white leading-relaxed">{children}</p>
      </div>
    </li>
  );
}
