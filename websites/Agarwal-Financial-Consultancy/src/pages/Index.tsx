import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData, getPosts } from '../lib/api';
import { FullPageLoader } from '../components/Loader';
import { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp, Star, ArrowRight, Rocket, Factory, Monitor, Briefcase } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedCounter from '../components/AnimatedCounter';
import { UpdatesTicker } from '../components/UpdatesTicker';

const Index = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getPageData('home').then((res) => setPageData(mapData(res))).catch(console.error);
    getPosts(20).then(setPosts).catch(console.error);
  }, []);

  const currentSlides = pageData?.sections?.find((s: any) => s.type === 'hero')?.textContent?.slides || [];

  const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % (currentSlides.length || 1)), [currentSlides.length]);
  const prevSlide = () => setCurrent((p) => (p - 1 + currentSlides.length) % (currentSlides.length || 1));

  useEffect(() => {
    if (!currentSlides.length) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, currentSlides.length]);

  if (!pageData || currentSlides.length === 0) return <FullPageLoader />;

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-screen min-h-[600px] overflow-hidden" style={{ backgroundColor: '#06142b' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img src={currentSlides[current].image} alt={currentSlides[current].title} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ backgroundColor: 'hsl(var(--primary) / 0.35)' }} />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="container-wide mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="h-1 gradient-accent mb-6 rounded-full"
                />
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight" style={{ color: 'hsl(var(--primary-foreground))' }}>
                  {currentSlides[current].title}
                </h1>
                <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'hsl(var(--primary-foreground) / 0.85)' }}>
                  {currentSlides[current].subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary-gradient">Contact Us</Link>
                  <Link to="/services" className="btn-outline-light">{pageData?.sections?.find((s: any) => s.type === 'services-section')?.textContent?.heading || 'Our Services'}</Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Nav arrows */}
        

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {(pageData?.sections?.find((s: any) => s.type === 'hero')?.textContent?.slides || []).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-10 bg-accent' : 'w-2 bg-card/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Services */}
      <SectionWrapper className="bg-background">
        <div className="text-center mb-12">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'services-section')?.textContent?.heading || 'Our Services'}</h2>
          <p className="section-subtitle">{pageData?.sections?.find((s: any) => s.type === 'services-section')?.textContent?.subheading}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {(pageData?.sections?.find((s: any) => s.type === 'services-section')?.textContent?.items || []).map((s: any, i: number) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/services/${s.name.toLowerCase().replace(/ /g, '-')}`} className="card-premium block p-6 h-full group">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <s.icon size={22} style={{ color: 'hsl(var(--primary-foreground))' }} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          {posts && posts.length > 0 && (
            <aside className="w-full lg:w-80 flex-shrink-0 self-stretch" aria-label="Latest updates">
              <UpdatesTicker posts={posts} />
            </aside>
          )}
        </div>
      </SectionWrapper>

      {/* About Overview + Stats */}
      <SectionWrapper className="bg-muted">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'about')?.textContent?.heading || 'Why Choose Us?'}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 18 years of experience, we combine deep industry knowledge with innovative solutions to deliver exceptional financial services. Our team of certified professionals is committed to your success.
            </p>
            <Link to="/about" className="btn-primary-gradient inline-flex items-center gap-2">
              Learn More <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <AnimatedCounter end={500} suffix="+" label="Clients Served" />
            <AnimatedCounter end={18} suffix="+" label="Years Experience" />
            <AnimatedCounter end={50} suffix="+" label="Team Members" />
            <AnimatedCounter end={98} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper className="bg-background">
        <div className="text-center mb-12">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'industries')?.textContent?.heading || 'Industries We Serve'}</h2>
          <p className="section-subtitle">{pageData?.sections?.find((s: any) => s.type === 'industries')?.textContent?.subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(pageData?.sections?.find((s: any) => s.type === 'industries')?.textContent?.items || []).map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium p-6 text-center group"
            >
              <div className="w-14 h-14 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ind.icon size={24} style={{ color: 'hsl(var(--primary-foreground))' }} />
              </div>
              <h3 className="font-heading font-semibold mb-1 text-foreground">{ind.name}</h3>
              <p className="text-sm text-muted-foreground">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-muted">
        <div className="text-center mb-12">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'testimonials')?.textContent?.heading}</h2>
          <p className="section-subtitle">{pageData?.sections?.find((s: any) => s.type === 'testimonials')?.textContent?.subheading}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {(pageData?.sections?.find((s: any) => s.type === 'testimonials')?.textContent?.items || []).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-premium p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 container-wide mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" style={{ color: 'hsl(var(--primary-foreground))' }}>
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'hsl(var(--primary-foreground) / 0.85)' }}>
            Let's discuss how our expertise can help your business grow and thrive.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 rounded-lg font-semibold gradient-accent transition-all duration-300 hover:-translate-y-1 text-secondary">
            Schedule a Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
