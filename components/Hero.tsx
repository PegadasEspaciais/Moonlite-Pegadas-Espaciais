'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Static Zodiac Background with Visual Fixes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:left-auto md:translate-x-0 md:-right-20 lg:right-0 w-[336px] h-[336px] md:w-[560px] md:h-[560px] pointer-events-none flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle, rgba(5, 5, 5, 0.6) 0%, rgba(5, 5, 5, 0) 70%)',
        }}
      >
        <Image
          src="https://drive.google.com/thumbnail?id=1pzru3gXNiz4Bv1jHVjeEw-ugSUmcw8p5&sz=w1000"
          alt="Zodiac Background"
          fill
          unoptimized
          className="object-contain mix-blend-screen opacity-30 md:opacity-50 brightness-110"
          style={{
            WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
            maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
          }}
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-block px-3 md:px-4 py-1 border border-eternal-gold/30 rounded-full text-eternal-gold text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] mb-6 whitespace-nowrap">
            ★ 20 Anos de Experiência Internacional ★
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-celestial-white leading-tight mb-6">
            Onde a precisão da <span className="text-eternal-gold text-glow-gold">estética avançada</span> encontra a clareza do <span className="text-eternal-gold text-glow-gold">destino</span>.
          </h1>
          <p className="text-celestial-white/70 text-base mb-10 max-w-xl leading-relaxed">
            Marilene Augustta DDos Santos: lapidando a harmonia entre o corpo e o cosmos. Uma experiência exclusiva de cuidado físico e orientação mística com assinatura internacional.
          </p>
          <a
            href="#contato"
            className="inline-block w-full md:w-auto text-center bg-eternal-gold text-deep-space px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-eternal-gold/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Iniciar minha transformação
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square max-w-[500px] mx-auto"
        >
          {/* Moon Mask for Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-eternal-gold/50 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
            <Image
              src="https://picsum.photos/seed/authority/800/800"
              alt="Marilene Augustta DDos Santos"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Ring */}
          <div className="absolute -inset-4 border border-eternal-gold/20 rounded-full animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
