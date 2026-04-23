import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function Contact() {
  const ref = useGsapReveal<HTMLElement>();
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.currentTarget.reset();
  }

  return (
    <section ref={ref} id="contact" className="py-24 lg:py-32 bg-[color:var(--cream-deep)]/40">
      <div className="container-x grid lg:grid-cols-5 gap-10">
        <div data-reveal className="lg:col-span-2">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Get In Touch</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Let's talk about <span className="italic text-primary">your numbers</span>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Schedule a complimentary 30-minute consultation with our partners. Whether it's a tax
            query, audit need or strategic decision — we're here to help.
          </p>

          <div className="mt-10 space-y-6">
            {[
              { icon: MapPin, label: "Office", value: "2nd Floor, Heritage Tower, MG Road, Bengaluru 560001" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: Mail, label: "Email", value: "contact@abcassociates.in" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 inline-flex items-center justify-center text-primary shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="text-foreground mt-1">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          data-reveal
          className="lg:col-span-3 bg-card rounded-2xl border border-border p-8 lg:p-10 shadow-[var(--shadow-soft)]"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" placeholder="Aditya Verma" />
            <Field label="Email Address" name="email" type="email" placeholder="you@company.com" />
            <Field label="Phone" name="phone" placeholder="+91 ..." />
            <Field label="Subject" name="subject" placeholder="Consultation enquiry" />
          </div>
          <div className="mt-5">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell us how we can help…"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>

          <button
            type="submit"
            className="btn-primary mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>

          {sent && (
            <p className="mt-4 text-sm text-primary">Thank you — we will get back to you within 24 hours.</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        required
        {...rest}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
      />
    </label>
  );
}
