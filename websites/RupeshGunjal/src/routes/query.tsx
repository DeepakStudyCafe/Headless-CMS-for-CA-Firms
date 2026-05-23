import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getPageData, API_URL, WEBSITE_SLUG } from '@/lib/api';

const querySchema = z.object({
  name: z.string().min(2, 'First name is required'),
  lastName: z.string().optional(),
  email: z.string().email('Valid email is required'),
  serviceType: z.string().optional(),
  query: z.string().min(10, 'Query must be at least 10 characters'),
});
type QueryForm = z.infer<typeof querySchema>;

export const Route = createFileRoute('/query')({
  component: QueryPage,
});

function QueryPage() {
  const [pageData, setPageData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<QueryForm>({
    resolver: zodResolver(querySchema),
  });

  useEffect(() => {
    getPageData('query').then(setPageData);
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

  if (!pageData) return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const querySection = pageData?.sections?.find((s: any) => s.type === 'query-form');

  const content = heroSection?.textContent || {};
  const queryContent = querySection?.textContent || {};
  const queryTypes = queryContent.queryTypes || [];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <section className="relative pt-32 pb-20 overflow-hidden bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl text-center mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <HelpCircle size={32} />
            </div>
            <h1 className="text-5xl md:text-7xl font-display mb-6">{content.heading}</h1>
            <p className="text-xl text-muted-foreground">{content.subheading}</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12">
        <div className="container max-w-3xl mx-auto px-6">
          <div className="bg-card border border-border shadow-soft rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-display mb-2">{queryContent.formHeading}</h2>
            <p className="text-muted-foreground mb-8">{queryContent.formSubheading}</p>
            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <p className="text-sm text-green-800">Thank you for your query! We will get back to you shortly.</p>
              </div>
            )}
            {submitError && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm text-red-700">{submitError}</p>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input {...register('name')} type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="John" />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input {...register('lastName')} type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Doe" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input {...register('email')} type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="john@example.com" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <select {...register('serviceType')} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none">
                    <option value="">Select Service</option>
                    {queryTypes.map((q: any, i: number) => (
                      <option key={i} value={q.value}>{q.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Query</label>
                <textarea {...register('query')} rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Describe your query in detail..."></textarea>
                {errors.query && <p className="text-xs text-red-500 mt-1">{errors.query.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-70">
                {isSubmitting && <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></span>}
                {isSubmitting ? 'Submitting...' : 'Submit Query'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
