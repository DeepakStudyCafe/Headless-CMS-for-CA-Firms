import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPageData } from '@/lib/api';

export const Route = createFileRoute('/services/')({
  component: ServicesPage,
});

function ServicesPage() {
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    getPageData('services').then(setPageData);
  }, []);

  if (!pageData) return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;

  const servicesSection = pageData?.sections?.find((s: any) => s.type === 'services');
  const content = servicesSection?.textContent || {};
  const srvs = content.items || [];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <section className="relative pt-32 pb-20 overflow-hidden bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display mb-6">{content.heading}</h1>
            <p className="text-xl text-muted-foreground">{content.description}</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {srvs.map((s: any, i: number) => {
              const Icon = (Icons as any)[s.icon] || Icons.FileText;
              return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={s.path || '#'} className="block group p-8 rounded-3xl border border-border bg-card shadow-soft hover:shadow-float transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-display mb-3 group-hover:text-primary transition-colors">{s.name || s.title}</h3>
                  <p className="text-muted-foreground mb-6">{s.desc}</p>
                  <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors gap-2">
                    Learn More <Icons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )})}
          </div>
        </div>
      </section>
    </div>
  );
}
