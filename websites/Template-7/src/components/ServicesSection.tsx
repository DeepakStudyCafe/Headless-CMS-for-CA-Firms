import { useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const services = [
  {
    title: 'Tax Planning & Filing',
    desc: 'Strategic tax optimization for individuals and businesses. We minimize liabilities while ensuring full compliance.',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    title: 'GST Compliance',
    desc: 'End-to-end GST registration, return filing, and compliance management for seamless operations.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Statutory Audit',
    desc: 'Independent and thorough auditing services that ensure transparency and accuracy in every report.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Company Registration',
    desc: 'Seamless company incorporation, LLP formation, and business registration services across India.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Financial Advisory',
    desc: 'Data-driven financial strategy, investment advisory, and wealth management solutions for growth.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    title: 'Bookkeeping',
    desc: 'Accurate, timely bookkeeping and accounting services for a clear financial picture year-round.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const num = String(index + 1).padStart(2, '0');

  const handleMouse = (e: MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      className="group relative overflow-hidden rounded-xl p-8 transition-all duration-300 cursor-pointer
        hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(45,45,45,0.08),0_0_0_1px_rgba(200,169,110,0.3)]"
      style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}
      data-cursor="button"
    >
      {/* Radial glow on mouse move */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{ background: 'radial-gradient(180px at var(--mx,50%) var(--my,50%), rgba(200,169,110,0.07), transparent)' }}
      />

      {/* Top row: icon + number */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300
            group-hover:scale-[1.08] group-hover:rotate-[6deg]"
          style={{ background: '#F2EDE4' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            className="transition-colors duration-300"
            style={{ stroke: '#6B6B6B' }}
          >
            <path d={service.icon} className="group-hover:[stroke:#FFFFFF]" />
          </svg>
        </div>
        <span className="font-body text-[10px] font-medium tracking-[1.5px] transition-colors duration-300"
          style={{ color: '#C8A96E' }}
        >
          {num}
        </span>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] mb-5 transition-colors duration-300" style={{ background: '#E8E2D9' }} />

      {/* Title */}
      <h3 className="font-display font-semibold text-[17px] leading-[1.3] transition-colors duration-300"
        style={{ color: '#2D2D2D' }}
      >
        {service.title}
      </h3>

      {/* Desc */}
      <p className="font-body text-[13px] font-light leading-[1.75] mt-2" style={{ color: '#6B6B6B' }}>
        {service.desc}
      </p>

      {/* Bottom row */}
      <div className="flex items-center justify-between mt-6">
        <span className="font-body text-[12px] font-medium transition-all duration-300 group-hover:translate-x-1"
          style={{ color: '#C8A96E' }}
        >
          Learn More
        </span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-[3px]"
          style={{ background: '#F2EDE4' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="group-hover:[stroke:#FAF8F3] transition-colors duration-300"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section ref={ref} className="py-20" style={{ background: '#FAF8F3' }}>
      <div className="container mx-auto px-6 lg:px-[8%]">
        {/* Header */}
        <div className="mb-10">
          <span className="font-body text-[10px] font-semibold tracking-[2.5px] uppercase block mb-2" style={{ color: '#C8A96E' }}>
            PRACTICE AREAS
          </span>
          <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.12, letterSpacing: '-0.015em', color: '#2D2D2D' }}>
            What We Do Best
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-[50px] h-[1.5px] origin-left mt-4"
            style={{ background: '#C8A96E' }}
          />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <ServiceCard service={service} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
