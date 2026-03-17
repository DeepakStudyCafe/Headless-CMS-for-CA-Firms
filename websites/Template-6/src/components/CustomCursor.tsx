import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button']")) {
        setHovering(true);
      }
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button']")) {
        setHovering(false);
      }
    };

    let raf: number;
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${pos.current.x - 14}px, ${pos.current.y - 14}px)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${target.current.x - 2.5}px, ${target.current.y - 2.5}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Don't render on touch
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        ref={outerRef}
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-200"
        style={{
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          border: "1.5px solid #E08C2E",
          background: hovering ? "rgba(224,140,46,0.1)" : "transparent",
          marginLeft: hovering ? -14 : 0,
          marginTop: hovering ? -14 : 0,
        }}
      />
      <div
        ref={innerRef}
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-200"
        style={{
          width: 5,
          height: 5,
          background: "#E08C2E",
          opacity: hovering ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
