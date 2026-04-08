import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData, getImageUrl } from '../lib/api';
import { FullPageLoader } from '../components/Loader';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';

const ContactPage = () => {
  const [pageData, setPageData] = useState<any>(null);
  useEffect(() => {
    getPageData('contact').then((res) => setPageData(mapData(res))).catch(console.error);
  }, []);
  if (!pageData) return <FullPageLoader />;

  return (
    <div>
      <PageHero title="Contact Us" breadcrumb="Contact" image={pageData?.sections?.find((s: any) => s.type === 'hero')?.imageUrl || getImageUrl('/uploads/contact-hero.jpg')} />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'contact-header')?.textContent?.heading}</h2>
            <p className="text-muted-foreground mb-8">{pageData?.sections?.find((s: any) => s.type === 'contact-header')?.textContent?.subheading}</p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
              <textarea rows={5} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none" />
              <button type="submit" className="btn-primary-gradient">Send Message</button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="card-premium p-6">
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {(pageData?.sections?.find((s: any) => s.type === 'contactInfo')?.textContent?.items || [
                  { icon: MapPin, label: 'Address', value: 'Shiv Shankar Nagar, Near Nirmal Vidhyalaya, Salt Pan Road, Wadala East, Mumbai - 400037' },
                  { icon: Phone, label: 'Phone', value: '+91 977354512' },
                  { icon: Mail, label: 'Email', value: 'vineettaral@gmail.com' },
                  { icon: Clock, label: 'Hours', value: 'Mon – Fri : 11:00 AM – 7:00 PM' },
                ]).map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon size={18} style={{ color: 'hsl(var(--primary-foreground))' }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-premium overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.779886573351!2d72.86561791064226!3d19.01930718209927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfe5ebe263a1%3A0x424a60bb0877c685!2sVineet%20Taral%20%26%20Associates%20-%20Tax%20Consultant%20%26%20Professional%20Accountant!5e1!3m2!1sen!2sin!4v1774852539553!5m2!1sen!2sin"
                width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Office Location"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContactPage;
