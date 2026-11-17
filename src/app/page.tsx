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
        <div className="w-full md:w-1/2">
          <div
            className="
        relative
        w-[420px] h-[420px]
        rounded-full
        border border-[#D2D4CB]
        flex items-center justify-center
      "
          >
            <div
              className="
          w-[320px] h-[320px]
          rounded-full
          bg-[#103B37]
          flex items-center justify-center
          shadow-xl
        "
            >
              <span
                className="
            text-[#C9F451]
            text-[140px]
            font-serif italic
          "
              >
                BI
              </span>
            </div>

            <div
              className="
          absolute top-[45px] -left-[35px]
          bg-white
          p-4 rounded-2xl
          shadow-lg
          z-10
        "
            >
              <p className="flex items-center gap-2 text-xs text-[#46615C]">
                <span className="w-2 h-2 rounded-full bg-[#8BBE27]"></span>
                INSIGHTS
              </p>

              <p className="text-2xl font-bold text-[#103B37] mt-2">+24,8%</p>
            </div>

            <div
              className="
          absolute bottom-[45px] -right-[35px]
          bg-[#FFAD91]
          p-4 rounded-2xl
          shadow-lg
          z-10
          rotate-[-2deg]
        "
            >
              <p className="text-[10px] font-bold text-[#603F32]">
                EM APRENDIZADO
              </p>

              <p className="text-base font-bold text-[#49352D] mt-1">
                Java & Spring
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

//px-6 py-10 md:px-16 lg:px-24
