'use client';

import { motion } from 'framer-motion';
import ZodiacCompass from './ZodiacCompass';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">

      {/* SVG BACKGROUND (MOBILE) */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden pointer-events-none">
        <ZodiacCompass variant="background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between">
        
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-2xl mx-auto md:mx-0 flex-1"
        >
          <div className="inline-block px-3 md:px-4 py-1 border border-eternal-gold/30 rounded-full text-eternal-gold text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] mb-6 whitespace-nowrap">
            ★ 20 Anos de Experiência Internacional ★
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-celestial-white leading-tight mb-6">
            Onde a precisão da <span className="text-eternal-gold text-glow-gold">estética avançada</span> encontra a clareza do <span className="text-eternal-gold text-glow-gold">destino</span>.
          </h1>

          <p className="text-celestial-white/70 text-base mb-10 leading-relaxed">
            Marilene Augustta DDos Santos: lapidando a harmonia entre o corpo e o cosmos. Uma experiência exclusiva de cuidado físico e orientação mística com assinatura internacional.
          </p>

          <a
            href="#contato"
            className="inline-block w-full md:w-auto text-center bg-eternal-gold text-deep-space px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-eternal-gold/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Iniciar minha transformação
          </a>
        </motion.div>

        {/* SVG (DESKTOP) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 hidden md:flex items-center justify-center flex-1"
        >
          <div className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
            <ZodiacCompass />
          </div>
        </motion.div>

      </div>
    </section>
  );
}