'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    servico: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de salvamento local (já que o banco de dados foi declinado)
    console.log('Lead capturado localmente:', formData);

    // Pequeno delay para feedback visual de "processamento"
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Configuração do WhatsApp dinâmico conforme o plano
    const phone = "34649380087"; // Número da Marilene (Espanha)
    const message = `Olá Marilene, acabei de ver seu site e tenho interesse no serviço de ${formData.servico}. Meu nome é ${formData.nome}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="pt-12 md:pt-24 pb-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-eternal-gold font-serif text-xl tracking-[0.3em] mb-4 opacity-80 uppercase">Sua Nova Era</h2>
          <h3 className="text-3xl md:text-5xl mb-4">O convite para a sua jornada exclusiva</h3>
          <p className="text-celestial-white/60 max-w-2xl mx-auto">
            Devido à natureza profunda e personalizada de cada análise e tratamento, as vagas mensais são restritas. Garanta seu espaço nesta agenda de elite.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-morphism p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.1)]"
        >
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-eternal-gold font-bold">Nome Completo</label>
              <input
                required
                type="text"
                placeholder="Como deseja ser chamado(a)?"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-eternal-gold outline-none transition-all text-celestial-white"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-eternal-gold font-bold">WhatsApp</label>
              <input
                required
                type="tel"
                placeholder="+55 (11) 99999-9999"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-eternal-gold outline-none transition-all text-celestial-white"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-xs uppercase tracking-widest text-eternal-gold font-bold">Serviço de Interesse</label>
              <select
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-eternal-gold outline-none transition-all text-celestial-white appearance-none"
                value={formData.servico}
                onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
              >
                <option value="" disabled className="bg-deep-space">Selecione o portal de entrada...</option>
                <optgroup label="O Templo Físico" className="bg-deep-space">
                  <option value="Podologia Clínica">Podologia Clínica</option>
                  <option value="Estética Avançada">Estética Avançada</option>
                  <option value="Design Capilar">Design Capilar</option>
                </optgroup>
                <optgroup label="O Mapa da Alma" className="bg-deep-space">
                  <option value="Mapa Astral">Mapa Astral</option>
                  <option value="Numerologia de Poder">Numerologia de Poder</option>
                  <option value="Tarot Terapêutico">Tarot Terapêutico</option>
                </optgroup>
              </select>
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full text-center bg-eternal-gold text-deep-space py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-eternal-gold/90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Processando...' : 'Reservar meu atendimento exclusivo'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
