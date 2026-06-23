import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getPageData, getWebsiteData, PageData } from "@/lib/api";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mahipal M Singh & Associates" },
      { name: "description", content: "Contact Mahipal M Singh & Associates for audit, taxation, GST and advisory services. Reach our office in Mumbai." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([getPageData('contact'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-primary"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <SiteLayout>
        <main className="flex-grow"></main>
      </SiteLayout>
    );
  }

  const heroSection = pageData.sections?.find(s => s.type === 'hero');
  const contactInfoSection = pageData.sections?.find(s => s.type === 'contact-info');
  const formSection = pageData.sections?.find(s => s.type === 'form' || s.type === 'contact');

  const contactData = websiteData || {};
  const mapUrl = websiteData?.themeConfig?.contactContent?.mapUrl;
  const infoCards = [
    { icon: MapPin, title: "Office Address", lines: [contactData.address] },
    { icon: Phone, title: "Phone", lines: [contactData.phone] },
    { icon: Mail, title: "Email", lines: [contactData.email] },
    { icon: Clock, title: "Office Hours", lines: [contactData.workingHours || "Mon – Sat: 9:00 AM – 7:00 PM"] },
  ];

  return (
    <SiteLayout websiteData={websiteData}>
      {heroSection && (
        <section className="border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Reach Out</p>
              <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">{heroSection.textContent.heading}</h1>
              <p className="mt-6 text-lg text-subtle">{heroSection.textContent.subheading}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* FORM & INFO SIDEBAR */}
      {formSection && (
        <section className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Get in Touch" title={formSection.textContent.heading || "Send Us a Message"} />
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
              {/* Form */}
              <Reveal>
                <div className="rounded-2xl border border-border bg-background p-8 shadow-sm md:p-10">
                  {submitted ? (
                    <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Send className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mb-2 font-display text-2xl font-bold text-foreground">Message Sent!</h3>
                      <p className="text-subtle">Thank you for reaching out. We will get back to you within 24 business hours.</p>
                    </div>
                  ) : (
                    <form
                      className="grid gap-6"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        setError(null);
                        try {
                          const formData = new FormData(e.currentTarget);
                          const payload = {
                            name: formData.get("name"),
                            email: formData.get("email"),
                            phone: formData.get("phone"),
                            subject: formData.get("subject"),
                            message: formData.get("message"),
                            website: 'mahipal-m-singh-and-associates'
                          };
                          const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/forms/contact`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                          });
                          if (!response.ok) throw new Error('Failed to send message');
                          setSubmitted(true);
                          e.currentTarget.reset();
                          setTimeout(() => setSubmitted(false), 5000);
                        } catch (err: any) {
                          setError(err.message || "Failed to send message.");
                        } finally {
                          setIsSubmitting(false);
                        }
                      }}
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field label="Full Name"><Input name="name" required placeholder="John Doe" className="bg-surface" /></Field>
                        <Field label="Email Address"><Input name="email" required type="email" placeholder="john@example.com" className="bg-surface" /></Field>
                      </div>
                      <div className="grid gap-6"><Field label="Phone Number"><Input name="phone" required type="tel" placeholder="+91 9466083070" className="bg-surface" /></Field></div>
                      <Field label="Address">
                        <Textarea name="message" rows={5} required placeholder="Your complete address..." className="resize-none bg-surface" />
                      </Field>
                      {error && <p className="text-sm font-medium text-red-500">{error}</p>}
                      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 w-full bg-primary text-primary-foreground hover:bg-secondary">
                        {isSubmitting ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                      </Button>
                    </form>
                  )}
                </div>
              </Reveal>

              {/* Info Cards */}
              <Reveal delay={0.1}>
                <div className="space-y-6">
                  {infoCards.map((c) => (
                    <div key={c.title} className="group flex items-start gap-5 rounded-2xl border border-border bg-background p-6 shadow-sm transition-colors hover:border-primary">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <c.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-display text-lg font-semibold text-foreground">{c.title}</h3>
                        {c.lines.map((l) => (
                          <p key={l} className="mt-1 text-sm leading-relaxed text-subtle">{l}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* MAP */}
      <section className="border-b border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="h-[400px] overflow-hidden rounded-2xl border border-border shadow-lg">
              <iframe
                title="Office location"
                src={mapUrl || "https://www.openstreetmap.org/export/embed.html?bbox=72.82%2C18.92%2C72.84%2C18.94&layer=mapnik"}
                className="h-full w-full"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="bg-foreground py-16 text-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 text-center md:grid-cols-3">
          {[
            { icon: Phone, label: "Call Us", value: contactData.phone },
            { icon: Mail, label: "Email Us", value: contactData.email },
            { icon: MapPin, label: "Visit Us", value: contactData.address },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{item.label}</span>
                <span className="text-sm text-background/80">{item.value}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}
