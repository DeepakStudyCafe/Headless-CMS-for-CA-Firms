import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export default function MagneticCard({ children, className = "", index = 0 }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = ((e.clientX - centerX) / rect.width) * 16;
    const y = ((e.clientY - centerY) / rect.height) * 16;
    setTransform({
      x: x * 0.5,
      y: y * 0.5,
      rotateY: x * 0.5,
      rotateX: -y * 0.5,
    });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transform: `translateX(${transform.x}px) translateY(${transform.y}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      className={`relative overflow-hidden card-shimmer-sweep ${className}`}
    >
      {children}
    </motion.div>
  );
}
