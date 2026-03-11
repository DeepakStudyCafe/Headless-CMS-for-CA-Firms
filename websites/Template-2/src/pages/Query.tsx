import { useState } from 'react';
import { Send, Phone, Mail, HelpCircle, ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

const faqs = [
  { q: 'What services do you offer?', a: 'We offer bookkeeping, GST filing, payroll, tax planning, company formation, compliance, audit, and financial advisory services.' },
  { q: 'How do I get started?', a: 'Simply fill out the query form or contact us directly. We\'ll schedule a free initial consultation.' },
  { q: 'What are your fees?', a: 'Our fees depend on the scope and complexity of services. We offer transparent, competitive pricing with no hidden charges.' },
  { q: 'Do you work with startups?', a: 'Absolutely! We have specialized packages designed for startups and growing businesses.' },
];

const Query = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Get in Touch</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Submit a <span className="text-gradient-gold">Query</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl text-lg">Have a question? We'd love to hear from you.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="card-premium p-8">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">Your Query</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Full Name</label>
                      <input type="text" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Email</label>
                      <input type="email" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Phone</label>
                    <input type="tel" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Service of Interest</label>
                    <select className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30">
                      <option>Select a service</option>
                      <option>Bookkeeping</option>
                      <option>GST Filing</option>
                      <option>Payroll</option>
                      <option>Tax Planning</option>
                      <option>Company Formation</option>
                      <option>Compliance</option>
                      <option>Audit Services</option>
                      <option>Financial Advisory</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Your Query</label>
                    <textarea rows={5} className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" />
                  </div>
                  <button type="submit" className="btn-primary-premium text-sm w-full">
                    <Send className="w-4 h-4 mr-2" /> Submit Query
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="card-premium p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">+91 22 1234 5678</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">info@apexassociates.com</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="card-premium p-6">
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-accent" /> FAQs
                </h3>
                <div className="space-y-2">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-border last:border-0">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-3 text-left">
                        <span className="text-xs font-medium text-foreground pr-2">{faq.q}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && <p className="text-xs text-muted-foreground pb-3">{faq.a}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Query;
