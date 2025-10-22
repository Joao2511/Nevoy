import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

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
    <section className="bg-black text-white py-24 px-12 flex justify-center gap-10 flex-wrap mt-82">
      {services.map((service) => (
        <div
          key={service.title}
          className="
            relative rounded-3xl p-[1px] w-[340px] min-h-[520px]
            transition-all duration-500 ease-out
            hover:scale-[1.03] hover:-translate-y-1
            group
          "
        >
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#a855f7]" />

          <div
            className="
              relative z-10 bg-gradient-to-tr from-[#0c0c0c] via-[#050505] to-[#141414]
              rounded-3xl p-8 flex flex-col justify-between h-full
              shadow-lg backdrop-blur-md
            "
          >
            <div className="flex-1">
              <div
                className="
    w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center mb-6
    transition-all duration-200 ease-out
    group-hover:border-[9px] group-hover:border-white
  "
              >
                <div
                  className="
      w-3 h-3 rounded-full bg-transparent
      transition-all duration-200
    "
                ></div>
              </div>




              <h3 className="text-2xl font-medium mb-2">{service.title}</h3>
              <p className="text-white/70 mb-6 font-extralight">
                {service.text}
              </p>

              <hr className="border-white/10 mb-6" />

              <h4 className="text-white/90 font-medium mb-4">
                O que você recebe
              </h4>
              <ul className="space-y-3">
                {service.itens.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-white transition-colors duration-300 group-hover:text-[#a855f7]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="
                mt-8 bg-gradient-to-t from-[#0a0a0a] to-[#1b1b1b]
                h-12 flex items-center justify-center rounded-2xl
                border border-white/10 text-white
                transition-all duration-500 hover:text-white cursor-pointer hover:scale-[1.015]
              "
            >
              <p>Solicitar orçamento</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
