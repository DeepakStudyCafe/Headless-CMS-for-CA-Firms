import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 lg:py-44 bg-soft/30">
      <div className="container-editorial">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-6">06 — Begin a conversation</p>
          <h2 className="text-4xl lg:text-5xl text-heading leading-tight">
            Tell us about your business.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-0 bg-card border border-border">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-5 p-10 lg:p-14 bg-soft/40 border-b lg:border-b-0 lg:border-r border-border"
          >
            <h3 className="font-display text-2xl text-heading mb-10">
              Reach the firm
            </h3>

            <div className="space-y-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">
                  Mumbai · Head office
                </p>
                <p className="text-body leading-relaxed">
                  4th Floor, Maker Chambers V<br />
                  Nariman Point, Mumbai 400 021
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">
                  Telephone
                </p>
                <p className="text-body">+91 22 6741 8800</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">
                  Email
                </p>
                <p className="text-body">partners@abcassociates.in</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">
                  Hours
                </p>
                <p className="text-body">Monday — Friday · 09:30 to 18:30 IST</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 lg:col-span-7 p-10 lg:p-14"
          >
            {submitted ? (
              <div className="h-full flex flex-col justify-center min-h-[300px]">
                <p className="eyebrow mb-4">Thank you</p>
                <p className="font-display text-2xl text-heading">
                  We've received your note. A partner will write back within one
                  business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-7"
              >
                <Field label="Name" name="name" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <Field label="Company" name="company" />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-body mb-3">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-3 text-heading resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-heading text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-500 mt-4"
                >
                  Send enquiry
                  <span className="transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
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
      <label
        htmlFor={name}
        className="block text-[11px] uppercase tracking-[0.22em] text-body mb-3"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-3 text-heading transition-colors"
      />
    </div>
  );
}
