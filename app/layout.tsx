import type {Metadata} from 'next';
import { Cinzel, Montserrat } from 'next/font/google';
import './globals.css';
import WhatsAppFloating from '@/components/WhatsAppFloating';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '700', '900'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Pegadas Espaciais | Estética & Destino',
  description: 'Onde a precisão da estética avançada encontra a clareza do destino. Por Marilene Augustta DDos Santos.',
  icons: {
    icon: 'https://drive.google.com/thumbnail?id=1Q2RdkiZu3DrcFS8xk5wQFgE8FWmVARCD&sz=w128',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="bg-[#050505] text-[#E5E5E5] font-sans">
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
