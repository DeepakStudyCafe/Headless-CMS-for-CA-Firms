import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Send, Phone, Mail, MapPin, ChevronDown, CheckCircle } from 'lucide-react';
import heroContact from '@/assets/hero-contact.jpg';
import { API_URL, WEBSITE_SLUG, getWebsiteData, getPageData } from '@/lib/api';

const querySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  queryType: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
type QueryForm = z.infer<typeof querySchema>;

const inp = "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30";

const Query = () => {
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [pageData, setPageData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<QueryForm>({
    resolver: zodResolver(querySchema),
  });

  useEffect(() => {
    Promise.all([getWebsiteData(), getPageData('query')]).then(([w, p]) => {
      setWebsiteData(w);
      setPageData(p);
    });
  }, []);

  const onSubmit = async (data: QueryForm) => {
    setSubmitError('');
    try {
      const res = await fetch(`${API_URL}/forms/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, website: WEBSITE_SLUG }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const formSection = pageData?.sections?.find((s: any) => s.type === 'query-form');
  const faqSection = pageData?.sections?.find((s: any) => s.type === 'faqs');
  const services = websiteData?.themeConfig?.services || [];
  const queryTypes = formSection?.textContent?.queryTypes || [
    { value: 'general', label: 'General Inquiry' },
    { value: 'pricing', label: 'Pricing & Packages' },
    { value: 'compliance', label: 'Compliance Issue' },
    { value: 'tax', label: 'Tax Planning' },
    { value: 'other', label: 'Other' },
  ];
  const faqs = faqSection?.textContent?.items || [];

  return (
    <Layout>
      <PageHero
        title={heroSection?.textContent?.heading?.replace(/\s\S+$/, '') || "Submit a"}
        highlight={heroSection?.textContent?.heading?.split(' ').pop() || "Query"}
        subtitle={heroSection?.textContent?.subheading || "We are here to help. Reach out with any questions about our services."}
        image={heroContact}
        breadcrumb={[{ label: 'Query' }]}
      />

      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="heading-md text-foreground mb-8 font-sans">{formSection?.textContent?.formHeading || 'Send Us a Query'}</h2>

                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    <p className="text-sm text-green-800">Thank you for your query! We will get back to you within 24 hours.</p>
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
                    <select {...register('queryType')} className={inp}>
                      <option value="">Select Query Type</option>
                      {queryTypes.map((qt: any) => <option key={qt.value} value={qt.value}>{qt.label}</option>)}
                    </select>
                  </div>
                  <select {...register('service')} className={inp}>
                    <option value="">Select Service</option>
                    {services.length > 0
                      ? services.map((s: any) => <option key={s.title} value={s.title}>{s.title}</option>)
                      : ['Bookkeeping', 'GST Filing', 'Payroll', 'Tax Planning', 'Company Formation', 'Compliance', 'Audit Services', 'Financial Advisory'].map(s => <option key={s}>{s}</option>)
                    }
                    <option value="other">Other</option>
                  </select>
                  <div>
                    <textarea {...register('message')} placeholder="Your Query *" rows={5} className={`${inp} resize-none`} />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                  </div>
                  <Button variant="navy" size="lg" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2"><span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" /> Submitting...</span>
                    ) : (
                      <><Send className="w-4 h-4 mr-2" /> Submit Query</>
                    )}
                  </Button>
                </form>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="card-premium p-8">
                  <h3 className="font-semibold text-foreground font-sans mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href={`tel:${(websiteData?.phone || '+911234567890').replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Phone className="w-5 h-5 text-accent" /> {websiteData?.phone || '+91 123 456 7890'}
                    </a>
                    <a href={`mailto:${websiteData?.email || 'info@sterlingco.in'}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Mail className="w-5 h-5 text-accent" /> {websiteData?.email || 'info@sterlingco.in'}
                    </a>
                    <p className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" /> {websiteData?.address || '42, Business Park, Andheri East, Mumbai 400001'}
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

      {faqs.length > 0 && (
        <section className="section-padding gradient-subtle">
          <div className="container-max mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="heading-lg text-foreground text-center mb-10">{faqSection?.textContent?.heading || 'Frequently Asked Questions'}</h2>
            </ScrollReveal>
            <div className="space-y-3">
              {faqs.map((faq: any, i: number) => (
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
      )}
    </Layout>
  );
};

export default Query;
