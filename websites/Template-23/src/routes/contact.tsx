import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABC & Associates" },
      { name: "description", content: "Speak with a partner. Confidential, considered, and on your terms." },
      { property: "og:title", content: "Contact — ABC & Associates" },
      { property: "og:description", content: "Begin a confidential conversation." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative">
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">/ Contact</p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] tracking-tight sm:text-7xl">
              A short, <br/><span className="text-muted-foreground">confidential note.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 sm:px-8">
          {/* Info */}
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-surface/40 p-6">
                <Mail className="h-5 w-5 text-brand" />
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="mt-1 text-base">contact@abcassociates.in</p>
              </div>
              <div className="rounded-xl border border-border bg-surface/40 p-6">
                <Phone className="h-5 w-5 text-brand" />
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                <p className="mt-1 text-base">+91 98765 43210</p>
              </div>
              <div className="rounded-xl border border-border bg-surface/40 p-6">
                <MapPin className="h-5 w-5 text-brand" />
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Office</p>
                <p className="mt-1 text-base leading-relaxed">14th Floor, Trident Tower<br/>Bandra Kurla Complex<br/>Mumbai 400051</p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="col-span-12 lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface via-background to-surface p-8 sm:p-10">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/15 blur-[120px]" />
              {submitted ? (
                <div className="relative flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/15 ring-1 ring-brand/40">
                    <Check className="h-6 w-6 text-brand-bright" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-semibold">Received.</h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground">A partner will reach out within one business day. All notes are held in confidence.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="relative grid gap-5 sm:grid-cols-2"
                >
                  <Field label="Name" name="name" placeholder="Your full name" />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                  <Field label="Phone" name="phone" type="tel" placeholder="+91" />
                  <Field label="Company" name="company" placeholder="Optional" />
                  <div className="sm:col-span-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us briefly what's on your mind."
                      className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>
                  <div className="sm:col-span-2 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <p className="text-xs text-muted-foreground">We respond within one business day.</p>
                    <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-brand-deep red-glow">
                      Send message
                      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={name !== "company" && name !== "phone"}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
      />
    </div>
  );
}
