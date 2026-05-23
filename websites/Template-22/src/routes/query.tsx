import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPageData } from '@/lib/api';

export const Route = createFileRoute('/query')({
  component: QueryPage,
});

function QueryPage() {
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    getPageData('query').then(setPageData);
  }, []);

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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Doe" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none">
                    {queryTypes.map((q: any, i: number) => (
                      <option key={i} value={q.value}>{q.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Query</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Describe your query in detail..."></textarea>
              </div>
              <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
                Submit Query
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
