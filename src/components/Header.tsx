"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#F5F1E8] shadow-sm font-bold text-xl text-[#193332] p-4 md:p-6 border-b-2 border-b-black">
      <div className="flex flex-col items-start gap-5 md:flex-row md:justify-between md:items-center">
        {/* Nome */}
        <Link href="">Matheus Morais</Link>

        {/* Navegação */}
        <nav className="flex flex-col items-start gap-3 text-base sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="#sobre"
            className=" relative after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-[#193330]
after:transition-all after:duration-300
hover:after:w-full"
          >
            Sobre
          </Link>

          <Link
            href="#projetos"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-[#193330]
after:transition-all after:duration-300
hover:after:w-full"
          >
            Projetos
          </Link>

          <Link
            href="#habilidades"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-[#193330]
after:transition-all after:duration-300
hover:after:w-full"
          >
            Habilidades
          </Link>

          <Link
            href="#contato"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0
after:h-[2px] after:w-0 after:bg-[#193330]
after:transition-all after:duration-300
hover:after:w-full"
          >
            Contato
          </Link>
        </nav>

        {/* Botão */}
        <nav>
          <Link
            href="#contato"
            className="inline-block bg-[#193332] transition-all duration-300 ease-in-out
  hover:-translate-y-1 hover:shadow-lg px-5 py-3 text-white text-sm rounded-3xl"
          >
            Vamos conversar
          </Link>
        </nav>
      </div>
    </header>
  );
}
