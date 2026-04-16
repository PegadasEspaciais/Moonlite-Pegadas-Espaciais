'use client';

import { motion } from 'motion/react';

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
            {/* Imagem Nossa Senhora com moldura celestial */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-eternal-gold/30 bg-deep-space group transition-all duration-700 hover:border-eternal-gold/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              
              {/* Estrelas sutis no fundo */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-[15%] w-[2px] h-[2px] bg-eternal-gold/40 rounded-full animate-twinkle" />
                <div className="absolute top-[25%] right-[20%] w-[1.5px] h-[1.5px] bg-eternal-gold/30 rounded-full" />
                <div className="absolute bottom-[30%] left-[10%] w-[2px] h-[2px] bg-eternal-gold/50 rounded-full animate-twinkle" />
                <div className="absolute top-[60%] right-[30%] w-[1px] h-[1px] bg-eternal-gold/40 rounded-full" />
                <div className="absolute bottom-[15%] right-[15%] w-[2.5px] h-[2.5px] bg-eternal-gold/35 rounded-full animate-twinkle" />
                <div className="absolute top-[40%] left-[30%] w-[1.5px] h-[1.5px] bg-eternal-gold/30 rounded-full" />
                <div className="absolute bottom-[50%] right-[45%] w-[1px] h-[1px] bg-eternal-gold/45 rounded-full" />
              </div>

              {/* Efeito de Brilho de Fundo (sobre a imagem) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15)_0%,transparent_70%)] z-10 pointer-events-none" />
              
              {/* A imagem via Link Externo - Aguardando Nova URL */}
              <img
                src=""
                alt="Imagem Marilene Augustta"
                referrerPolicy="no-referrer"
                className="relative z-[5] w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback para quando não houver URL ou link quebrado
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              
              {/* Fallback (caso a imagem falhe) */}
              <div className="absolute inset-0 hidden flex-col items-center justify-center bg-deep-space/90 z-20">
                <div className="w-24 h-24 border border-eternal-gold/20 rounded-full flex items-center justify-center mb-4 relative">
                  <div className="absolute inset-0 border border-dashed border-eternal-gold/40 rounded-full animate-spin-slow" />
                  <span className="text-eternal-gold text-5xl font-serif">M</span>
                </div>
                <div className="text-eternal-gold/40 text-[10px] uppercase tracking-[0.3em]">Essência & Destino</div>
              </div>
            </div>

            {/* Cantoneiras Decorativas Douradas */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-eternal-gold/50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-eternal-gold/50" />

            <style>{`
              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes twinkle {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
              }
              .animate-spin-slow {
                animation: spin-slow 20s linear infinite;
              }
              .animate-twinkle {
                animation: twinkle 3s ease-in-out infinite;
              }
            `}</style>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Ethereal Image removida */}

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
