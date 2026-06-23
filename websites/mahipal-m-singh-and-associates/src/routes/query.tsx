import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Phone, Mail, Calendar, Send, HelpCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getPageData, getWebsiteData, PageData } from "@/lib/api";

export const Route = createFileRoute("/query")({
  head: () => ({
    meta: [
      { title: "Query & Support — Mahipal M Singh & Associates" },
      { name: "description", content: "Have a question about our CA services? Reach out to us." },
    ],
  }),
  component: QueryPage,
});

function QueryPage() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([getPageData('query'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        serviceType: formData.get("service"),
        query: formData.get("query"),
        website: 'mahipal-m-singh-and-associates'
      };
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.digitechai.in/api'}/forms/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Failed to submit query');
      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || "Failed to submit query.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
  const faqSection = pageData.sections?.find(s => s.type === 'faq');

  return (
    <SiteLayout websiteData={websiteData}>
      {heroSection && (
        <section className="border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Get in Touch</p>
              <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">{heroSection.textContent.heading}</h1>
              <p className="mt-6 text-lg text-subtle">{heroSection.textContent.subheading}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* FORM & SIDEBAR */}
      <section className="border-b border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow={heroSection?.textContent.eyebrow || "Your Questions"} title={heroSection?.textContent.formHeading || "Submit a Query"} />
          <div className="mt-12 grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <Reveal delay={0.1} className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-background p-8 shadow-sm md:p-10">
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 font-display text-2xl font-bold text-foreground">Query Submitted!</h3>
                    <p className="text-subtle">Our team will get back to you within 24 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Full Name</label>
                        <Input name="name" required placeholder="Your name" className="bg-surface" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email Address</label>
                        <Input name="email" required type="email" placeholder="you@example.com" className="bg-surface" />
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone Number</label>
                        <Input name="phone" type="tel" placeholder="+91 9466083070" className="bg-surface" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Service Type</label>
                        <select name="service" required className="flex h-10 w-full rounded-md border border-input bg-surface px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                          <option value="">Select a service</option>
                          <option value="audit">Audit & Assurance</option>
                          <option value="tax">Tax Planning & Filing</option>
                          <option value="gst">GST Advisory</option>
                          <option value="incorporation">Company Formation</option>
                          <option value="other">Other Queries</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Your Query</label>
                      <Textarea name="query" required placeholder="Describe your query in detail..." rows={5} className="resize-none bg-surface" />
                    </div>
                    {error && <p className="text-sm font-medium text-red-500">{error}</p>}
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-secondary">
                      {isSubmitting ? "Submitting..." : <><Send className="mr-2 h-4 w-4" /> Submit Query</>}
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-2">
              {[
                { icon: Clock, title: "Response Time", desc: "We typically respond within 24 business hours. Urgent queries are prioritized and addressed within 4 hours." },
                { icon: Phone, title: "Direct Contact", desc: `Phone: ${websiteData?.phone || "+91 9466083070"}\nEmail: ${websiteData?.email || "camahipalyadav@gmail.com"}` },
                { icon: Calendar, title: "Office Hours", desc: websiteData?.workingHours ? websiteData.workingHours.replace(", ", "\n") : "Mon-Sat: 09:30 AM to 18:00 PM\nSun: Closed" },
              ].map((item, i) => (
                <Reveal key={item.title} delay={0.2 + i * 0.1}>
                  <div className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-colors hover:border-primary">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="whitespace-pre-line text-sm leading-relaxed text-subtle">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      {faqSection && (
        <section className="bg-background py-20">
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading eyebrow="Common Questions" title={faqSection.textContent.heading || "Frequently Asked Questions"} />
            <Reveal delay={0.1}>
              <div className="mt-12">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqSection.textContent.items?.map((faq: any, i: number) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-surface px-6 transition-colors data-[state=open]:border-primary/50">
                      <AccordionTrigger className="py-5 font-display text-lg font-semibold text-foreground hover:no-underline hover:text-primary">
                        <span className="flex items-center gap-3 text-left">
                          <HelpCircle className="h-5 w-5 shrink-0 text-primary" />
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm leading-relaxed text-subtle">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
