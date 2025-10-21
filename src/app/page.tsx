// src/app/page.tsx
import Hero from "@/components/Hero";
import Escolha from "@/components/Escolha";
import Projetos from "@/components/Projetos";
import Servicos from "@/components/Serviços";

export default function Page() {
  return (
    <>
      <Hero />
      <Escolha />
      <Projetos/>
      <Servicos/>
    </>
  );
}