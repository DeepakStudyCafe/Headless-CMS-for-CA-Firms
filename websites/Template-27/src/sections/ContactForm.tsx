import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  message: z.string().trim().min(10, "Tell us a bit more").max(800),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setDone(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Get in touch</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-semibold text-charcoal">
              Let's talk about your <span className="text-gradient">finances</span>
            </h2>
            <p className="mt-5 text-soft-gray text-lg leading-relaxed">
              Tell us a little about your business and one of our partners will get back within 24 hours.
            </p>

            <ul className="mt-10 space-y-6">
              {[
                { icon: MapPin, label: "Office", value: "204, Trade Tower, MG Road, Mumbai 400001" },
                { icon: Phone, label: "Phone", value: "+91 99999 99999" },
                { icon: Mail, label: "Email", value: "hello@firm.com" },
              ].map((c) => (
                <li key={c.label} className="flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <c.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-soft-gray">{c.label}</p>
                    <p className="text-charcoal font-medium mt-1">{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-white border border-border shadow-elegant p-8 lg:p-10 space-y-5"
            >
              {(["name", "email", "phone"] as const).map((field) => (
                <div key={field}>
                  <label className="block text-xs font-medium uppercase tracking-wider text-soft-gray mb-2">
                    {field}
                  </label>
                  <input
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your full name" : field === "email" ? "you@company.com" : "+91 ..."}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-charcoal placeholder:text-soft-gray/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all"
                  />
                  {errors[field] && <p className="text-xs text-destructive mt-1">{errors[field]}</p>}
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-soft-gray mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-charcoal placeholder:text-soft-gray/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all resize-none"
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:bg-primary-glow transition-all shadow-soft disabled:opacity-70"
              >
                {loading ? <><Loader2 className="animate-spin" size={18} /> Sending...</> :
                 done ? "✓ Message sent" :
                 <>Send Message <Send size={16} /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
