'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quais serviços de estética e saúde a Marilene oferece?',
    answer: 'Marilene oferece uma gama completa de serviços que unem o rigor clínico à estética avançada, incluindo Podologia Clínica, Estética Facial e Corporal, e Design Capilar com foco em visagismo.',
  },
  {
    question: 'Como funciona a consulta de Mapa Astral e Numerologia?',
    answer: 'As consultas são profundas e personalizadas. No Mapa Astral, analisamos o céu no momento do seu nascimento para alinhar escolhas. Na Numerologia, ajustamos as frequências de nomes e datas para atrair prosperidade.',
  },
  {
    question: 'Os atendimentos são presenciais ou online?',
    answer: 'Os serviços de estética e podologia são realizados presencialmente em nosso espaço exclusivo. Já as consultorias de Mapa Astral, Numerologia e Tarot podem ser realizadas tanto presencialmente quanto via videoconferência.',
  },
  {
    question: 'Como faço para agendar um atendimento?',
    answer: 'O agendamento é feito através do nosso formulário de contato nesta página. Após o preenchimento, você será direcionado para o WhatsApp para confirmar a data e horário.',
  },
  {
    question: 'Por que as vagas mensais são limitadas?',
    answer: 'Para garantir a profundidade e a exclusividade de cada atendimento, Marilene limita o número de clientes mensais, dedicando tempo integral à análise e execução de cada protocolo.',
  },
  {
    question: 'Qual é a experiência profissional da Marilene Augústa Sâmtós?',
    answer: 'Marilene possui mais de 20 anos de experiência internacional, tendo atuado em grandes centros de estética e saúde na Europa e no Brasil, refinando técnicas que unem ciência e artes herméticas.',
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: any; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left hover:text-eternal-gold transition-colors"
      >
        <span className="text-lg font-medium">{faq.question}</span>
        <ChevronDown
          className={`text-eternal-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-celestial-white/60 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Perguntas Frequentes</h2>
          <div className="h-1 w-20 bg-eternal-gold mx-auto" />
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
