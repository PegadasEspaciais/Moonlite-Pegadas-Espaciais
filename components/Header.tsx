'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-morphism' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-eternal-gold font-serif text-xl font-bold tracking-widest"
        >
          PEGADAS ESPACIAIS
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-celestial-white/80 hover:text-eternal-gold transition-colors text-sm uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-eternal-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass-morphism py-6 px-6 flex flex-col space-y-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-celestial-white/80 hover:text-eternal-gold transition-colors text-sm uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
