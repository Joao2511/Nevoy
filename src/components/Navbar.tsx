'use client';
import logo from '../assets/images/logo.png';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-black/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 text-white">
        <div className="flex items-center">
          <Image src={logo} alt="" className="w-12" />
        </div>

        <ul className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <li>
            <a href="#hero" className="transition hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#sobre" className="transition hover:text-white">
              Sobre nós
            </a>
          </li>
          <li>
            <a href="#projetos" className="transition hover:text-white">
              Projetos
            </a>
          </li>
          <li>
            <a href="#servicos" className="transition hover:text-white">
              Serviços
            </a>
          </li>
        </ul>

        <a
          href="https://api.whatsapp.com/send?phone=5561995997277&text=Ol%C3%A1!%20Gostaria%20de%20conversar%20com%20a%20Nevoy."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-[#a855f7] hover:text-white"
        >
          Entre em contato
        </a>
      </nav>
    </header>
  );
}
