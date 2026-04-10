'use client';

import { motion } from 'motion/react';
import { Footprints, Sparkles, UserRound, Stars, Hash, LayoutGrid } from 'lucide-react';

const physicalServices = [
  {
    title: 'Podologia Clínica',
    subtitle: 'Arquitetura do Caminhar',
    description: 'Tratamentos clínicos especializados com rigor técnico europeu para garantir que cada passo seu seja firme e pleno.',
    icon: Footprints,
  },
  {
    title: 'Estética Avançada',
    subtitle: 'Escultura e Rejuvenescimento',
    description: 'Protocolos de alta performance que respeitam a sua identidade, revelando uma beleza atemporal e revigorada.',
    icon: Sparkles,
  },
  {
    title: 'Design Capilar',
    subtitle: 'Visagismo de Autoridade',
    description: 'A harmonização estética que traduz sua personalidade em cada detalhe, unindo técnica e arte.',
    icon: UserRound,
  },
];

const soulServices = [
  {
    title: 'Mapa Astral',
    subtitle: 'Navegação Estelar',
    description: 'Uma análise profunda do seu código de nascimento para alinhar suas escolhas terrenas ao fluxo do universo.',
    icon: Stars,
  },
  {
    title: 'Numerologia de Poder',
    subtitle: 'A Vibração do Sucesso',
    description: 'Ajuste a frequência do seu nome, marca ou datas estratégicas para atrair a ressonância da prosperidade e do legado.',
    icon: Hash,
  },
  {
    title: 'Tarot Terapêutico',
    subtitle: 'Clareza Decisória',
    description: 'Orientação arquetípica para iluminar caminhos e sustentar decisões importantes com segurança e sabedoria.',
    icon: LayoutGrid,
  },
];

function ServiceCard({ service }: { service: any }) {
  const Icon = service.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-morphism p-8 rounded-xl group transition-all"
    >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 border border-eternal-gold/30 group-hover:border-eternal-gold transition-colors shadow-[0_0_15px_rgba(212,175,55,0.1)]`}>
        <Icon className="text-eternal-gold" size={28} />
      </div>
      <h3 className="text-xl font-serif text-celestial-white mb-1">{service.title}</h3>
      <p className="text-xs uppercase tracking-widest mb-4 font-semibold text-eternal-gold">{service.subtitle}</p>
      <p className="text-celestial-white/60 text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      <a
        href="#contato"
        className="text-eternal-gold text-xs uppercase tracking-widest font-bold border-b border-eternal-gold/30 pb-1 hover:border-eternal-gold transition-all"
      >
        Saber Mais
      </a>
    </motion.div>
  );
}

export default function ServiceSection() {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Physical Temple */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">O Templo Físico</h2>
            <p className="text-eternal-gold/70 uppercase tracking-[0.2em] text-sm">A ciência como ferramenta de bem-estar absoluto</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {physicalServices.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>

        {/* Soul Map */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">O Mapa da Alma</h2>
            <p className="text-eternal-gold/70 uppercase tracking-[0.2em] text-sm">Decifrando as frequências que regem sua jornada</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {soulServices.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
