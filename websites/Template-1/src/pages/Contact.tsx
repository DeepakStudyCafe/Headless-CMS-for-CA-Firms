import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { API_URL, WEBSITE_SLUG, getWebsiteData, getPageData, getImageUrl } from '@/lib/api';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
type ContactForm = z.infer<typeof contactSchema>;

const inp = "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30";

const Contact = () => {
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [pageData, setPageData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    Promise.all([getWebsiteData(), getPageData('contact')]).then(([w, p]) => {
      setWebsiteData(w);
      setPageData(p);
    });
  }, []);

  const onSubmit = async (data: ContactForm) => {
    setSubmitError('');
    try {
      const res = await fetch(`${API_URL}/forms/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, websiteSlug: WEBSITE_SLUG, formType: 'contact' }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  const cc = websiteData?.themeConfig?.contactContent || {};
  const services = websiteData?.themeConfig?.services || [];
  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const contactSection = pageData?.sections?.find((s: any) => s.type === 'contact');
  const info = contactSection?.textContent?.info || {};

  return (
    <Layout>
      {heroSection && (
        <PageHero
          title={heroSection.textContent?.heading?.split(' ').slice(0, -1).join(' ') || ''}
          highlight={heroSection.textContent?.heading?.split(' ').pop() || ''}
          subtitle={heroSection.textContent?.subheading || cc.heroSubtitle || ''}
          image={heroSection.imageUrl ? getImageUrl(heroSection.imageUrl) : ''}
          breadcrumb={[{ label: 'Contact' }]}
        />
      )}

      {contactSection && (
        <section className="section-padding">
          <div className="container-max mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <ScrollReveal>
                  <h2 className="heading-md text-foreground mb-8 font-sans">{contactSection?.textContent?.formHeading || 'Send Us a Message'}</h2>

                  {submitted && (
                    <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                      <p className="text-sm text-green-800">Thank you for reaching out! We will contact you shortly.</p>
                    </div>
                  )}

                  {submitError && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                      <p className="text-sm text-red-700">{submitError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <input {...register('name')} placeholder="Full Name *" className={inp} />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <input {...register('email')} type="email" placeholder="Email Address *" className={inp} />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input {...register('phone')} type="tel" placeholder="Phone Number" className={inp} />
                      <input {...register('company')} placeholder="Company Name" className={inp} />
                    </div>
                    <select {...register('service')} className={inp}>
                      <option value="">Select Service of Interest</option>
                      {services.map((s: any) => <option key={s.title} value={s.title}>{s.title}</option>)}
                      <option value="Other">Other</option>
                    </select>
                    <div>
                      <textarea {...register('message')} placeholder="Your Message *" rows={5} className={`${inp} resize-none`} />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                    </div>
                    <Button variant="navy" size="lg" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2"><span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" /> Sending...</span>
                      ) : (
                        <><Send className="w-4 h-4 mr-2" /> Send Message</>
                      )}
                    </Button>
                  </form>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-2 space-y-6">
                {(info.address || websiteData?.address || info.phone || websiteData?.phone || info.email || websiteData?.email || info.workingHours || websiteData?.workingHours) && (
                  <ScrollReveal delay={0.1}>
                    <div className="card-premium p-8">
                      <h3 className="font-semibold text-foreground font-sans mb-6">{contactSection?.textContent?.infoHeading || 'Office Details'}</h3>
                      <div className="space-y-5">
                        { (info.address || websiteData?.address) && (
                            <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-foreground">{info.addressLabel || 'Head Office'}</p>
                              <p className="text-xs text-muted-foreground mt-1">{info.address || websiteData?.address}</p>
                            </div>
                          </div>
                        )}
                        { (info.phone || websiteData?.phone) && (
                          <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                              <a href={`tel:${(info.phone || websiteData?.phone || '').replace(/\\s/g, '')}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors block">{info.phone || websiteData?.phone}</a>
                              {(info.phone2) && <a href={`tel:${info.phone2.replace(/\\s/g, '')}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors block">{info.phone2}</a>}
                            </div>
                          </div>
                        )}
                        { (info.email || websiteData?.email) && (
                          <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                              <a href={`mailto:${info.email || websiteData?.email}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors block">{info.email || websiteData?.email}</a>
                              {(info.email2) && <a href={`mailto:${info.email2}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors block">{info.email2}</a>}
                            </div>
                          </div>
                        )}
                        { (info.workingHours || websiteData?.workingHours) && (
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                              {typeof info.workingHours === 'object'
                                ? Object.values(info.workingHours).filter(Boolean).map((h: any, i: number) => <p key={i} className="text-sm text-muted-foreground">{h}</p>)
                                : <p className="text-sm text-muted-foreground">{info.workingHours || websiteData?.workingHours}</p>
                              }
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {(cc.mapUrl || info.mapEmbedUrl) && (
                  <ScrollReveal delay={0.2}>
                    <div className="card-premium overflow-hidden">
                      <iframe
                        src={cc.mapUrl || info.mapEmbedUrl}
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
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {websiteData?.phone && (
        <section className="section-padding gradient-navy text-center">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <h2 className="heading-lg text-primary-foreground mb-4">{cc.ctaHeading || 'Prefer to Talk?'}</h2>
              <p className="text-lg text-primary-foreground/50 mb-8">{cc.ctaSubheading || 'Schedule a free 30-minute consultation with our experts.'}</p>
              <Button variant="gold" size="lg" asChild>
                <a href={`tel:${(websiteData?.phone || '').replace(/\\s/g, '')}`}><Phone className="w-4 h-4 mr-2" /> Call Us Now</a>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Contact;
