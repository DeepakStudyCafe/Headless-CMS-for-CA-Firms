import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reveals all children with [data-reveal] inside the returned ref.
 * Animations always END with opacity:1, so even if anything fails, content remains visible.
 */
export function useGsapReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      const els = ref.current!.querySelectorAll<HTMLElement>("[data-reveal]");
      els.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return ref;
}
