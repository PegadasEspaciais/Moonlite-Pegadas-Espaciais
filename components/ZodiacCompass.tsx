'use client';

import { motion } from 'framer-motion';

interface ZodiacCompassProps {
  className?: string;
  variant?: 'default' | 'background';
}

export default function ZodiacCompass({
  className = '',
  variant = 'default',
}: ZodiacCompassProps) {
  const isBackground = variant === 'background';

  return (
    <div
      className={`
        relative flex items-center justify-center
        ${isBackground ? 'opacity-20 scale-90' : 'opacity-80'}
        ${className}
      `}
    >
      <motion.svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto max-w-[280px] md:max-w-[420px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F9E498" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>

          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(212,175,55,0.25)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0)" />
          </radialGradient>
        </defs>

        {/* Glow de fundo */}
        <circle cx="200" cy="200" r="190" fill="url(#glowGradient)" />

        {/* Rotação principal */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '200px 200px' }}
        >
          <circle
            cx="200"
            cy="200"
            r="185"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="0.6"
            strokeDasharray="3 6"
            opacity="0.4"
          />

          {/* Pontos orbitais */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const r = 182;
            const x = 200 + r * Math.cos(angle);
            const y = 200 + r * Math.sin(angle);

            return (
              <circle key={i} cx={x} cy={y} r="1.5" fill="#F9E498" />
            );
          })}
        </motion.g>

        {/* Centro */}
        <text
          x="200"
          y="210"
          textAnchor="middle"
          fill="#D4AF37"
          className="text-[10px] md:text-sm tracking-widest opacity-60"
        >
          ZODIAC
        </text>
      </motion.svg>
    </div>
  );
}