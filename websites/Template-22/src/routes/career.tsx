import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Briefcase, Upload } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPageData } from '@/lib/api';

export const Route = createFileRoute('/career')({
  component: CareerPage,
});

function CareerPage() {
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    getPageData('career').then(setPageData);
  }, []);

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
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Position</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none">
                    {jobs.map((j: any) => <option key={j.title}>{j.title}</option>)}
                    <option>General Application</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Resume / CV</label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-muted-foreground hover:border-primary/50 hover:bg-primary/5 transition cursor-pointer">
                    <Upload size={32} className="mb-4" />
                    <p>Click to upload or drag and drop</p>
                    <p className="text-sm mt-1">PDF, DOCX up to 10MB</p>
                  </div>
                </div>
                <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
