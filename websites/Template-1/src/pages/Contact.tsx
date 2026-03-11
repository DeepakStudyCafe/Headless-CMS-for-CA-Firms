import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import heroContact from '@/assets/hero-contact.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  return (
    <Layout>
      <PageHero
        title="Let's"
        highlight="Connect"
        subtitle="Ready to discuss how we can help your business? We'd love to hear from you."
        image={heroContact}
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="heading-md text-foreground mb-8 font-sans">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="text" placeholder="Full Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                    <input type="email" placeholder="Email Address *" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                    <input type="text" placeholder="Company Name" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  </div>
                  <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30">
                    <option value="">Select Service of Interest</option>
                    <option>Bookkeeping</option>
                    <option>GST Filing</option>
                    <option>Tax Planning</option>
                    <option>Audit Services</option>
                    <option>Company Formation</option>
                    <option>Compliance</option>
                    <option>Payroll</option>
                    <option>Financial Advisory</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Your Message *" required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" />
                  <Button variant="navy" size="lg" type="submit">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </form>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="card-premium p-8">
                  <h3 className="font-semibold text-foreground font-sans mb-6">Office Details</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Mumbai (Head Office)</p>
                        <p className="text-xs text-muted-foreground mt-1">42, Sterling Tower, Business Park, Andheri East, Mumbai 400001</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <a href="tel:+911234567890" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">+91 123 456 7890</a>
                        <a href="tel:+911234567891" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">+91 123 456 7891</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <a href="mailto:info@sterlingco.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">info@sterlingco.in</a>
                        <a href="mailto:careers@sterlingco.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">careers@sterlingco.in</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Mon - Fri: 9:30 AM - 6:30 PM</p>
                        <p className="text-sm text-muted-foreground">Sat: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="card-premium overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.006!2d72.8544!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzQ5LjAiTiA3MsKwNTEnMTUuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                    className="rounded-xl"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-center">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <h2 className="heading-lg text-primary-foreground mb-4">Prefer to Talk?</h2>
            <p className="text-lg text-primary-foreground/50 mb-8">Schedule a free 30-minute consultation with our experts.</p>
            <Button variant="gold" size="lg" asChild>
              <a href="tel:+911234567890"><Phone className="w-4 h-4 mr-2" /> Call Us Now</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
