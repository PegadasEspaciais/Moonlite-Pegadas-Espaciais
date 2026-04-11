import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarsBackground from '@/components/StarsBackground';

export default function TermsOfUse() {
  return (
    <main className="relative min-h-screen">
      <StarsBackground />
      <Header />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-serif text-eternal-gold mb-12 text-center">Termos de Uso</h1>
        
        <div className="glass-morphism p-8 md:p-12 rounded-2xl space-y-8 text-celestial-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar o portal Pegadas Espaciais, você concorda em cumprir estes termos de uso, todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">2. Uso de Licença</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Pegadas Espaciais, apenas para visualização transitória pessoal e não comercial.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">3. Isenção de Responsabilidade</h2>
            <p>
              Os materiais no site da Pegadas Espaciais são fornecidos &apos;como estão&apos;. Não oferecemos garantias, expressas ou implícitas, e, por este meio, isentamos e negamos todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização ou adequação a um fim específico.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">4. Limitações</h2>
            <p>
              Em nenhum caso a Pegadas Espaciais ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em nosso portal.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">5. Precisão dos Materiais</h2>
            <p>
              Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. Não garantimos que qualquer material em nosso site seja preciso, completo ou atual.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-celestial-white font-serif mb-4">6. Links</h2>
            <p>
              A Pegadas Espaciais não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por nossa parte.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
