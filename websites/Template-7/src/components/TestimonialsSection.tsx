import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const DEFAULT_TESTIMONIALS = [
  { quote: "DigitechCA transformed our financial operations. Their strategic tax planning saved us over 30% in the first year alone. Truly exceptional service that exceeded every expectation.", name: "Rajesh Mehta", role: "CEO, Mehta Industries", initials: "RM" },
  { quote: "The team's attention to detail during our statutory audit was remarkable. They identified opportunities we'd missed for years.", name: "Priya Sharma", role: "Director, Sharma Exports", initials: "PS" },
  { quote: "From GST compliance to financial advisory, DigitechCA handles everything flawlessly. Trusted partners for over 8 years.", name: "Amit Patel", role: "Founder, TechVentures Pvt Ltd", initials: "AP" },
  { quote: "Their proactive approach to compliance and deadlines gives us complete peace of mind. We can focus on growth while they handle the numbers.", name: "Sunita Reddy", role: "CFO, Reddy Pharmaceuticals", initials: "SR" },
];

export default function TestimonialsSection({ data }: { data?: any }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, isVisible } = useIntersectionObserver(0.2);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const tc = data?.textContent || {};
  const label = tc.label || 'CLIENT VOICES';
  const heading = tc.heading || 'What Our Clients Say';

  const testimonials = (tc.items || DEFAULT_TESTIMONIALS).map((t: any) => ({
    quote: t.quote || t.review || '',
    name: t.name || '',
    role: t.role || t.designation || '',
    initials: t.initials || String(t.name || '?').split(' ').map((w: string) => w[0] || '').join('').slice(0, 2).toUpperCase(),
  }));

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(timerRef.current);
  }, [active, paused, testimonials.length]);

  // Featured + 2 small cards
  const smallIndices = [(active + 1) % testimonials.length, (active + 2) % testimonials.length];

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: '#FAF8F3',
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(200,169,110,0.04) 0px, rgba(200,169,110,0.04) 1px, transparent 1px, transparent 24px)',
        backgroundSize: '24px 24px',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-6 lg:px-[8%] relative z-10">
        {/* Header — centered */}
        <div className="text-center mb-12">
          <span className="font-body text-[10px] font-semibold tracking-[2.5px] uppercase block mb-2" style={{ color: '#C8A96E' }}>
            {label}
          </span>
          <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.12, letterSpacing: '-0.015em', color: '#2D2D2D' }}>
            {heading}
          </h2>
        </div>

        {/* Featured card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl p-8 lg:p-10 mb-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(45,45,45,0.1)]"
          style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}
        >
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-start">
            {/* Left: quote mark + author */}
            <div className="flex flex-col items-start">
              <span className="font-display font-black text-[80px] leading-none select-none" style={{ color: 'rgba(200,169,110,0.15)' }}>
                ❝
              </span>
              <div className="flex items-center gap-3 mt-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-[16px]"
                  style={{ background: '#2D2D2D', color: '#FAF8F3' }}
                >
                  {testimonials[active]?.initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-[16px]" style={{ color: '#2D2D2D' }}>{testimonials[active]?.name}</p>
                  <p className="font-body text-[13px]" style={{ color: '#6B6B6B' }}>{testimonials[active]?.role}</p>
                </div>
              </div>
              {/* Stars */}
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#C8A96E"
                    className="opacity-0" style={{ animation: `fade-up 0.3s ease forwards ${s * 0.06}s` }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Right: testimonial text */}
            <div className="flex flex-col justify-center">
              <p className="font-accent italic text-[18px] leading-[1.85]" style={{ color: '#3D3D3D' }}>
                "{testimonials[active]?.quote}"
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-[2px] rounded-full overflow-hidden" style={{ background: '#E8E2D9' }}>
            <div
              key={active}
              className="h-full rounded-full"
              style={{
                background: '#C8A96E',
                animation: paused ? 'none' : 'progress-bar 4.5s linear forwards',
              }}
            />
          </div>
        </motion.div>

        {/* Small cards row */}
        <div className="grid md:grid-cols-2 gap-4">
          {smallIndices.map((idx) => {
            const t = testimonials[idx];
            if (!t) return null;
            return (
              <div
                key={idx}
                onClick={() => setActive(idx)}
                className="rounded-xl p-7 cursor-pointer transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(45,45,45,0.07)]"
                style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}
                data-cursor="button"
              >
                {/* Stars top-right */}
                <div className="flex justify-end gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#C8A96E">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="font-accent italic text-[15px] leading-[1.75]" style={{ color: '#6B6B6B' }}>
                  "{t.quote}"
                </p>
                <div className="mt-4">
                  <p className="font-display font-medium text-[14px]" style={{ color: '#2D2D2D' }}>{t.name}</p>
                  <p className="font-body text-[12px] font-light" style={{ color: '#6B6B6B' }}>{t.role}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-2 mt-8">
          {[
            { label: '←', onClick: () => setActive((active - 1 + testimonials.length) % testimonials.length) },
            { label: '→', onClick: () => setActive((active + 1) % testimonials.length) },
          ].map((btn, i) => (
            <button
              key={i}
              onClick={btn.onClick}
              data-cursor="button"
              aria-label={i === 0 ? 'Previous' : 'Next'}
              className="w-9 h-9 flex items-center justify-center rounded-full font-body text-[14px] transition-all duration-200"
              style={{ border: '1px solid #E8E2D9', color: '#6B6B6B', background: 'transparent' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2D2D2D'; e.currentTarget.style.color = '#FAF8F3'; e.currentTarget.style.borderColor = '#2D2D2D'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6B6B6B'; e.currentTarget.style.borderColor = '#E8E2D9'; }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
