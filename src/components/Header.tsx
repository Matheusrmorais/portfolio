"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/colorido_icone_ramos.png";

export default function Header() {
  return (
    <header className="bg-[#F5F1E8] shadow-sm font-bold text-2xl text-[#193332] p-6 border-b-[#000000] border-b-2 bor">
      <div className="p-2  flex justify-between items-center ">
        <Link href={"/dashboard/home"} className="ml-5 ">
          Matheus Morais
        </Link>
        <nav className="">
          <Link href={"/dashboard/home"} className="ml-5 hover:text-[#193332d7]">
            Sobre |
          </Link>
          <Link
            href={"/dashboard/solucoes"}
            className="ml-5 hover:text-[#193332d7]"
          >
            Projetos |
          </Link>
          <Link href={"/dashboard/sobre"} className="ml-5 hover:text-[#193332d7]">
            Habilidades |
          </Link>
          <Link href={"/dashboard/sobre"} className="ml-5 hover:text-[#193332d7]">
            Contato |
          </Link>
        </nav>

        <nav>
          <Link href={"/dashboard/login"} className="ml-5 bg-[#193332] hover:bg-[#193332d7] p-5 text-white rounded-3xl ">
            Vamos conversar
          </Link>
        </nav>
      </div>
    </header>
  );
}
