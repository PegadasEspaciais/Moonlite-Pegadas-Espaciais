'use client';

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-3 md:px-4 py-1 border border-eternal-gold/30 rounded-full text-eternal-gold text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] mb-6 whitespace-nowrap">
            ★ 20 Anos de Experiência Internacional ★
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-celestial-white leading-tight mb-6">
            Onde a precisão da <span className="text-eternal-gold text-glow-gold">estética avançada</span> encontra a clareza do <span className="text-eternal-gold text-glow-gold">destino</span>.
          </h1>
          <p className="text-celestial-white/70 text-base md:text-lg mb-10 leading-relaxed">
            Marilene Augustta DDos Santos: lapidando a harmonia entre o corpo e o cosmos. Uma experiência exclusiva de cuidado físico e orientação mística com assinatura internacional.
          </p>
          <a
            href="#contato"
            className="inline-block w-full md:w-auto text-center bg-eternal-gold text-deep-space px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-eternal-gold/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Iniciar minha transformação
          </a>
        </motion.div>
      </div>
    </section>
  );
}
