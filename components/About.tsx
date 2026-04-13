'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-cosmic-gradient relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-eternal-gold/30 group transition-all duration-700 hover:border-eternal-gold/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <img
                src="/content/profile-marilene.jpg?v=6.0"
                alt="Marilene Augustta DDos Santos"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.03] hover:brightness-110"
                crossOrigin="anonymous"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-eternal-gold/50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-eternal-gold/50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Ethereal Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.35 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:left-auto md:right-[-20%] md:translate-x-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] pointer-events-none flex items-center justify-center z-0"
            >
              <img
                src="/content/ethereal-spirit.png?v=6.0"
                alt="Ethereal Background"
                className="w-full h-full object-contain mix-blend-screen opacity-40 brightness-110"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                  maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                }}
                crossOrigin="anonymous"
              />
            </motion.div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
                Duas décadas atravessando oceanos para revelar a sua <span className="text-eternal-gold">essência</span>.
              </h2>
              <div className="space-y-6 text-celestial-white/70 leading-relaxed text-lg">
                <p className="italic font-serif text-celestial-white">
                  &quot;Acredito que a beleza é a manifestação visível de uma alma em equilíbrio. Em meus 20 anos de atuação entre o Brasil e a Europa, refinei o olhar para enxergar além da superfície.&quot;
                </p>
                <p>
                  Minha missão é unir o rigor clínico da podologia e estética à profundidade das artes herméticas, oferecendo a você um portal de autocuidado sem fronteiras.
                </p>
                <p>
                  Cada tratamento é uma escultura, cada análise é um alinhamento. Aqui, a precisão técnica europeia se funde com a sabedoria ancestral para criar um legado de bem-estar que transcende o tempo.
                </p>
              </div>
              <div className="mt-12 flex items-center space-x-6">
                <div className="h-[1px] flex-1 bg-eternal-gold/30" />
                <span className="font-serif text-eternal-gold uppercase tracking-widest text-sm">Marilene Augustta DDos Santos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
