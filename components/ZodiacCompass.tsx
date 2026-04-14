'use client';

import { motion } from 'motion/react';

export default function ZodiacCompass() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      <motion.svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
        overflow="visible"
        className="w-full h-full drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F9E498" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(212, 175, 55, 0.3)" />
            <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="190" fill="url(#glowGradient)" />
        
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '200px 200px' }}
        >
          <circle cx="200" cy="200" r="185" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.3" />
          {/* Simple placeholder stars */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const r = 182;
            const x = 200 + r * Math.cos(angle);
            const y = 200 + r * Math.sin(angle);
            return (
              <circle key={i} cx={x} cy={y} r="1" fill="#F9E498" />
            );
          })}
        </motion.g>
        
        {/* Placeholder for the inner zodiac signs */}
        <text x="200" y="210" textAnchor="middle" fill="#D4AF37" className="font-serif text-2xl opacity-50">ZODIAC</text>
      </motion.svg>
    </div>
  );
}
