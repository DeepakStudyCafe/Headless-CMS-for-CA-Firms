import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData } from '../lib/api';
import { FullPageLoader } from '../components/Loader';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';

const TeamPage = () => {
  const [pageData, setPageData] = useState<any>(null);
  useEffect(() => {
    getPageData('team').then((res) => setPageData(mapData(res))).catch(console.error);
  }, []);

  return (
    <div>
      <PageHero title="Our Team" breadcrumb="Team" image={pageData?.sections?.find((s: any) => s.type === 'hero')?.imageUrl || `${(import.meta.env.VITE_API_URL || '').replace(/\/api$/, '')}/uploads/team-hero.jpg`} />

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'team-header')?.textContent?.heading}</h2>
          <p className="section-subtitle">{pageData?.sections?.find((s: any) => s.type === 'team-header')?.textContent?.subheading}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {(pageData?.sections?.find((s: any) => s.type === 'partners')?.textContent?.items || []).map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="card-premium p-6 text-center">
              
              {p.image ? (
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="font-heading font-bold text-2xl" style={{ color: 'hsl(var(--primary-foreground))' }}>{p.name.split(' ').map((n: string) => n[0]).join('')}</span>
                </div>
              )}

              <h3 className="font-heading font-bold text-lg text-foreground">{p.name}</h3>
              <p className="text-primary font-medium text-sm">{p.role}</p>
              <p className="text-sm text-muted-foreground mt-1">{p.speciality}</p>
              
              {p.socialLinks && (
                <div className="flex justify-center gap-3 mt-4">
                  {p.socialLinks.linkedin && p.socialLinks.linkedin !== '#' && (
                    <a href={p.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
                      <Linkedin size={16} />
                    </a>
                  )}
                  {p.socialLinks.twitter && p.socialLinks.twitter !== '#' && (
                    <a href={p.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  )}
                  {p.socialLinks.email && p.socialLinks.email !== '#' && (
                    <a href={`mailto:${p.socialLinks.email}`} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
                      <Mail size={16} />
                    </a>
                  )}
                </div>
              )}

            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted">
        <div className="text-center mb-12">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'team-core-header')?.textContent?.heading}</h2>
          <p className="section-subtitle">{pageData?.sections?.find((s: any) => s.type === 'team-core-header')?.textContent?.subheading}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(pageData?.sections?.find((s: any) => s.type === 'team')?.textContent?.items || []).map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-premium p-5 flex items-center gap-4">
              
              {t.image ? (
                 <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                 </div>
              ) : (
                 <div className="w-12 h-12 rounded-full gradient-dark flex items-center justify-center flex-shrink-0">
                   <span className="font-heading font-semibold text-sm" style={{ color: 'hsl(var(--secondary-foreground))' }}>{t.name.split(' ').map((n: string) => n[0]).join('')}</span>
                 </div>
              )}

              <div>
                <h4 className="font-heading font-semibold text-foreground">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-8">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'team-certs-header')?.textContent?.heading}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          
          {((pageData?.sections?.find((s: any) => s.type === 'team-certs-header')?.textContent?.items || [
            {title: 'ICAI Certified'}, {title:'ISO 27001'}, {title:'DISA Qualified'}, {title:'GST Practitioner'}, {title:'IFRS Expert'}, {title:'Forensic Accounting'}
          ]) as any[]).map((cert, i) => (
            <div key={i} className="card-premium px-5 py-3 text-sm font-medium text-foreground">{cert.title || cert}</div>
          ))}

        </div>
      </SectionWrapper>
    </div>
  );
};

export default TeamPage;
