'use client';

import { motion, type Variants } from 'framer-motion';
import CardsEscolha from './CardsEscolha';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: bezier },
  },
};

export default function Escolha() {
  return (
    <div className="bg-black">
      <motion.section
        id="sobre"
        className="mx-auto w-full max-w-6xl px-6 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={container}
      >
        <motion.header className="mx-auto mb-24 max-w-3xl text-center" variants={container}>
          <motion.h2
            variants={item}
            className="mb-6 text-4xl md:text-5xl"
            style={{ willChange: 'transform, filter, opacity' }}
          >
            Por que escolher a{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
              Nevoy?
            </span>
          </motion.h2>

          <motion.p variants={item} className="text-lg leading-relaxed text-neutral-400 md:text-xl">
            Somos especialistas em transformar complexidade em simplicidade. A Nevoy entrega
            soluções digitais que unem software, automação e IA para gerar crescimento e resultados
            mensuráveis.
          </motion.p>
        </motion.header>

        <motion.div variants={item}>
          <CardsEscolha />
        </motion.div>
      </motion.section>

      <motion.h1
        className="mt-64 mb-16 pl-36 text-5xl leading-[1.05] font-semibold md:text-6xl"
        initial={{ opacity: 0, y: 22, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: bezier }}
        style={{ willChange: 'transform, filter, opacity' }}
      >
        Veja o que <br /> podemos criar <br /> para você
      </motion.h1>
    </div>
  );
}
