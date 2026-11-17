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
          <p>
            Analista de Dados & BI transformando informações em decisões — e
            construindo meu próximo capítulo com desenvolvimento Java.
          </p>
          <div className="mt-10">
            <Link href={""}>teste</Link>
            <Link href={""} className="ml-5">
              teste
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">bi</div>
      </div>
    </main>
  );
}

//px-6 py-10 md:px-16 lg:px-24
