import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    const ctx = gsap.context(() => {
      targets.forEach((t) => {
        gsap.from(t, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: t, start: "top 85%" },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);
  return ref;
}
