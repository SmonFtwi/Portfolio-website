'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cloud = ({ delay, duration, size, top, left, opacity }: any) => {
  return (
    <motion.div
      initial={{ x: "-20%", opacity: 0 }}
      animate={{ 
        x: "120%", 
        opacity: [0, opacity, opacity, 0],
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        delay, 
        ease: "linear" 
      }}
      style={{
        position: "absolute",
        top: `${top}%`,
        left: "-10%",
        width: size,
        height: size / 2,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
        filter: "blur(40px)",
        zIndex: -1,
        pointerEvents: "none",
      }}
      className="dark:bg-slate-400/20"
    />
  );
};

export default function CloudBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20 h-full w-full opacity-40 dark:opacity-20">
      <Cloud delay={0} duration={40} size={400} top={10} left={-10} opacity={0.6} />
      <Cloud delay={5} duration={55} size={600} top={40} left={-20} opacity={0.4} />
      <Cloud delay={15} duration={45} size={500} top={70} left={-15} opacity={0.5} />
      <Cloud delay={2} duration={50} size={450} top={25} left={-12} opacity={0.3} />
      <Cloud delay={20} duration={60} size={700} top={60} left={-25} opacity={0.4} />
      
      {/* Decorative gradients for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/20 via-transparent to-transparent dark:from-slate-900/20" />
    </div>
  );
}
