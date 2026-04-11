import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarsBackground from '@/components/StarsBackground';

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen">
      <StarsBackground />
      <Header />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-serif text-eternal-gold mb-12 text-center">Política de Privacidade</h1>
        
        <div className="glass-morphism p-8 md:p-12 rounded-2xl space-y-8 text-celestial-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">1. Introdução</h2>
            <p>
              A Pegadas Espaciais, sob responsabilidade de Marilene Augustta DDos Santos, valoriza a sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">2. Coleta de Dados</h2>
            <p>
              Coletamos apenas as informações que você nos fornece voluntariamente através de nosso formulário de contato, como nome, número de WhatsApp e interesse em serviços específicos.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">3. Uso das Informações</h2>
            <p>
              Seus dados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Realizar o agendamento de consultas e serviços.</li>
              <li>Enviar informações relevantes sobre o atendimento solicitado.</li>
              <li>Personalizar sua experiência em nosso portal.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">4. Compartilhamento de Dados</h2>
            <p>
              Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros. Seus dados são tratados com sigilo absoluto dentro de nossa estrutura de atendimento.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">5. Seus Direitos</h2>
            <p>
              Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento. Para isso, entre em contato conosco através de nossos canais oficiais.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">6. Alterações</h2>
            <p>
              Reservamo-nos o direito de atualizar esta política periodicamente. Recomendamos a revisão regular desta página para estar ciente de quaisquer mudanças.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
