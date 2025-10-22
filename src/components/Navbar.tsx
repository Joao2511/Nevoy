'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../assets/images/logopng.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-50 w-full border-b border-white/5 backdrop-blur-md transition-all duration-500 ${
        scrolled ? 'bg-black/90 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center"
        >
          <Image src={logo} alt="Nevoy Logo" className="w-12 select-none" priority />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="hidden items-center gap-8 text-sm text-gray-300 md:flex"
        >
          {[
            { id: 'hero', label: 'Home' },
            { id: 'sobre', label: 'Sobre nós' },
            { id: 'projetos', label: 'Projetos' },
            { id: 'servicos', label: 'Serviços' },
          ].map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.a
          href="https://api.whatsapp.com/send?phone=5561995997277&text=Ol%C3%A1!%20Gostaria%20de%20conversar%20com%20a%20Nevoy."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-[#a855f7] hover:text-white"
        >
          Entre em contato
        </motion.a>
      </nav>
    </motion.header>
  );
}
