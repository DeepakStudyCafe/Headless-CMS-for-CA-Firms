import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABC & Associates" },
      { name: "description", content: "Contact ABC & Associates for audit, taxation, GST and advisory services. Reach our office in Mumbai." },
      { property: "og:title", content: "Contact ABC & Associates" },
      { property: "og:description", content: "Get in touch for a free consultation with our Chartered Accountants." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Contact</p>
            <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Let's talk about your finances</h1>
            <p className="mt-4 text-base text-subtle">Reach out for a free, no-obligation consultation. Our team usually responds within one business day.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-foreground">Send us a message</h2>
              <p className="mt-1 text-sm text-subtle">Tell us a little about your requirement and we'll get back to you.</p>

              {submitted ? (
                <div className="mt-8 rounded-lg border border-secondary/30 bg-secondary/10 p-6 text-center">
                  <p className="font-semibold text-primary">Thank you! Your message has been received.</p>
                  <p className="mt-1 text-sm text-subtle">We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form
                  className="mt-6 grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name"><Input required placeholder="Your name" /></Field>
                    <Field label="Email"><Input required type="email" placeholder="you@company.com" /></Field>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone"><Input required type="tel" placeholder="+91 ..." /></Field>
                    <Field label="Service"><Input placeholder="e.g. GST, Audit, Tax filing" /></Field>
                  </div>
                  <Field label="Message">
                    <Textarea rows={5} required placeholder="How can we help you?" />
                  </Field>
                  <Button type="submit" size="lg" className="mt-2 w-full bg-primary text-primary-foreground hover:bg-secondary sm:w-auto">
                    Send Message <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact details */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Office Address", lines: ["12 Business Avenue, 4th Floor", "Mumbai, Maharashtra 400001"] },
                { icon: Phone, title: "Phone", lines: ["+91 12345 67890", "+91 98765 43210"] },
                { icon: Mail, title: "Email", lines: ["contact@abcassociates.com", "support@abcassociates.com"] },
                { icon: Clock, title: "Office Hours", lines: ["Mon – Fri: 9:30 AM – 6:30 PM", "Sat: 10:00 AM – 2:00 PM"] },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 rounded-xl border border-border bg-surface p-5">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                    {c.lines.map((l) => (
                      <p key={l} className="mt-0.5 text-sm text-subtle">{l}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Office location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.82%2C18.92%2C72.84%2C18.94&layer=mapnik"
                  className="h-56 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}
