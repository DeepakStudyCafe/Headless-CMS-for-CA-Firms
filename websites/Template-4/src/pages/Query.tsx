import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import contactHero from "@/assets/contact-hero.jpg";
import { Send, Phone, Mail, MessageCircle, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How quickly will I receive a response?", a: "We aim to respond to all queries within 24 business hours." },
  { q: "Can I schedule a call instead?", a: "Absolutely! Use our contact page or call us directly to schedule a consultation." },
  { q: "Is the initial consultation free?", a: "Yes, we offer a complimentary initial consultation to understand your needs." },
  { q: "Do you serve clients outside India?", a: "Yes, we have experience serving clients across multiple countries." },
];

const Query = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <PageHero title="Submit a Query" subtitle="We're here to help with your financial needs" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Query" }]} image={contactHero} />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">Get in Touch</span>
              <div className="section-divider mt-3 mb-5" />
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Have a Question?</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                  <input type="email" placeholder="Email Address" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                </div>
                <input type="text" placeholder="Subject" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                <select className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition">
                  <option>Select Service</option>
                  <option>Bookkeeping</option>
                  <option>GST Filing</option>
                  <option>Tax Planning</option>
                  <option>Audit Services</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Your Query" rows={5} className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none" />
                <button type="submit" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all">
                  <Send className="w-4 h-4" /> Submit Query
                </button>
              </form>
            </ScrollReveal>

            <div className="space-y-10">
              <ScrollReveal delay={0.2}>
                <h3 className="font-heading font-bold text-foreground text-xl mb-5">Quick Contact</h3>
                <div className="space-y-3">
                  {[
                    { icon: Phone, label: "+91 22 1234 5678", sub: "Mon-Sat, 9am-6pm" },
                    { icon: Mail, label: "info@sharmaco.com", sub: "We reply within 24 hours" },
                    { icon: MessageCircle, label: "Live Chat", sub: "Available during business hours" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
                      <div className="w-11 h-11 rounded-xl bg-emerald-subtle flex items-center justify-center">
                        <c.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{c.label}</div>
                        <div className="text-sm text-muted-foreground">{c.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <h3 className="font-heading font-bold text-foreground text-xl mb-5">FAQs</h3>
                <div className="space-y-2">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-card rounded-2xl overflow-hidden card-shadow">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                        <span className="flex items-center gap-2 font-medium text-foreground text-sm">
                          <HelpCircle className="w-4 h-4 text-primary shrink-0" /> {faq.q}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <p className="px-5 pb-5 text-sm text-muted-foreground pl-11 leading-relaxed">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Query;
