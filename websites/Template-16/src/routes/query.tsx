import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Phone, Mail, Calendar, Send, HelpCircle, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getPageData } from "@/lib/api";

export const Route = createFileRoute("/query")({
  component: QueryPage,
});

const iconMap: Record<string, any> = {
  Clock, Phone, Mail, Calendar, MapPin
};

function QueryPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", serviceType: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [pageData, setPageData] = useState<any>(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    getPageData('query').then((data) => {
      setPageData(data);
      setPageLoading(false);
    });
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setForm({ name: "", email: "", phone: "", serviceType: "", message: "" });
      setTimeout(() => setDone(false), 3000);
    }, 1200);
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const formSection = pageData?.sections?.find((s: any) => s.type === 'form-info');
  const faqSection = pageData?.sections?.find((s: any) => s.type === 'faqs');

  const heroTitle = heroSection?.textContent?.heading || "Get in Touch";
  const heroSubtitle = heroSection?.textContent?.title || "How Can We Help?";
  const heroDesc = heroSection?.textContent?.description || "Whether you have a question about our services, need expert advice, or are ready to partner with us, our team is here for you.";

  const formTitle = formSection?.textContent?.formTitle || "Submit a Query";
  const infoItems = formSection?.textContent?.info || [];
  const faqsData = faqSection?.textContent?.items || [];
  const faqHeading = faqSection?.textContent?.heading || "Common Questions";
  const faqTitle = faqSection?.textContent?.title || "Frequently Asked Questions";

  return (
    <div className="">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-primary opacity-[0.03]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-primary uppercase inline-block mb-4"
          >
            {heroTitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {heroSubtitle.split(' ').map((word: string, i: number, arr: any) => {
              if (i === arr.length - 1 || i === arr.length - 2) {
                 return <span key={i} className="text-gradient"> {word}</span>;
              }
              return <span key={i}> {word}</span>;
            })}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Query Form + Info Sidebar */}
      <section className="py-20 md:py-28 px-6 lg:px-8 relative bg-secondary/30">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 glass p-8 md:p-10 rounded-3xl shadow-card border border-border/50"
            >
              <h3 className="text-2xl font-bold mb-6">{formTitle}</h3>
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Type</label>
                    <select
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                      value={form.serviceType}
                      onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Bookkeeping">Bookkeeping</option>
                      <option value="GST Filing">GST Filing</option>
                      <option value="Tax Planning">Tax Planning</option>
                      <option value="Audit Services">Audit Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Query</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-premium py-4 mt-2 disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {loading ? "Sending..." : done ? "Query Sent ✓" : (
                    <>
                      <Send className="w-4 h-4" /> Send Query
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {infoItems.map((card: any, i: number) => {
                const Icon = iconMap[card.icon] || Clock;
                return (
                  <div key={card.title} className="glass p-6 rounded-2xl shadow-sm border border-border/50 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1">{card.title}</h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">{card.desc || card.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqsData.length > 0 && (
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-background relative">
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{faqHeading}</span>
              <h2 className="mt-3 text-3xl font-bold">{faqTitle}</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqsData.map((faq: any, i: number) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:border-primary/50 transition-colors">
                    <AccordionTrigger className="text-base font-bold hover:no-underline py-5">
                      <span className="flex items-center gap-3 text-left">
                        <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
