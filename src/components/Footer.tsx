'use client';

import Image from 'next/image';
import logo from '../assets/images/logo.png';
import { useCallback } from 'react';

export default function Footer() {
  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <footer className="bg-black text-white">
      <div className="flex flex-wrap justify-between gap-10 px-12 py-16 md:px-24">
        <div className="flex max-w-[260px] flex-col gap-3">
          <Image src={logo} alt="Logo Nevoy" className="w-12 select-none" priority />
          <p className="leading-relaxed font-medium">
            Soluções inteligentes para um futuro confiável.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-gray-300">Navegação Rápida</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="#hero"
                onClick={(e) => handleScroll(e, '#hero')}
                className="cursor-pointer transition hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                onClick={(e) => handleScroll(e, '#sobre')}
                className="cursor-pointer transition hover:text-white"
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                onClick={(e) => handleScroll(e, '#servicos')}
                className="cursor-pointer transition hover:text-white"
              >
                Serviços
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-gray-300">Contato</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5561995997277&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Nevoy."
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                (61) 99599-7277
              </a>
            </li>
            <li>
              <a href="mailto:contato@nevoy.com" className="transition hover:text-white">
                contato@nevoy.com
              </a>
            </li>
            <li>Brasília – DF</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#a855f7] py-3 text-center text-sm font-medium text-black/80">
        © 2025 Nevoy. Todos os direitos reservados.
      </div>
    </footer>
  );
}
