import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getPageData, getWebsiteData, API_URL, WEBSITE_SLUG } from '@/lib/api';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
type ContactForm = z.infer<typeof contactSchema>;

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    Promise.all([getPageData('contact'), getWebsiteData()]).then(([p, w]) => {
      setPageData(p);
      setWebsiteData(w);
    });
  }, []);

  const onSubmit = async (data: ContactForm) => {
    setSubmitError('');
    try {
      const res = await fetch(`${API_URL}/forms/contact`, {
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

  if (!pageData || !websiteData) return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;

  const contactSection = pageData?.sections?.find((s: any) => s.type === 'contact');
  const content = contactSection?.textContent || {};

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <section className="relative pt-32 pb-20 overflow-hidden bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display mb-6">{content.heading}</h1>
            <p className="text-xl text-muted-foreground">{content.description}</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-display mb-6">{content.panelHeading || "Get in Touch"}</h2>
                <p className="text-muted-foreground text-lg">{content.panelDesc || "Reach out to us to discover how we can help you achieve your financial goals."}</p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Our Office</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{websiteData.address}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">{websiteData.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">{websiteData.email}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center flex-shrink-0 text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">{content.workingHours || websiteData.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft">
              <h3 className="text-2xl font-display mb-6">Send us a Message</h3>
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input {...register('name')} type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input {...register('email')} type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea {...register('message')} rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none"></textarea>
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition disabled:opacity-70 flex items-center justify-center gap-2">
                  {isSubmitting && <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></span>}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
