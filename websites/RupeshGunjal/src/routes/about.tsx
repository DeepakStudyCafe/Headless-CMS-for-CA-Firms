import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPageData, getImageUrl } from '@/lib/api';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    getPageData('about').then(setPageData);
  }, []);

  if (!pageData) return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const heroContent = heroSection?.textContent || {};

  const aboutSection = pageData?.sections?.find((s: any) => s.type === 'about');
  const content = aboutSection?.textContent || {};
  const values = content.values || [];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display mb-6">{heroContent.heading || pageData.title?.split(' - ')[0]}</h1>
            <p className="text-xl text-muted-foreground">{heroContent.subheading}</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="aspect-square rounded-[2rem] overflow-hidden border border-border">
                {aboutSection?.imageUrl && (
                  <img src={getImageUrl(aboutSection.imageUrl)} alt="About Us" className="w-full h-full object-cover" />
                )}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-display mb-6">{content.heading}</h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>{content.description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50 rounded-3xl mx-4 mb-10">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display mb-6">{content.valuesHeading}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v: any, i: number) => {
              const Icon = (Icons as any)[v.icon] || Icons.Check;
              return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 bg-card rounded-[2rem] border border-border shadow-soft">
                <Icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-display mb-4">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </motion.div>
            )})}
          </div>
        </div>
      </section>
    </div>
  );
}
