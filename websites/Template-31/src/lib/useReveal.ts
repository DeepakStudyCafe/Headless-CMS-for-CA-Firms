import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealOpts = {
  selector: string;
  y?: number;
  x?: number;
  scale?: number;
  stagger?: number;
  duration?: number;
  delay?: number;
};

/**
 * Safe reveal animation. Elements stay visible by default; we only animate IN.
 * Uses fromTo so even if ScrollTrigger never fires, content remains visible.
 */
export function useReveal(ref: RefObject<HTMLElement | null>, items: RevealOpts[]) {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      items.forEach((it) => {
        const els = gsap.utils.toArray<HTMLElement>(it.selector);
        if (!els.length) return;
        gsap.fromTo(
          els,
          {
            opacity: 0,
            y: it.y ?? 30,
            x: it.x ?? 0,
            scale: it.scale ?? 1,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: it.duration ?? 0.8,
            delay: it.delay ?? 0,
            stagger: it.stagger ?? 0,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: ref.current!,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
