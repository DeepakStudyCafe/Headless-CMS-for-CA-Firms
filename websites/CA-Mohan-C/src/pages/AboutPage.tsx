import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData } from '../lib/api';
import { FullPageLoader } from '../components/Loader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, Shield, Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedCounter from '../components/AnimatedCounter';

const AboutPage = () => {
  const [pageData, setPageData] = useState<any>(null);
  useEffect(() => {
    getPageData('about').then((res) => setPageData(mapData(res))).catch(console.error);
  }, []);
  if (!pageData) return <FullPageLoader />;

  const aboutSection = pageData?.sections?.find((s: any) => s.type === 'about')
  const statsSection = pageData?.sections?.find((s: any) => s.type === 'stats')
  // stats may be stored in about section or in a separate stats section; backend may store JSON as string
  let aboutStatsRaw = aboutSection?.textContent?.stats ?? statsSection?.textContent?.stats ?? []
  let aboutStats: any[] = []
  if (typeof aboutStatsRaw === 'string') {
    try { aboutStats = JSON.parse(aboutStatsRaw) } catch { aboutStats = aboutStatsRaw.trim() ? [aboutStatsRaw] : [] }
  } else if (Array.isArray(aboutStatsRaw)) {
    aboutStats = aboutStatsRaw
  } else {
    aboutStats = []
  }

  return (
    <div>
      <PageHero 
        title="About Us" 
        breadcrumb="About" 
        image={
          pageData?.sections?.find((s: any) => s.type === 'about')?.imageUrl || 
          pageData?.sections?.find((s: any) => s.type === 'hero')?.imageUrl || 
          `${(import.meta.env.VITE_API_URL || '').replace(/\/api$/, '')}/uploads/about-hero.jpg`
        } 
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">
              {pageData?.sections?.find((s: any) => s.type === 'about')?.textContent?.heading || 'Who We Are'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {pageData?.sections?.find((s: any) => s.type === 'about')?.textContent?.description1 || "Mohan is a leading chartered accountancy firm with a legacy of excellence spanning nearly two decades. We combine traditional values with modern innovation to deliver world-class financial services."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {pageData?.sections?.find((s: any) => s.type === 'about')?.textContent?.description2 || "Our team of certified chartered accountants, tax experts, and financial advisors work collaboratively to provide comprehensive solutions tailored to each client's unique needs."}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {aboutStats.length > 0 ? (
              <>
                {aboutStats.map((stat: any, i: number) => {
                  const raw = stat.end ?? stat.value ?? ''
                  const rawStr = String(raw || '')
                  const numPart = rawStr.replace(/[^0-9.-]/g, '')
                  const end = numPart ? Number(numPart) : 0
                  const suffix = stat.suffix || (rawStr.match(/[^0-9.-]+$/)?.[0] || '')
                  return <AnimatedCounter key={i} end={end} suffix={suffix} label={stat.label || ''} />
                })}
              </>
            ) : (
              <>
                <AnimatedCounter end={500} suffix="+" label="Clients Served" />     
                <AnimatedCounter end={18} suffix="+" label="Years Experience" />    
                <AnimatedCounter end={50} suffix="+" label="Team Members" />        
                <AnimatedCounter end={12} label="Industry Awards" />
              </>
            )}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-premium p-8">
            <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
              <Target size={28} style={{ color: 'hsl(var(--primary-foreground))' }} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
              {pageData?.sections?.find((s: any) => s.type === 'about')?.textContent?.missionHeading || 'Our Mission'}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {pageData?.sections?.find((s: any) => s.type === 'about')?.textContent?.missionText || "To empower businesses with innovative financial solutions, ensuring compliance, growth, and long-term success through expert guidance and unwavering commitment."}
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-premium p-8">
            <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4">
              <Eye size={28} className="text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
              {pageData?.sections?.find((s: any) => s.type === 'about')?.textContent?.visionHeading || 'Our Vision'}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {pageData?.sections?.find((s: any) => s.type === 'about')?.textContent?.visionText || "To be the most trusted and innovative chartered accountancy firm globally, setting new benchmarks in financial services excellence."}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'values')?.textContent?.heading || 'Our Core Values'}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(pageData?.sections?.find((s: any) => s.type === 'values')?.textContent?.items || []).map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-premium p-6 text-center">
              <div className="w-12 h-12 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                <v.icon size={22} style={{ color: 'hsl(var(--primary-foreground))' }} />
              </div>
              <h3 className="font-heading font-semibold mb-2 text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted">
        <div className="text-center mb-12">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'timeline')?.textContent?.heading || 'Our Journey'}</h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="space-y-8">
            {(pageData?.sections?.find((s: any) => s.type === 'timeline')?.textContent?.items || []).map((t, i) => (
              <motion.div key={t.year} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="card-premium p-6 inline-block">
                    <span className="text-sm font-semibold text-primary">{t.year}</span>
                    <h4 className="font-heading font-bold text-lg text-foreground">{t.title}</h4>
                    <p className="text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full gradient-primary flex-shrink-0 relative z-10" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;
