
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#F5F1E8] shadow-sm font-bold text-xl text-[#193332] p-4 md:p-6 border-b-2 border-b-black">
      <div className="flex flex-col items-start gap-5 md:flex-row md:justify-between md:items-center">

        {/* Nome */}
        <Link href="/dashboard/home">
          Matheus Morais
        </Link>

        {/* Navegação */}
        <nav className="flex flex-col items-start gap-3 text-base sm:flex-row sm:items-center sm:gap-4">
          <Link href="/dashboard/home" className="hover:border-b-2">
            Sobre
          </Link>

          <Link href="/dashboard/solucoes" className="hover:border-b-2">
            Projetos
          </Link>

          <Link href="/dashboard/sobre" className="hover:border-b-2">
            Habilidades
          </Link>

          <Link href="/dashboard/sobre" className="hover:border-b-2">
            Contato
          </Link>
        </nav>

        {/* Botão */}
        <nav>
          <Link
            href="/dashboard/login"
            className="inline-block bg-[#193332] hover:bg-[#193332d7] px-5 py-3 text-white text-sm rounded-3xl"
          >
            Vamos conversar
          </Link>
        </nav>

      </div>
    </header>
  );
}
