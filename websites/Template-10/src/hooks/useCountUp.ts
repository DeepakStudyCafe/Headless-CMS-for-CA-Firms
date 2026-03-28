import { useRef, useEffect, useState } from 'react';

interface Options {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  formatThousands?: boolean;
}

export function useCountUp({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  formatThousands = false,
}: Options) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);

  const formatValue = (value: number) => {
    const safe = Number.isFinite(value) ? value : 0;
    if (formatThousands) {
      return safe.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    }
    if (decimals > 0) {
      return safe.toFixed(decimals);
    }
    return Math.floor(safe).toString();
  };

  useEffect(() => {
    hasStarted.current = false;
    setCount(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(eased * end);

            if (progress < 1) requestAnimationFrame(tick);
            if (progress === 1) setCount(end);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, display: `${prefix}${formatValue(count)}${suffix}` };
}
