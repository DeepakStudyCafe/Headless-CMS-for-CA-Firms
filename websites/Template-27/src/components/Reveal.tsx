import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export function Reveal({ children, delay = 0, y = 30, className, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            gsap.fromTo(
              el,
              { opacity: 0, y },
              { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay }
            );
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    gsap.set(el, { opacity: 0, y });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, y]);

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={className}>{children}</Tag>;
}
