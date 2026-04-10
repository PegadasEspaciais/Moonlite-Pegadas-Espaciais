export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-deep-space">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-eternal-gold font-serif text-xl font-bold tracking-widest">
            PEGADAS ESPACIAIS
          </div>

          <div className="flex space-x-8 text-celestial-white/40 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-eternal-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-eternal-gold transition-colors">Facebook</a>
            <a href="#" className="hover:text-eternal-gold transition-colors">WhatsApp</a>
          </div>

          <div className="text-celestial-white/40 text-[10px] uppercase tracking-widest text-center md:text-right">
            © 2026 Pegadas Espaciais. Todos os direitos reservados.<br />
            Design & Estratégia por Marilene Augústa Sâmtós.
          </div>
        </div>
      </div>
    </footer>
  );
}
