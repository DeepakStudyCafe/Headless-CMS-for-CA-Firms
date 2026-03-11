import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/common/ScrollReveal';

const Contact = () => {
  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Contact</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Let's <span className="text-gradient-gold">Connect</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl text-lg">
              We'd love to discuss how we can help your business thrive.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="card-premium p-8">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">Send Us a Message</h2>
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
                    <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Subject</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Message</label>
                    <textarea rows={5} className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" />
                  </div>
                  <button type="submit" className="btn-primary-premium text-sm w-full">
                    <Send className="w-4 h-4 mr-2 inline" /> Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="card-premium p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Office Address</p>
                      <p className="text-sm text-muted-foreground">123 Financial District, Bandra Kurla Complex, Mumbai, Maharashtra 400051</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 22 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@apexassociates.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon – Fri: 9:00 AM – 6:00 PM<br />Sat: 10:00 AM – 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={0.15}>
              <div className="card-premium overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.86!3d19.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM2LjAiTiA3MsKwNTEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy section-padding">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Schedule a Free Consultation
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Our experts are ready to help you navigate your financial challenges.
            </p>
            <Link to="/query" className="btn-gold px-10 py-4">Submit a Query</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
