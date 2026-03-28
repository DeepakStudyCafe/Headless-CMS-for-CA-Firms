import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function CTASection({ data, websiteData }: { data?: any; websiteData?: any }) {
  const { ref, isVisible } = useIntersectionObserver(0.3);

  const tc = data?.textContent || {};
  const label = tc.label || "LET'S TALK";
  const heading = tc.heading || 'Ready to Build Your Financial Future?';
  const subheading = tc.subheading || 'Take the first step toward financial clarity. Our expert team is ready to craft a strategy tailored to your business goals.';
  const ctaLabel = tc.cta || 'Book Consultation';
  const secondaryCtaLabel = tc.secondaryCta || 'Call Us';
  const footnote = tc.footnote || 'Response within 24 hrs · No obligation';
  const phone = websiteData?.phone || '';

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" style={{ background: '#2D2D2D' }}>
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }} />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(rgba(250,248,243,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,248,243,0.5) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      {/* Decorative text */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black leading-none pointer-events-none select-none tracking-tight whitespace-nowrap"
        style={{ fontSize: '160px', color: 'rgba(250,248,243,0.04)' }}
      >
        CONNECT
      </span>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-4" style={{ color: '#C8A96E' }}>
            {label}
          </span>
          <h2 className="font-display font-semibold mx-auto mb-5" style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.12, color: '#FAF8F3', maxWidth: '580px' }}>
            {heading}
          </h2>
          <p className="font-body font-light text-[16px] max-w-[480px] mx-auto leading-[1.7] mb-4" style={{ color: 'rgba(250,248,243,0.6)' }}>
            {subheading}
          </p>

          {/* Accent rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="w-[60px] h-[1.5px] mx-auto mb-8 origin-center"
            style={{ background: '#C8A96E' }}
          />

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" data-cursor="button"
              className="btn-shimmer font-body text-[13px] font-semibold px-[30px] py-[14px] rounded-md transition-all duration-[250ms]
                hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              style={{ background: '#FAF8F3', color: '#2D2D2D' }}
            >
              {ctaLabel}
            </a>
            <a href={phone ? `tel:${phone.replace(/\s/g, '')}` : '#'} data-cursor="button"
              className="font-body text-[13px] font-medium px-[30px] py-[14px] rounded-md transition-all duration-[250ms]"
              style={{ border: '1.5px solid rgba(250,248,243,0.3)', color: 'rgba(250,248,243,0.8)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8A96E'; e.currentTarget.style.color = '#C8A96E'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(250,248,243,0.3)'; e.currentTarget.style.color = 'rgba(250,248,243,0.8)'; }}
            >
              {secondaryCtaLabel}
            </a>
          </div>

          <span className="block font-body text-[11px] font-light mt-6" style={{ color: 'rgba(250,248,243,0.35)' }}>
            {footnote}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
