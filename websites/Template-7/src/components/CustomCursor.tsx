import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'button' | 'image'>('default');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > 1024 && window.matchMedia('(pointer:fine)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (innerRef.current) {
        innerRef.current.style.left = `${e.clientX - 2}px`;
        innerRef.current.style.top = `${e.clientY - 2}px`;
      }
    };

    let raf: number;
    const lerp = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      if (outerRef.current) {
        const size = cursorType === 'image' ? 52 : cursorType === 'button' ? 48 : 26;
        outerRef.current.style.left = `${pos.current.x - size / 2}px`;
        outerRef.current.style.top = `${pos.current.y - size / 2}px`;
        outerRef.current.style.width = `${size}px`;
        outerRef.current.style.height = `${size}px`;
      }
      raf = requestAnimationFrame(lerp);
    };

    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(lerp);

    const attachListeners = () => {
      document.querySelectorAll('[data-cursor="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => setCursorType('button'));
        el.addEventListener('mouseleave', () => setCursorType('default'));
      });
      document.querySelectorAll('[data-cursor="image"]').forEach(el => {
        el.addEventListener('mouseenter', () => setCursorType('image'));
        el.addEventListener('mouseleave', () => setCursorType('default'));
      });
    };
    attachListeners();
    const mo = new MutationObserver(attachListeners);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, [isDesktop, cursorType]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        ref={outerRef}
        className="fixed pointer-events-none z-[9999] rounded-full transition-all duration-150 flex items-center justify-center"
        style={{
          border: '1.5px solid #C8A96E',
          background: cursorType === 'button' ? 'rgba(200,169,110,0.08)' : 'transparent',
        }}
      >
        {cursorType === 'image' && (
          <span className="font-body text-[9px] font-semibold tracking-wider" style={{ color: '#C8A96E' }}>VIEW</span>
        )}
      </div>
      <div
        ref={innerRef}
        className="fixed pointer-events-none z-[9999] w-[4px] h-[4px] rounded-full transition-opacity duration-150"
        style={{
          background: '#C8A96E',
          opacity: cursorType === 'button' ? 0 : 1,
        }}
      />
    </>
  );
}
