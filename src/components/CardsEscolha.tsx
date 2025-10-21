"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faWandMagicSparkles,
  faBullhorn,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Card = {
  icon: IconDefinition;
  title: React.ReactNode;
  desc: string;
};

const CARDS: Card[] = [
  {
    icon: faCode,
    title: "Software sob medida",
    desc: "Sistemas que se adaptam ao seu negócio, com foco em performance e manutenção.",
  },
  {
    icon: faWandMagicSparkles,
    title: (
      <>
        Automação e<br />IA
      </>
    ),
    desc: "Inteligência para reduzir custos, eliminar tarefas repetitivas e aumentar eficiência.",
  },
  {
    icon: faBullhorn,
    title: "Marketing de Performance",
    desc: "Tráfego pago + dados para acelerar resultados e melhorar CAC/LTV.",
  },
  {
    icon: faChartLine,
    title: "Escalabilidade Inteligente",
    desc: "Arquitetura preparada para crescer com segurança e previsibilidade.",
  },
];

function Card({ icon, title, desc }: Card) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-tl from-[#0C0C0C] to-[#171717] p-6 md:px-8 md:py-12 transition-all duration-300 "
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-[#1B1B1B] z-0 transform transition-transform duration-500 ease-out ${isHovering ? "scale-120" : "scale-100"
          }`}
      ></div>
      <div
        className={`absolute -top-10 -left-10 w-24 h-24 rounded-full bg-[#1B1B1B] z-0 transform transition-transform duration-500 ease-out ${isHovering ? "scale-120" : "scale-100"
          }`}
      ></div>

      {isHovering && (
        <div
          className="pointer-events-none absolute w-56 h-56 rounded-full bg-white/8 blur-3xl transition-transform duration-75 ease-out z-[1]"
          style={{
            left: pos.x - 112,
            top: pos.y - 112,
          }}
        />
      )}

      <div className="relative z-[2]">
        <div className="flex items-center justify-center w-16 h-16 rounded-lg border border-white/10 bg-[#262626] transition-all duration-300 group-hover:border-white/20">
          <FontAwesomeIcon
            icon={icon}
            className="text-white text-2xl transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <h3 className="mt-5 text-xl md:text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{desc}</p>
      </div>

    </div>
  );
}

export default function CardsEscolha({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}
    >
      {CARDS.map((c, i) => (
        <Card key={i} {...c} />
      ))}
    </div>
  );
}
