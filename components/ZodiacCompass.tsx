'use client';

import { motion } from 'motion/react';
import { ZodiacInner } from './ZodiacInner';

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

        {/* 1. Brilho de Fundo (Glow) */}
        <circle cx="200" cy="200" r="190" fill="url(#glowGradient)" />

        {/* 2. O Arco Maior Pontilhado e 3. As Estrelas Cintilantes (Orbitando) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          {/* Arco Maior Pontilhado */}
          <circle 
            cx="200" 
            cy="200" 
            r="185" 
            fill="none" 
            stroke="url(#goldGradient)" 
            strokeWidth="0.5" 
            strokeDasharray="2 6" 
            opacity="0.3" 
          />
          
          {/* Estrelas Cintilantes (Poeira Estelar) */}
          {[...Array(40)].map((_, i) => {
            const angle = (i * 9) * (Math.PI / 180);
            const r = 182 + (i % 4) * 2;
            const x = Number((200 + r * Math.cos(angle)).toFixed(2));
            const y = Number((200 + r * Math.sin(angle)).toFixed(2));
            const starSize = Number((0.4 + (i % 3) * 0.4).toFixed(2));
            const duration = 2 + (i % 5);
            
            return (
              <motion.circle
                key={`star-${i}`}
                cx={x}
                cy={y}
                r={starSize}
                fill="#F9E498"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: duration, repeat: Infinity }}
              />
            );
          })}
        </motion.g>

        {/* 4. A Bússola (ZodiacInner) */}
        <ZodiacInner 
          x="15" 
          y="15" 
          width="370" 
          height="370" 
          className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" 
        />
      </motion.svg>
    </div>
  );
}
