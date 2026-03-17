import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200',
];

const stats = [
  { value: '500+', label: 'Clients' },
  { value: '18+', label: 'Years' },
  { value: '98%', label: 'Retention' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left panel — cream */}
        <div
          className="relative flex flex-col justify-center order-2 lg:order-1 px-8 lg:px-[8%] py-20 lg:py-0"
          style={{ background: '#FAF8F3' }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4"
          >
            <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase" style={{ color: '#C8A96E' }}>
              CHARTERED ACCOUNTANTS
            </span>
          </motion.div>

          {/* Thin accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            className="w-10 h-[1.5px] origin-left mb-6"
            style={{ background: '#C8A96E' }}
          />

          {/* Heading */}
          <h1>
            {['Trusted Financial'].map((line, i) => (
              <motion.span
                key={i}
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={{ clipPath: 'inset(0 0 0% 0)' }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block font-display font-bold leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', color: '#2D2D2D' }}
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block font-display font-light italic leading-[1.08] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', color: '#C8A96E' }}
            >
              Expertise,
            </motion.span>
            <motion.span
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block font-display font-bold leading-[1.08] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', color: '#2D2D2D' }}
            >
              Delivered.
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="font-body font-light text-[15px] max-w-[400px] leading-[1.75] mt-5"
            style={{ color: '#6B6B6B' }}
          >
            DigitechCA & Associates — trusted by 500+ businesses across India for taxation, compliance, audit, and financial strategy.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex items-center gap-0 mt-8 pt-6"
            style={{ borderTop: '1px solid #E8E2D9' }}
          >
            {stats.map((s, i) => (
              <div key={i} className="flex items-center">
                <div className="pr-6">
                  <span className="block font-display font-bold text-[28px]" style={{ color: '#2D2D2D' }}>{s.value}</span>
                  <span className="block font-body text-[12px]" style={{ color: '#6B6B6B' }}>{s.label}</span>
                </div>
                {i < stats.length - 1 && <div className="w-[1px] h-10 mr-6" style={{ background: '#E8E2D9' }} />}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.5 }}
            className="flex flex-wrap gap-2.5 mt-8"
          >
            <a
              href="#"
              data-cursor="button"
              className="btn-shimmer font-body text-[13px] font-semibold px-[26px] py-[12px] rounded-md transition-all duration-[250ms]
                hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(45,45,45,0.2)] active:scale-[0.97]"
              style={{ background: '#2D2D2D', color: '#FAF8F3' }}
            >
              Our Services
            </a>
            <a
              href="#"
              data-cursor="button"
              className="font-body text-[13px] font-semibold px-[26px] py-[12px] rounded-md transition-all duration-[250ms] active:scale-[0.97]"
              style={{ border: '1.5px solid #C8A96E', color: '#2D2D2D', background: 'transparent' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#C8A96E'; e.currentTarget.style.color = '#FAF8F3'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2D2D2D'; }}
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Right panel — image slider */}
        <div className="mt-28 relative h-[32vh] lg:h-[80vh] order-1 lg:order-2 overflow-hidden flex items-center justify-center" style={{ background: '#2D2D2D' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="w-[90%] h-[90%] rounded-2xl shadow-xl overflow-hidden relative flex items-center justify-center"
              style={{ boxShadow: '0 8px 32px rgba(45,45,45,0.18)' }}
            >
              <motion.img
                src={images[current]}
                alt="Professional financial services"
                className="w-full h-full object-cover"
                style={{ animation: 'kenburns 6s ease-in-out forwards' }}
                data-cursor="image"
              />
              {/* Optional overlay caption */}
              <div className="absolute bottom-4 left-4 bg-[rgba(45,45,45,0.7)] text-[#FAF8F3] px-4 py-2 rounded-lg text-[15px] font-body font-light shadow-md backdrop-blur-sm">
                Empowering Your Growth
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(45,45,45,0.6) 100%)' }} />

          {/* Slide counter + dots */}
          <div className="absolute bottom-6 left-6 flex items-center gap-4">
            <span className="font-body text-[14px] font-semibold tracking-wider" style={{ color: '#FAF8F3', letterSpacing: '2px' }}>
              0{current + 1} / 03
            </span>
            <div className="flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className="h-[8px] rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 28 : 10,
                    background: i === current ? '#C8A96E' : 'rgba(250,248,243,0.4)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Decorative corner bracket */}
          <svg className="absolute top-6 right-6 opacity-40" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M32 0H20V1.5H30.5V12H32V0Z" fill="#C8A96E" />
          </svg>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full" style={{ background: 'rgba(250,248,243,0.1)' }}>
            <div key={current} className="h-full rounded-full" style={{ background: '#C8A96E', animation: 'progress-bar 5s linear forwards' }} />
          </div>
        </div>
      </section>

      {/* Ticker band */}
      <div className="relative py-3 overflow-hidden" style={{ background: '#2D2D2D' }}>
        <div className="absolute inset-y-0 left-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #2D2D2D, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #2D2D2D, transparent)' }} />
        <div className="ticker-track flex whitespace-nowrap">
          {[...Array(4)].map((_, j) => (
            <span key={j} className="font-body text-[11px] font-medium tracking-[2px] uppercase" style={{ color: '#C8A96E' }}>
              TAX PLANNING &nbsp;<span style={{ color: 'rgba(232,226,217,0.5)' }}>·</span>&nbsp; GST COMPLIANCE &nbsp;<span style={{ color: 'rgba(232,226,217,0.5)' }}>·</span>&nbsp; AUDIT & ASSURANCE &nbsp;<span style={{ color: 'rgba(232,226,217,0.5)' }}>·</span>&nbsp; COMPANY REGISTRATION &nbsp;<span style={{ color: 'rgba(232,226,217,0.5)' }}>·</span>&nbsp; WEALTH ADVISORY &nbsp;<span style={{ color: 'rgba(232,226,217,0.5)' }}>·</span>&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
