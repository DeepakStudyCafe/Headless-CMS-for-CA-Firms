import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData, getWebsiteData, API_URL, WEBSITE_SLUG } from '../lib/api';
import { FullPageLoader } from '../components/Loader';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';

const ContactPage = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success'|'error', msg: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await fetch(`${API_URL}/forms/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website: WEBSITE_SLUG })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitStatus({ type: 'success', msg: data.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', msg: data.message || 'Failed to send message.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', msg: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    getPageData('contact').then((res) => setPageData(mapData(res))).catch(console.error);
    getWebsiteData().then((res) => setWebsiteData(res)).catch(console.error);
  }, []);

  if (!pageData || !websiteData) return <FullPageLoader />;

  const contactItems = [
    { icon: MapPin, label: 'Address', value: websiteData?.address },
    { icon: Phone, label: 'Phone', value: websiteData?.phone },
    { icon: Mail, label: 'Email', value: websiteData?.email },
    { icon: Clock, label: 'Hours', value: websiteData?.workingHours },
  ].filter(item => Boolean(item.value));

  const mapUrl = websiteData?.themeConfig?.contactContent?.mapUrl || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112102.39294528148!2d76.95350361352495!3d28.593259837373325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b11b5afac41%3A0xc390f77dce7e20f1!2sStudyCafe!5e0!3m2!1sen!2sin!4v1714488349071!5m2!1sen!2sin';

  return (
    <div>
      <PageHero title="Contact Us" breadcrumb="Contact" image={pageData?.sections?.find((s: any) => s.type === 'hero')?.imageUrl || `${(import.meta.env.VITE_API_URL || '').replace(/\/api$/, '')}/uploads/contact-hero.jpg`} />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'contact-header')?.textContent?.heading}</h2>
            <p className="text-muted-foreground mb-8">{pageData?.sections?.find((s: any) => s.type === 'contact-header')?.textContent?.subheading}</p>

            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {submitStatus.msg}
              </div>
            )}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                <input type="text" placeholder="Subject" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
              <textarea required rows={5} placeholder="Your Message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none" />
              <button type="submit" disabled={isSubmitting} className="btn-primary-gradient disabled:opacity-70">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="card-premium p-6">
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, label, value }) => (
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
                src={mapUrl}
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
