import CardsEscolha from './CardsEscolha';

export default function Escolha() {
  return (
    <div>
      <section id="sobre" className="mx-auto w-full max-w-6xl px-6 py-20">
        <header className="mx-auto mb-24 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl">
            Por que escolher a{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
              Nevoy?
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-neutral-400 md:text-xl">
            Somos especialistas em transformar complexidade em simplicidade. A Nevoy entrega
            soluções digitais que unem software, automação e IA para gerar crescimento e resultados
            mensuráveis.
          </p>
        </header>

        <CardsEscolha />
      </section>
      <h1 className="mt-64 mb-16 pl-36 text-5xl leading-[1.05] font-semibold md:text-6xl">
        Veja o que <br /> podemos criar <br /> para você
      </h1>
    </div>
  );
}
