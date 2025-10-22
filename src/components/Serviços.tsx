import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Sites e Apps',
    text: 'Ideal para empresas que querem presença digital profissional de impacto.',
    itens: [
      'Layout moderno e responsivo',
      'Revisões incluídas durante o projeto',
      'SEO básico para melhor visibilidade',
      'Suporte inicial pós-entrega',
      'Customização sob medida',
    ],
    link: 'https://api.whatsapp.com/send?phone=5561995997277&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20criar%20um%20site%20ou%20aplicativo%20com%20a%20Nevoy!%20Quero%20entender%20melhor%20como%20funciona%20o%20processo%20de%20cria%C3%A7%C3%A3o%20e%20as%20op%C3%A7%C3%B5es%20de%20personaliza%C3%A7%C3%A3o.',
  },
  {
    title: 'Automação e IA',
    text: 'Ideal para empresas que buscam eficiência e inteligência nos processos.',
    itens: [
      'Mapeamento e análise de processos repetitivos',
      'Criação de automações inteligentes sob medida',
      'Agentes de IA para atendimento e tarefas',
      'Revisões e ajustes até o ponto ideal',
    ],
    link: 'https://api.whatsapp.com/send?phone=5561995997277&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20Autom%C3%A7%C3%A3o%20e%20IA%20da%20Nevoy.%20Tenho%20interesse%20em%20automatizar%20processos%20e%20usar%20intelig%C3%AAncia%20artificial%20no%20meu%20neg%C3%B3cio.',
  },
  {
    title: 'Marketing Digital',
    text: 'Ideal para empresas que querem atrair clientes e crescer com dados.',
    itens: [
      'Planejamento estratégico de campanhas',
      'Gestão de anúncios em múltiplas plataformas',
      'Revisões periódicas de performance',
      'Relatórios claros de ROI, CAC e LTV',
      'Suporte estratégico contínuo',
    ],
    link: 'https://api.whatsapp.com/send?phone=5561995997277&text=Ol%C3%A1%2C%20quero%20entender%20melhor%20os%20servi%C3%A7os%20de%20Marketing%20Digital%20da%20Nevoy.%20Tenho%20interesse%20em%20melhorar%20minhas%20campanhas%20e%20aumentar%20meus%20resultados%20com%20tr%C3%A1fego%20pago.',
  },
];

export default function Servicos() {
  return (
    <section className="mt-82 flex flex-wrap justify-center gap-10 bg-black px-12 py-24 text-white">
      {services.map((service) => (
        <div className="group relative min-h-[520px] w-[340px] rounded-3xl transition-transform duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03]">
          <div className="rounded-3xl bg-transparent p-[2px] transition-all duration-300 group-hover:bg-[#a855f7]/30">
            <div className="relative z-10 h-full rounded-3xl border-none bg-gradient-to-tr from-[#0c0c0c] via-[#050505] to-[#141414] p-8 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
              <div className="flex-1">
                <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/40 transition-all duration-300 ease-out group-hover:border-[#a855f7] group-hover:shadow-[0_0_0_4px_rgba(168,85,247,0.15)]">
                  <div className="h-3 w-3 rounded-full bg-white/70 transition-all duration-300 ease-out group-hover:bg-[#a855f7]" />
                </div>

                <h3 className="mb-2 text-2xl font-medium">{service.title}</h3>
                <p className="mb-6 font-extralight text-white/70">{service.text}</p>

                <hr className="mb-6 border-white/10" />

                <h4 className="mb-4 font-medium text-white/90">O que você recebe</h4>
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

              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex h-12 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-t from-[#0a0a0a] to-[#1b1b1b] text-white transition-transform duration-300 hover:scale-[1.02]"
              >
                <p>Solicitar orçamento</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
