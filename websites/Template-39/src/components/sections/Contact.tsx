import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-pink font-semibold uppercase tracking-[0.2em] text-xs">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl text-navy font-bold mt-3 mb-5">Let's discuss your financials</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            Drop us a query and one of our partners will get back to you within 24 hours.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-pink-light flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-pink" />
              </div>
              <div>
                <div className="font-semibold text-navy">Office Address</div>
                <div className="text-sm text-muted-foreground">12, Business Park, Andheri East, Mumbai 400069</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-pink-light flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-pink" />
              </div>
              <div>
                <div className="font-semibold text-navy">Call Us</div>
                <div className="text-sm text-muted-foreground">+91 99999 99999</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-pink-light flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-pink" />
              </div>
              <div>
                <div className="font-semibold text-navy">Email</div>
                <div className="text-sm text-muted-foreground">info@abcassociates.com</div>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-pink-light/40 rounded-3xl p-8 md:p-10 shadow-soft border border-pink-soft/30"
        >
          <div className="space-y-5">
            <Field label="Your Name" type="text" placeholder="John Doe" />
            <Field label="Email Address" type="email" placeholder="john@example.com" />
            <Field label="Phone Number" type="tel" placeholder="+91 99999 99999" />
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-lg bg-white border border-border focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full gradient-pink text-white font-semibold shadow-pink hover:scale-[1.02] transition-transform"
            >
              {sent ? "Message Sent ✓" : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-white border border-border focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
      />
    </div>
  );
}
