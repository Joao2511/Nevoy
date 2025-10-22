// src/app/page.tsx
import Hero from '@/components/Hero';
import Escolha from '@/components/Escolha';
import Projetos from '@/components/Projetos';
import Servicos from '@/components/Serviços';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Escolha />
      <Projetos />
      <Servicos />
      <Footer />
    </>
  );
}
