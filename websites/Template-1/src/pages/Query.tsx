import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Send, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import heroContact from '@/assets/hero-contact.jpg';

const faqs = [
  { q: 'What services do you offer?', a: 'We offer bookkeeping, GST filing, tax planning, audit services, company formation, compliance, payroll, and financial advisory.' },
  { q: 'How do I get started?', a: 'Simply fill out the query form or contact us directly. We will schedule a free initial consultation.' },
  { q: 'Do you work with startups?', a: 'Yes, we specialize in helping startups with incorporation, compliance, and financial planning.' },
  { q: 'What are your fees?', a: 'Our fees are tailored to the scope of work. Contact us for a customized quote.' },
  { q: 'Can you handle international clients?', a: 'Yes, we serve clients globally with expertise in cross-border taxation and compliance.' },
];

const Query = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your query! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <Layout>
      <PageHero
        title="Submit a"
        highlight="Query"
        subtitle="We are here to help. Reach out with any questions about our services."
        image={heroContact}
        breadcrumb={[{ label: 'Query' }]}
      />

      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="heading-md text-foreground mb-8 font-sans">Send Us a Query</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="text" placeholder="Full Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                    <input type="email" placeholder="Email Address *" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                    <input type="text" placeholder="Subject *" required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  </div>
                  <div className="mt-3">
                    <select name="service" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30">
                      <option value="" disabled selected>Select Service</option>
                      <option value="bookkeeping">Bookkeeping</option>
                      <option value="gst">GST Filing</option>
                      <option value="payroll">Payroll</option>
                      <option value="tax-planning">Tax Planning</option>
                      <option value="company-formation">Company Formation</option>
                      <option value="compliance">Compliance</option>
                      <option value="audit">Audit Services</option>
                      <option value="financial-advisory">Financial Advisory</option>
                      <option value="other">Other Queries</option>
                    </select>
                  </div>
                  <textarea placeholder="Your Query *" required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" />
                  <Button variant="navy" size="lg" type="submit">
                    <Send className="w-4 h-4 mr-2" /> Submit Query
                  </Button>
                </form>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="card-premium p-8">
                  <h3 className="font-semibold text-foreground font-sans mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href="tel:+911234567890" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Phone className="w-5 h-5 text-accent" /> +91 123 456 7890
                    </a>
                    <a href="mailto:info@sterlingco.in" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Mail className="w-5 h-5 text-accent" /> info@sterlingco.in
                    </a>
                    <p className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" /> 42, Business Park, Andheri East, Mumbai 400001
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="card-premium p-8">
                  <h3 className="font-semibold text-foreground font-sans mb-4">Response Time</h3>
                  <p className="text-sm text-muted-foreground">We typically respond within <span className="font-semibold text-foreground">24 hours</span> on business days.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding gradient-subtle">
        <div className="container-max mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground text-center mb-10">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-premium overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                    <span className="text-sm font-medium text-foreground">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && <div className="px-5 pb-5"><p className="text-sm text-muted-foreground">{faq.a}</p></div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Query;
