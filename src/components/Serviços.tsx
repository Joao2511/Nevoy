'use client';

import { motion, type Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

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

const grid: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const card: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: bezier } },
};
const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const listItem: Variants = {
  hidden: { opacity: 0, y: 8, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.45, ease: bezier } },
};

export default function Servicos() {
  return (
    <>
      <div className="bg-black">
        <motion.h1
          className="mt-82 text-center text-3xl leading-[1.05] font-semibold md:text-4xl"
          initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: bezier }}
          style={{ willChange: 'transform, filter, opacity' }}
        >
          Nossos serviços
        </motion.h1>

        <motion.section
          id="servicos"
          className="mx-auto mb-12 grid max-w-6xl [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] place-items-center gap-x-6 gap-y-6 px-4 py-10 text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={grid}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={card}
              className="group relative h-full w-full max-w-[300px] md:max-w-[340px] transition-transform duration-500 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.03]"
            >
              <div className="h-full rounded-3xl bg-transparent p-[2px] transition-all duration-300 group-hover:bg-[#a855f7]/30">
                <div className="relative z-10 flex h-full flex-col rounded-3xl border-none bg-gradient-to-tr from-[#0c0c0c] via-[#050505] to-[#141414] p-6 md:p-8 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
                  <div className="flex-1">
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/40 transition-all duration-300 ease-out group-hover:border-[#a855f7] group-hover:shadow-[0_0_0_4px_rgba(168,85,247,0.15)]">
                      <div className="h-3 w-3 rounded-full bg-white/70 transition-all duration-300 ease-out group-hover:bg-[#a855f7]" />
                    </div>

                    <h3 className="mb-2 text-xl md:text-2xl font-medium">{service.title}</h3>

                    <p className="mb-4 line-clamp-2 font-extralight text-white/70 text-sm md:text-base">
                      {service.text}
                    </p>

                    <hr className="mb-4 border-white/10" />

                    <h4 className="mb-3 font-medium text-white/90 text-sm md:text-base">O que você recebe</h4>

                    <motion.ul className="space-y-2" variants={list}>
                      {service.itens.map((item, idx) => (
                        <motion.li
                          key={`${service.title}-${idx}`}
                          variants={listItem}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#a855f7]"
                          />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  <motion.a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 flex h-10 md:h-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-t from-[#0a0a0a] to-[#1b1b1b] text-white transition-all duration-300"
                  >
                    <span className="text-sm md:text-base transition-colors duration-300 group-hover:text-[#a855f7]">
                      Solicitar orçamento
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </>
  );
}
