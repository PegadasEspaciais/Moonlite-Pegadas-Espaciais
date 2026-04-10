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
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-eternal-gold/30">
              <Image
                src="https://picsum.photos/seed/about/600/800" // Placeholder for Marilene's authority photo
                alt="Marilene Augústa Sâmtós"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
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
          >
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
              <span className="font-serif text-eternal-gold uppercase tracking-widest text-sm">Marilene Augústa Sâmtós</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
