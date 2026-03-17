import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
import { motion } from 'framer-motion';
import { useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'CLIENTS SERVED', desc: 'Businesses trust our expertise' },
  { value: 18, suffix: '+', label: 'YEARS ACTIVE', desc: 'Of consistent excellence' },
  { value: 12, suffix: '', label: 'OUR EXPERTS', desc: 'Qualified professionals' },
  { value: 98, suffix: '%', label: 'SATISFACTION', desc: 'Client retention rate' },
];

function StatBlock({ stat, isVisible, index }: { stat: typeof stats[0]; isVisible: boolean; index: number }) {
  const count = useCountUp(stat.value, 2000, isVisible);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="py-8 px-6 transition-all duration-300 cursor-default"
      style={{
        background: hovered ? '#FAF8F3' : 'transparent',
        borderLeft: hovered ? '2px solid #C8A96E' : '2px solid transparent',
        borderRight: index < 3 ? '1px solid #E8E2D9' : 'none',
      }}
    >
      <span
        className="block font-body text-[10px] font-semibold tracking-[2.5px] uppercase mb-3 transition-colors duration-300"
        style={{ color: hovered ? '#2D2D2D' : '#C8A96E' }}
      >
        {stat.label}
      </span>
      <span
        className="block font-display font-bold italic leading-none transition-colors duration-300"
        style={{
          fontSize: 'clamp(38px, 4.5vw, 60px)',
          color: hovered ? '#C8A96E' : '#2D2D2D',
        }}
      >
        {count}
        {stat.suffix && (
          <span className="font-display font-normal text-[28px]" style={{ color: '#C8A96E' }}>{stat.suffix}</span>
        )}
      </span>
      <span
        className="block font-body text-[13px] font-light mt-2 transition-colors duration-300"
        style={{ color: '#6B6B6B' }}
      >
        {stat.desc}
      </span>
    </motion.div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver(0.3);

  return (
    <section ref={ref} className="py-20" style={{ background: '#FFFFFF' }}>
      <div className="container mx-auto px-6 lg:px-[8%]">
        {/* Header — 2 col */}
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-10">
          <div>
            <span className="font-body text-[10px] font-semibold tracking-[2.5px] uppercase block mb-2" style={{ color: '#C8A96E' }}>
              OUR IMPACT
            </span>
            <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.12, letterSpacing: '-0.015em', color: '#2D2D2D' }}>
              Numbers That Define Our Legacy
            </h2>
          </div>
          <p className="font-body text-[15px] font-light leading-[1.75] lg:text-right" style={{ color: '#6B6B6B' }}>
            Our track record speaks volumes. These milestones reflect the trust our clients place in us every single year.
          </p>
        </div>

        {/* Top rule */}
        <div className="w-full h-[1px] mb-0" style={{ background: '#E8E2D9' }} />

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatBlock key={i} stat={stat} isVisible={isVisible} index={i} />
          ))}
        </div>

        {/* Bottom rule */}
        <div className="w-full h-[1px] mt-0" style={{ background: '#E8E2D9' }} />
      </div>
    </section>
  );
}
