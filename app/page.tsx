import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import StarsBackground from '@/components/StarsBackground';
import CookieConsent from '@/components/CookieConsent';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarsBackground />
      <Header />
      <Hero />
      <ServiceSection />
      <About />
      <FAQ />
      <ContactForm />
      <Footer />
      <CookieConsent />
    </main>
  );
}
