import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

const AnimatedCounter = ({ end, suffix = '', prefix = '', duration = 2000, label }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl lg:text-5xl font-bold text-gradient-gold">
        {prefix}{count}{suffix}
      </div>
      <p className="text-sm text-primary-foreground/70 mt-2 font-body">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
