import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Section } from "@/lib/api";


const HeroBanner = ({ data }: { data?: Section }) => {
  const slides = data?.textContent?.slides as any[] | undefined;
  const heroImages = slides?.length ? slides.map((s: any) => s.img) : (data?.imageUrl ? [data.imageUrl] : []);
  const tickerItems = data?.textContent?.tickerItems || [];
  const heading = data?.textContent?.heading || "";
  const subHeadingLine2 = data?.textContent?.subHeadingLine2 || "";
  const subheading = data?.textContent?.subheading || "";
  const cta = data?.textContent?.cta || "";
  const secondaryCta = data?.textContent?.secondaryCta || "";
  const label = data?.textContent?.label || "";
  const floatingCards = data?.textContent?.customCards || [];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 animate-grid-scale"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Amber radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(224,140,46,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Background images with Ken Burns */}
        {heroImages.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1000ms]"
            style={{
              backgroundImage: `url(${img})`,
              opacity: currentImage === i ? 0.12 : 0,
              mixBlendMode: "luminosity",
              animation: currentImage === i ? "kenburns 6s ease-in-out forwards" : "none",
            }}
          />
        ))}

        {/* Dark gradient overlay for text readability */}
        <div
          className="absolute inset-0 z-[5]"
          style={{
            background: "linear-gradient(135deg, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.55) 50%, rgba(224,140,46,0.08) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-8 lg:px-[2%] pb-[8%] pt-32">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between">
            {/* Left content */}
            <div className="max-w-[600px]">
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-mono text-[10px] text-amber2 tracking-[3px] mb-6"
              >
                [ {label} ]
              </motion.div>

              {/* Main heading */}
              <h1>
                <motion.span
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-heading font-bold text-linen leading-[1.1] tracking-[-0.02em] block whitespace-pre-wrap"
                  style={{ fontSize: "clamp(28px, 5vw, 60px)" }}
                >
                  {heading}
                </motion.span>
                {subHeadingLine2 && (
                  <motion.span
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ delay: 0.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="block font-heading font-light italic text-amber2 leading-[1.1] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
                  >
                    {subHeadingLine2}
                  </motion.span>
                )}
              </h1>

              {/* Amber rule */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                className="h-px bg-amber2 my-5"
              />

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="font-body font-light text-[15px] leading-[1.75] max-w-[440px] whitespace-pre-wrap"
                style={{ color: "rgba(245,240,232,0.65)" }}
              >
                {subheading}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="flex flex-wrap gap-3 mt-7"
              >
                  <Link
                    to="/services"
                    className="btn-shimmer inline-block bg-amber2 text-charcoal-deep font-heading font-semibold text-sm px-7 py-3 rounded hover:bg-amber2-hot hover:-translate-y-0.5 transition-all duration-250"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(224,140,46,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {cta}
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-block font-heading font-semibold text-sm px-7 py-3 rounded transition-all duration-250 text-linen hover:text-amber2 hover:border-amber2"
                    style={{
                      border: "1px solid rgba(245,240,232,0.35)",
                    }}
                  >
                    {secondaryCta}
                  </Link>
              </motion.div>
            </div>

            {/* Right floating stat cards */}
            <div className="hidden lg:flex flex-col gap-3 items-end mt-12 lg:mt-0">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.12, duration: 0.5 }}
                  className={`${
                    i === 0 ? "animate-float-1" : i === 1 ? "animate-float-2" : "animate-float-3"
                  }`}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(224,140,46,0.2)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "10px",
                    padding: "12px 18px",
                    minWidth: "160px",
                  }}
                >
                  <span className="font-mono text-[10px] text-amber2 tracking-[2px] block mb-1">
                    {card.label}
                  </span>
                  <span className="font-heading font-semibold text-[22px] text-linen">
                    {card.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: currentImage === i ? 24 : 8,
                background: currentImage === i ? "#E08C2E" : "rgba(224,140,46,0.35)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 right-8 flex flex-col items-center gap-2 z-10 hidden md:flex"
        >
          <span className="font-mono text-[10px] text-linen/30 tracking-[3px]">
            SCROLL
          </span>
          <div className="w-px bg-amber2 animate-scroll-line" />
        </motion.div>
      </section>

      {/* Ticker band */}
      <div
        className="relative h-12 flex items-center overflow-hidden"
        style={{
          background: "#1A1A1A",
          borderTop: "1px solid rgba(224,140,46,0.2)",
          borderBottom: "1px solid rgba(224,140,46,0.2)",
        }}
      >
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
            (item, i) => (
              <span key={i} className="font-mono text-[12px] text-linen/70 mx-4">
                {item}
                <span className="text-amber2 mx-4">◆</span>
              </span>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
