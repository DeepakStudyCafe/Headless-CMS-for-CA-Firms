import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-surface/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">— Get in touch</div>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.05] tracking-tight">
            Tell us what's on your <span className="italic font-light text-secondary">mind.</span>
          </h2>
          <p className="text-secondary text-base md:text-lg mt-6 leading-relaxed">
            A partner will respond within one working day. All conversations are
            held in strict confidence.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="bg-background border border-border rounded-sm shadow-xl shadow-secondary/5 overflow-hidden grid grid-cols-12"
        >
          {/* Left - info */}
          <div className="col-span-12 md:col-span-5 bg-primary text-primary-foreground p-8 md:p-12 relative">
            <div className="font-display text-2xl mb-10 tracking-tight">Reach the firm</div>

            <ul className="space-y-7">
              {[
                { icon: MapPin, label: "Office", value: "12, Nariman Point\nMumbai 400 021, India" },
                { icon: Phone, label: "Phone", value: "+91 99999 99999" },
                { icon: Mail, label: "Email", value: "hello@abc-associates.in" },
                { icon: Clock, label: "Hours", value: "Mon — Fri · 9:30 to 18:30 IST" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-full bg-primary-foreground/10 grid place-items-center shrink-0 mt-0.5">
                    <item.icon className="h-4 w-4 text-accent-soft" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-primary-foreground/50">{item.label}</div>
                    <div className="text-sm text-primary-foreground mt-1 whitespace-pre-line">{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-8 right-8 hidden md:block opacity-20">
              <div className="font-display italic text-7xl">A&amp;A</div>
            </div>
          </div>

          {/* Right - form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="col-span-12 md:col-span-7 p-8 md:p-12 space-y-6"
          >
            <div className="grid grid-cols-2 gap-5">
              <Field label="First name" placeholder="Aarav" />
              <Field label="Last name" placeholder="Sharma" />
            </div>
            <Field label="Email" type="email" placeholder="you@company.com" />
            <Field label="Company" placeholder="Optional" />

            <div>
              <label className="block text-[11px] uppercase tracking-widest text-subtext mb-2">
                How can we help?
              </label>
              <textarea
                rows={5}
                placeholder="Briefly describe what you're looking for…"
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-primary placeholder:text-subtext/60 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-7 py-3.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-accent/20 mt-4"
            >
              Send enquiry
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-widest text-subtext mb-2">{label}</label>
      <input
        {...rest}
        className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-primary placeholder:text-subtext/60 transition-colors"
      />
    </div>
  );
}
