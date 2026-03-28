import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState } from 'react';
import { getImageUrl } from '@/lib/api';

const DEFAULT_FEATURES = [
  { title: 'Dedicated Team of Experts', desc: 'A qualified team of CAs, CS, and legal professionals delivering comprehensive financial solutions.' },
  { title: 'Technology-Driven Approach', desc: 'We leverage cutting-edge tools for accurate, efficient financial management and real-time reporting.' },
  { title: 'Transparent Communication', desc: 'Regular updates, clear reporting, and a single point of contact — always accessible.' },
  { title: '100% Compliance Guarantee', desc: 'We ensure every filing meets regulatory deadlines with zero penalties, every single time.' },
];

export default function WhyChooseUsSection({ data }: { data?: any }) {
  const { ref, isVisible } = useIntersectionObserver(0.2);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const tc = data?.textContent || {};
  const label = tc.label || 'WHY US';
  const heading = tc.heading || 'Trusted. Expert. Always.';
  const quote = tc.quote || '"More than compliance — we build lasting financial clarity."';
  const badge = tc.badge || 'Trusted Since 2005';
  const ctaLabel = tc.cta || 'Our Story';
  const imageUrl = data?.imageUrl ? getImageUrl(data.imageUrl) : 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900';

  const features = (tc.items || DEFAULT_FEATURES).map((f: any) => ({
    title: f.title || '',
    desc: f.description || f.desc || '',
  }));

  return (
    <section ref={ref} className="py-20 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="container mx-auto px-6 lg:px-[8%]">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            {/* Decorative offset frame */}
            <div className="absolute -inset-[14px] rounded-[18px] pointer-events-none z-0" style={{ border: '1.5px solid #E8E2D9' }} />

            {/* L-bracket corner */}
            <svg className="absolute -top-[14px] -left-[14px] z-[3]" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M0 40V0H2V38H40V40H0Z" fill="none" stroke="#C8A96E" strokeWidth="2" />
            </svg>

            <div className="relative overflow-hidden rounded-2xl z-[1] group-hover:scale-[1.03] transition-transform duration-500">
              <img
                src={imageUrl}
                alt="Professional partnership symbolizing trust"
                className="w-full h-[380px] lg:h-[460px] object-cover transition-[filter] duration-[1s] ease-out"
                style={{ filter: isVisible ? 'grayscale(0%)' : 'grayscale(80%)' }}
                data-cursor="image"
              />
            </div>

            {/* Badge */}
            <div
              className="absolute -bottom-4 right-6 z-[2] font-body text-[12px] font-semibold px-[18px] py-[10px] rounded-lg shadow-lg"
              style={{ background: '#2D2D2D', color: '#FAF8F3' }}
            >
              {badge}
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <span className="font-body text-[10px] font-semibold tracking-[2.5px] uppercase block mb-2" style={{ color: '#C8A96E' }}>
              {label}
            </span>
            <h2 className="font-display font-semibold mb-3" style={{ fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.12, letterSpacing: '-0.015em', color: '#2D2D2D' }}>
              {heading}
            </h2>
            <p className="font-accent italic text-[16px] leading-[1.8] mb-4" style={{ color: '#6B6B6B' }}>
              {quote}
            </p>

            {/* Accent rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="w-[50px] h-[1.5px] origin-left mb-6"
              style={{ background: '#C8A96E' }}
            />

            {/* Feature rows */}
            <div>
              {features.map((f, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className="flex gap-4 py-4 cursor-default transition-all duration-[250ms]"
                  style={{
                    borderBottom: '1px solid #F2EDE4',
                    borderTop: i === 0 ? '1px solid #F2EDE4' : 'none',
                    transform: hoveredRow === i ? 'translateX(8px)' : 'translateX(0)',
                    background: hoveredRow === i ? '#FAF8F3' : 'transparent',
                    borderBottomColor: hoveredRow === i ? '#C8A96E' : '#F2EDE4',
                  }}
                >
                  <span
                    className="font-display font-bold italic flex-shrink-0 w-8 transition-all duration-[250ms]"
                    style={{
                      fontSize: hoveredRow === i ? '24px' : '22px',
                      color: '#C8A96E',
                    }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="font-body text-[15px] font-semibold" style={{ color: '#2D2D2D' }}>{f.title}</h4>
                    <p className="font-body text-[13px] font-light leading-[1.8] mt-0.5" style={{ color: '#6B6B6B' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              data-cursor="button"
              className="inline-block mt-6 font-body text-[13px] font-medium relative group/link transition-all duration-300"
              style={{ color: '#2D2D2D' }}
            >
              {ctaLabel} →
              <span
                className="absolute bottom-0 left-0 w-full h-[1px] origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"
                style={{ background: '#C8A96E' }}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
