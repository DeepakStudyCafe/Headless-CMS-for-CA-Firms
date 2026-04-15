import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData, getWebsiteData, getImageUrl, submitContactForm } from '../lib/api';
import { FullPageLoader } from '../components/Loader';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';

const ContactPage = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [website, setWebsite] = useState<any>(null);
  useEffect(() => {
    getPageData('contact').then((res) => setPageData(mapData(res))).catch(console.error);
    getWebsiteData().then(setWebsite).catch(console.error);
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

            <form className="space-y-5" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const payload = {
                  name: (data.get('fullName') as string) || '',
                  email: (data.get('email') as string) || '',
                  phone: (data.get('phone') as string) || '',
                  company: (data.get('company') as string) || '',
                  message: (data.get('message') as string) || '',
                  subject: (data.get('subject') as string) || ''
                };
                try {
                  const res = await submitContactForm(payload);
                  if (res?.success) {
                    alert(res.message || 'Message sent successfully');
                    form.reset();
                  } else {
                    alert(res?.message || 'Failed to send message');
                  }
                } catch (err) {
                  alert('An error occurred. Please try again.');
                }
              }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="fullName" type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                <input name="email" type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="phone" type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                <input name="subject" type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
              <textarea name="message" rows={5} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none" />
              <button type="submit" className="btn-primary-gradient">Send Message</button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="card-premium p-6">
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {(pageData?.sections?.find((s: any) => s.type === 'contactInfo')?.textContent?.items || [
                  { icon: MapPin, label: 'Address', value: website?.address || 'Loading...' },
                  { icon: Phone, label: 'Phone', value: website?.phone || 'Loading...' },
                  { icon: Mail, label: 'Email', value: website?.email || 'Loading...' },
                  { icon: Clock, label: 'Hours', value: website?.workingHours || 'Loading...' },
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
                src={website?.themeConfig?.mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2626058990877!2d88.35165277475703!3d22.569279533093056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a8b63f35a7%3A0x45e489a2ba903631!2s7%2C%20Ganesh%20Chandra%20Ave%2C%20Mission%20Row%20Extension%2C%20Esplanade%2C%20Bowbazar%2C%20Kolkata%2C%20West%20Bengal%20700013!5e0!3m2!1sen!2sin!4v1776239126580!5m2!1sen!2sin"}
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
