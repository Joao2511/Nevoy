export async function getHeroContent() {
  return {
    title: "Next.js Landing SSG",
    subtitle: "Ultra-rápida, indexável e fácil de manter.",
  };
}

export async function getFeatures() {
  return [
    { title: "SSG + CDN", desc: "HTML gerado no build e servido do edge." },
    { title: "Imagens otimizadas", desc: "next/image com lazy e formatos modernos." },
    { title: "Code splitting", desc: "Somente o necessário por rota." },
  ];
}
