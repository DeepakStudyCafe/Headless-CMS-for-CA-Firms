import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Globe, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPageData, getImageUrl } from '@/lib/api';

export const Route = createFileRoute('/team')({
  component: TeamPage,
});

function TeamPage() {
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    getPageData('team').then(setPageData);
  }, []);

  if (!pageData) return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;

  const teamSection = pageData?.sections?.find((s: any) => s.type === 'team');
  const content = teamSection?.textContent || {};
  const team = content.items || [];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display mb-6">{content.heading}</h1>
            <p className="text-xl text-muted-foreground">{content.description}</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative border border-border shadow-soft">
                  {member.img && (
                    <img src={getImageUrl(member.img)} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-primary hover:border-transparent transition">
                      <Globe size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-primary transition">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-display">{member.name}</h3>
                <p className="text-primary mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
