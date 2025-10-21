import CardsEscolha from "./CardsEscolha";

export default function Escolha() {
  return (
    <div>
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
        <header className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl mb-6">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
              Nevoy?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
            Somos especialistas em transformar complexidade em simplicidade. A Nevoy entrega soluções digitais que unem software, automação e IA para gerar crescimento e resultados mensuráveis.
          </p>
        </header>

        <CardsEscolha />

      </section>
      <h1 className="text-5xl md:text-6xl font-semibold mb-16 leading-[1.05] pl-36 mt-64">
        Veja o que <br /> podemos criar <br /> para você
      </h1>
    </div>
  );
}
