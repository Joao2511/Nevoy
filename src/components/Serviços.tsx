const services = [
  {
    title: "Sites e Apps",
    text: "Ideal para empresas que querem presença digital profissional de impacto.",
    itens: [
      "Layout moderno e responsivo",
      "Revisões incluídas durante o projeto",
      "SEO básico para melhor visibilidade",
      "Suporte inicial pós-entrega",
      "Customização sob medida",
    ],
  },
  {
    title: "Automação e IA",
    text: "Ideal para empresas que buscam eficiência e inteligência nos processos.",
    itens: [
      "Mapeamento e análise de processos repetitivos",
      "Criação de automações inteligentes sob medida",
      "Agentes de IA para atendimento e tarefas",
      "Revisões e ajustes até o ponto ideal",
    ],
  },
  {
    title: "Marketing Digital",
    text: "Ideal para empresas que querem atrair clientes e crescer com dados.",
    itens: [
      "Planejamento estratégico de campanhas",
      "Gestão de anúncios em múltiplas plataformas",
      "Revisões periódicas de performance",
      "Relatórios claros de ROI, CAC e LTV",
      "Suporte estratégico contínuo",
    ],
  },
];

export default function Servicos() {
  return (
    <section className="bg-black text-white py-24 px-12 flex justify-center gap-10 flex-wrap">
      {services.map((service) => (
        <div
          key={service.title}
          className="bg-zinc-900/60 rounded-3xl p-8 w-[340px] flex flex-col justify-between shadow-lg backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-300"
        >
          <div>
            <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center mb-6">
              <div className="w-2 h-2 rounded-full bg-white/60"></div>
            </div>

            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-6">{service.text}</p>

            <hr className="border-white/10 mb-6" />

            <h4 className="text-white/90 font-medium mb-4">
              O que você recebe
            </h4>
            <ul className="space-y-3">
              {service.itens.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-300">
                  <span className="text-green-400 mt-[2px]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
