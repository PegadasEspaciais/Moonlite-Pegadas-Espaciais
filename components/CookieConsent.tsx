'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-50"
        >
          <div className="glass-morphism p-6 rounded-xl border border-eternal-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <h4 className="text-eternal-gold font-serif text-sm uppercase tracking-widest mb-3">Privacidade & Cookies</h4>
            <p className="text-celestial-white/70 text-xs leading-relaxed mb-4">
              Utilizamos cookies para personalizar sua experiência e analisar nosso tráfego. Ao continuar navegando, você concorda com nossa{' '}
              <Link href="/politica-de-privacidade" className="text-eternal-gold underline underline-offset-2">Política de Privacidade</Link>.
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleAccept}
                className="bg-eternal-gold text-deep-space px-6 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-eternal-gold/90 transition-all"
              >
                Aceitar e Continuar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
