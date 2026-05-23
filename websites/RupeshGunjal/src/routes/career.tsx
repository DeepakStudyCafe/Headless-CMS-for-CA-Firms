import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Briefcase, Upload, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getPageData, API_URL, WEBSITE_SLUG } from '@/lib/api';

const careerSchema = z.object({
  firstName: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  mobile: z.string().min(10, 'Mobile is required'),
  position: z.string().optional(),
});
type CareerForm = z.infer<typeof careerSchema>;

export const Route = createFileRoute('/career')({
  component: CareerPage,
});

function CareerPage() {
  const [pageData, setPageData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<CareerForm>({
    resolver: zodResolver(careerSchema),
  });

  useEffect(() => {
    getPageData('career').then(setPageData);
  }, []);

  const onSubmit = async (data: CareerForm) => {
    setSubmitError('');
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      formData.append('website', WEBSITE_SLUG);
      if (file) formData.append('resume', file);

      const res = await fetch(`${API_URL}/forms/career`, {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
      reset();
      setFile(null);
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  if (!pageData) return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const careerSection = pageData?.sections?.find((s: any) => s.type === 'career');

  const content = heroSection?.textContent || {};
  const careerContent = careerSection?.textContent || {};
  const jobs = careerContent.positions || [];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <section className="relative pt-32 pb-20 overflow-hidden bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display mb-6">{content.heading}</h1>
            <p className="text-xl text-muted-foreground">{content.subheading}</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-display">{careerContent.positionsHeading}</h2>
            <div className="space-y-4">
              {jobs.map((j: any, i: number) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-card shadow-soft hover:border-primary/50 transition">
                  <h3 className="font-medium text-lg mb-2">{j.title}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase size={14}/> {j.type}</span>
                    <span>Experience: {j.experience}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-soft">
              <h2 className="text-2xl font-display mb-6">{careerContent.formHeading}</h2>
              {submitted && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <p className="text-sm text-green-800">Application submitted successfully! We will get in touch.</p>
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
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input {...register('firstName')} type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" />
                    {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input {...register('email')} type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Mobile</label>
                    <input {...register('mobile')} type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" />
                    {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Position</label>
                    <select {...register('position')} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none">
                      {jobs.map((j: any) => <option key={j.title}>{j.title}</option>)}
                      <option>General Application</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Resume / CV</label>
                  <label className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-muted-foreground hover:border-primary/50 hover:bg-primary/5 transition cursor-pointer relative overflow-hidden">
                    <input 
                      type="file" 
                      className="absolute inset-0 opacity-0 cursor-pointer" 
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    <Upload size={32} className={`mb-4 ${file ? 'text-primary' : ''}`} />
                    <p>{file ? file.name : 'Click to upload or drag and drop'}</p>
                    {!file && <p className="text-sm mt-1">PDF, DOCX up to 10MB</p>}
                  </label>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-70">
                  {isSubmitting && <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></span>}
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
