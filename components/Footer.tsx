import { Instagram, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-deep-space">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-eternal-gold font-serif text-xl font-bold tracking-widest">
            <Link href="/">
              PEGADAS ESPACIAIS
            </Link>
          </div>

          <div className="flex space-x-6 text-celestial-white/40">
            <a href="#" className="hover:text-eternal-gold transition-all hover:scale-110" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-eternal-gold transition-all hover:scale-110" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-eternal-gold transition-all hover:scale-110" aria-label="Youtube">
              <Youtube size={20} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex space-x-4 text-[10px] uppercase tracking-widest text-celestial-white/40 mb-2">
              <Link href="/politica-de-privacidade" className="hover:text-eternal-gold transition-colors">Privacidade</Link>
              <Link href="/termos-de-uso" className="hover:text-eternal-gold transition-colors">Termos</Link>
            </div>
            <div className="text-celestial-white/40 text-[10px] uppercase tracking-widest text-center md:text-right">
              © 2026 Pegadas Espaciais. Todos os direitos reservados.<br />
              Design & Estratégia por Marilene Augustta DDos Santos.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
