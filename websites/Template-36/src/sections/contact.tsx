import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-[color-mix(in_oklab,var(--color-soft-accent)_6%,var(--color-background))] py-24 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
            Get in touch
          </p>
          <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[44px]">
            Let's talk about your numbers.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[14.5px] leading-[1.7] text-muted-foreground">
            A partner replies within one business day. Discretion is assumed,
            not asked for.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="border border-border bg-white"
        >
          <div className="grid lg:grid-cols-5">
            {/* form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6 p-8 lg:col-span-3 lg:p-12"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name" type="text" placeholder="Your name" />
                <Field label="Email address" type="email" placeholder="you@company.com" />
              </div>
              <Field label="Subject" type="text" placeholder="Engagement enquiry" />
              <div>
                <label className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="A few lines about your engagement…"
                  className="mt-3 w-full resize-none border-b border-border bg-transparent px-0 py-2 text-[14.5px] text-foreground outline-none transition focus:border-foreground/60"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-secondary"
              >
                {sent ? "Message sent — we'll be in touch" : "Send message"}
                <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            {/* details */}
            <div className="border-t border-border bg-[color-mix(in_oklab,var(--color-soft-accent)_5%,var(--color-background))] p-8 lg:col-span-2 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
                Office
              </p>
              <div className="mt-6 space-y-7 text-[14px]">
                <Detail icon={Phone} label="Call" value="+91 12345 67890" />
                <Detail icon={Mail} label="Email" value="hello@abcassociates.in" />
                <Detail
                  icon={MapPin}
                  label="Visit"
                  value={
                    <>
                      204, Greenfield House,
                      <br />
                      Connaught Place, New Delhi 110001
                    </>
                  }
                />
              </div>
              <div className="mt-10 border-t border-border pt-6 text-[12px] text-muted-foreground">
                Mon–Fri · 9:30 to 18:30 IST
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent px-0 py-2 text-[14.5px] text-foreground outline-none transition focus:border-foreground/60"
      />
    </div>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="mt-1 h-4 w-4 text-accent" strokeWidth={1.6} />
      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-foreground">{value}</p>
      </div>
    </div>
  );
}
