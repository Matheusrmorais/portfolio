"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-start text-black px-6 py-10 md:px-16 lg:px-24s">
      <div>
        <p className="bg-white text-black font-bold p-3 rounded-2xl text-sm border">
          🟢 ABERTO A OPORTUNIDADES
        </p>
      </div>

      <div className="mt-6 w-full flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2">
          <h1 className="text-[#193330] font-extrabold text-6xl">Dados que</h1>
          <h2 className="text-[#4F7270] text-6xl font-mono">
            Contam histórias.
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-sans">
            Analista de Dados & BI transformando informações em decisões — e
            construindo meu próximo capítulo com desenvolvimento Java.
          </p>
          <div className="mt-10">
            <Link
              href={""}
              className="bg-[#A9E34B] p-5 text-[#193330] transition-all duration-300 ease-in-out
  hover:-translate-y-1 hover:shadow-lg rounded-2xl font-bold"
            >
              Ver meus projetos
            </Link>{" "}
            <Link
              href={""}
              className=" p-5 text-[#193330] transition-all duration-300 ease-in-out
   hover:underline rounded-2xl font-bold"
            >
              Conheça minha trajetória
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">bi</div>
      </div>
    </main>
  );
}

//px-6 py-10 md:px-16 lg:px-24
