"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#F5F1E8] shadow-sm font-bold text-xl text-[#193332] p-6 border-b-[#000000] border-b-2 ">
      <div className="p-2  flex justify-between items-center ">
        <Link href={"/dashboard/home"} className="ml-5 ">
          Matheus Morais
        </Link>
        <nav className="">
          <Link href={"/dashboard/home"} className="ml-5 hover:border-b-2">
            Sobre
          </Link>
          <span> |</span>
          <Link
            href={"/dashboard/solucoes"}
            className="ml-5 hover:border-b-2"
          >
            Projetos
          </Link>
          <span> |</span>
          <Link
            href={"/dashboard/sobre"}
            className="ml-5 hover:border-b-2"
          >
            Habilidades
          </Link>
          <span> |</span>
          <Link
            href={"/dashboard/sobre"}
            className="ml-5 hover:border-b-2"
          >
            Contato
          </Link>
        </nav>

        <nav>
          <Link
            href={"/dashboard/login"}
            className="ml-5 bg-[#193332] hover:bg-[#193332d7] p-4 text-white  text-sm rounded-3xl "
          >
            Vamos conversar
          </Link>
        </nav>
      </div>
    </header>
  );
}
