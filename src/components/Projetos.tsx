'use client';

import { motion, useAnimation, type Transition } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

import siteImg from '@/assets/images/site.png';
import appImg from '@/assets/images/app.png';
import automacaoImg from '@/assets/images/automacao.png';
import trafegoImg from '@/assets/images/trafego.png';

type Section = {
  title: string;
  text: string;
  image: StaticImageData;
};

const sections: Section[] = [
  {
    title: 'Sites',
    text: 'A Nevoy cria sites modernos e aplicativos sob medida que unem design sofisticado, alta performance e escalabilidade. Nosso processo vai do entendimento da necessidade até a entrega final, garantindo soluções digitais que conectam empresas e clientes de forma intuitiva, segura e eficiente.',
    image: siteImg,
  },
  {
    title: 'Apps',
    text: 'Aplicativos nativos e híbridos que oferecem experiências fluidas e intuitivas, com design e performance premium.',
    image: appImg,
  },
  {
    title: 'Automação e IA',
    text: 'Integramos inteligência artificial e automações para otimizar fluxos e reduzir custos operacionais.',
    image: automacaoImg,
  },
  {
    title: 'Tráfego pago',
    text: 'Campanhas de marketing de performance orientadas por dados para escalar resultados.',
    image: trafegoImg,
  },
];

function AnimatedImage({
  section,
  isOpen,
  registerRef,
}: {
  section: Section;
  isOpen: boolean;
  registerRef: (el: HTMLDivElement | null) => void;
}) {
  const controls = useAnimation();

  const SLOW_SPRING: Transition = { type: 'spring', stiffness: 90, damping: 32, mass: 1.1 };

  useEffect(() => {
    controls.start({
      x: isOpen ? 0 : 150,
      transition: SLOW_SPRING,
    });
  }, [isOpen, controls]);

  return (
    <motion.div
      ref={registerRef}
      className="relative mx-auto h-[60vh] md:h-[90vh] w-full overflow-hidden will-change-transform"
      initial={{ x: 150 }}
      animate={controls}
    >
      <Image
        src={section.image}
        alt={section.title}
        fill
        className="rounded-tl-4xl rounded-bl-4xl object-cover md:rounded-4xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </motion.div>
  );
}

export default function Projetos() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCard, setActiveCard] = useState(-1);
  const lastYRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const computeActive = () => {
      const y = window.scrollY || 0;
      const goingDown = y >= lastYRef.current;
      lastYRef.current = y;

      const ENTER_VH = 0.83;
      const ENTER_PX = 110;
      const EXIT_VH = 0.55;
      const EXIT_PX = 40;

      const line =
        window.innerHeight * (goingDown ? ENTER_VH : EXIT_VH) + (goingDown ? ENTER_PX : EXIT_PX);

      let last = -1;
      for (let i = 0; i < cardRefs.current.length; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top < line) last = i;
      }
      setActiveCard(last);
    };

    lastYRef.current = window.scrollY || 0;
    computeActive();
    window.addEventListener('scroll', computeActive, { passive: true });
    window.addEventListener('resize', computeActive);
    return () => {
      window.removeEventListener('scroll', computeActive);
      window.removeEventListener('resize', computeActive);
    };
  }, []);

  const current = Math.max(activeCard, 0);

  return (
    <section id="projetos" ref={containerRef} className="relative bg-black text-white">
      {/* Mobile layout - single column */}
      <div className="flex flex-col gap-16 py-16 md:hidden">
        <div className="px-6">
          <ul className="space-y-12 pt-6">
            {sections.map((s, i) => (
              <li
                key={s.title}
                onClick={() => {
                  const el = cardRefs.current[i];
                  if (el) {
                    const offset = window.innerHeight * 0.2;
                    const elTop = el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: elTop, behavior: 'smooth' });
                  }
                }}
                className="cursor-pointer pb-6 transition-all duration-300 border-b border-white/10 hover:text-white/90"
              >
                <h3
                  className={`text-xl font-semibold transition-colors duration-300 mb-4 ${
                    i === current ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {s.title}
                </h3>

                <div className="mb-8">
                  <AnimatedImage
                    section={s}
                    isOpen={i <= activeCard}
                    registerRef={(el) => (cardRefs.current[i] = el)}
                  />
                </div>

                {i === current && (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3"
                  >
                    <p className="text-[0.85rem] leading-relaxed text-gray-400 mb-4">
                      {s.text}
                    </p>
                    <a
                      href={
                        i === 0
                          ? 'https://api.whatsapp.com/send?phone=5561995997277&text=Olá%2C%20tenho%20interesse%20em%20criar%20um%20site%20com%20a%20Nevoy!'
                          : i === 1
                            ? 'https://api.whatsapp.com/send?phone=5561995997277&text=Olá%2C%20quero%20saber%20mais%20sobre%20o%20desenvolvimento%20de%20aplicativos%20da%20Nevoy!'
                            : i === 2
                              ? 'https://api.whatsapp.com/send?phone=5561995997277&text=Olá%2C%20gostaria%20de%20entender%20melhor%20como%20funciona%20a%20automação%20e%20IA%20da%20Nevoy!'
                              : 'https://api.whatsapp.com/send?phone=5561995997277&text=Olá%2C%20tenho%20interesse%20em%20serviços%20de%20tráfego%20pago%20da%20Nevoy!'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-2 flex items-center gap-1 text-lg font-semibold text-white transition-colors duration-300"
                    >
                      Saiba mais &gt;
                    </a>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop layout - two columns */}
      <div className="hidden w-full gap-24 py-16 md:flex">
        <div className="sticky top-20 h-fit w-1/3 self-start pt-24 pl-12 md:pl-36">
          <ul className="space-y-8 pt-6">
            {sections.map((s, i) => (
              <li
                key={s.title}
                onClick={() => {
                  const el = cardRefs.current[i];
                  if (el) {
                    const offset = window.innerHeight * 0.2;
                    const elTop = el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: elTop, behavior: 'smooth' });
                  }
                }}
                className={`cursor-pointer pb-6 transition-all duration-300 ${
                  i !== sections.length - 1 ? 'border-b border-white/10' : ''
                } hover:text-white/90`}
              >
                <h3
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    i === current ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {s.title}
                </h3>

                {i === current && (
                  <motion.p
                    key={s.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 text-[0.95rem] leading-relaxed text-gray-400"
                  >
                    {s.text}
                    <a
                      href={
                        i === 0
                          ? 'https://api.whatsapp.com/send?phone=5561995997277&text=Olá%2C%20tenho%20interesse%20em%20criar%20um%20site%20com%20a%20Nevoy!'
                          : i === 1
                            ? 'https://api.whatsapp.com/send?phone=5561995997277&text=Olá%2C%20quero%20saber%20mais%20sobre%20o%20desenvolvimento%20de%20aplicativos%20da%20Nevoy!'
                            : i === 2
                              ? 'https://api.whatsapp.com/send?phone=5561995997277&text=Olá%2C%20gostaria%20de%20entender%20melhor%20como%20funciona%20a%20automação%20e%20IA%20da%20Nevoy!'
                              : 'https://api.whatsapp.com/send?phone=5561995997277&text=Olá%2C%20tenho%20interesse%20em%20serviços%20de%20tráfego%20pago%20da%20Nevoy!'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-2 flex items-center gap-1 text-xl font-semibold text-white transition-colors duration-300"
                    >
                      Saiba mais &gt;
                    </a>
                  </motion.p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative left-[2vw] flex w-2/3 flex-col justify-center gap-64">
          {sections.map((s, i) => (
            <AnimatedImage
              key={s.title}
              section={s}
              isOpen={i <= activeCard}
              registerRef={(el) => (cardRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}