"use client";

import Image from "next/image";
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

      <div
        className="mt-15 bg-[#193330]
  w-screen
  relative
  left-1/2
  -translate-x-1/2
  p-6 text-white font-bold
  flex justify-around"
      >
        <p>🟢 POWER BI</p>
        <p>🟢 EXCEL</p>
        <p>🟢 SQL</p>
        <p>🟢 JAVA</p>
        <p>🟢SPRING BOOT</p>
      </div>

      <div className="w-mt-6 w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="mt-30 pb-10 ">
            <p className="underline underline-offset-8 text-2xl font-bold" id="sobre">
              01 — Sobre mim
            </p>
          </div>

          <p className=" text-lg font-serif">
            Curiosidade, pensamento analítico e vontade de construir soluções
            melhores.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <div className="mt-30 pb-10">
            <h1 className="font-extrabold text-6xl text-[#193330]">
              Transformo números em{" "}
              <span className="font-mono text-[#4F7270]">clareza</span> para o
              negócio.
            </h1>
          </div>
          <div className="w-mt-6 w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <p className="max-w-sm font-serif">
                Minha atuação é focada em organizar dados, criar indicadores e
                desenvolver dashboards que facilitam a leitura de cenários e a
                tomada de decisão.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <p className="max-w-sm font-serif">
                Minha atuação é focada em organizar dados, criar indicadores e
                desenvolver dashboards que facilitam a leitura de cenários e a
                tomada de decisão.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row max-w-3xl overflow-hidden rounded-[20px] border border-[#c9c5bb] mt-10">
            <div className="flex-1 p-8">
              <strong className="block text-4xl font-bold text-[#14302b]">
                BI
              </strong>
              <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-[#6b7a76]">
                Foco atual
              </span>
            </div>
            <div className="flex-1 p-8">
              <strong className="block text-4xl font-bold text-[#14302b]">
                Java
              </strong>
              <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-[#6b7a76]">
                Em Formação
              </span>
            </div>
            <div className="flex-1 p-8">
              <strong className="block text-4xl font-bold text-[#14302b]">
                ∞
              </strong>
              <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-[#6b7a76]">
                Sempre aprendendo
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#E8E1D5] mt-10 py-20 px-6">
        <div className="w-mt-6 w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="pb-10 ">
              <p className="underline underline-offset-8 text-2xl font-bold ml-11" id="projetos">
                02 — Projetos selecionados
              </p>
            </div>

            <h1 className=" text-6xl text-[#193330] font-extrabold ml-10">
              Prática em ação.
            </h1>
          </div>

          <div className="w-full md:w-1/2">
            <div className="mt-19 max-w-lg pb-10">
              <p className="font-serif text-lg text-[#193330]">
                Projetos de estudo que demonstram meu processo: entender o
                problema, organizar os dados e comunicar a solução.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 mt-20">
          <Link
            href={"https://github.com/Matheusrmorais/Jovi_Cam_Fiap"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overflow-hidden rounded-[28px] bg-bege shadow-lg ring-1 ring-black/5">
              <div className="relative h-[280px] ">
                <Image
                  src="/Jovicam.png"
                  alt="JoviCam"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <span className="absolute left-6 top-6 text-xs font-bold text-verde">
                  01
                </span>
              </div>
              <div className="p-7">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-musgo">
                  Tailwind • Javascript
                </p>
                <h3 className="mt-4 text-2xl font-bold text-verde">Jovi Cam</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-musgo">
                  É plataforma educacional voltada para pessoas que desejam
                  aprender mais sobre fotografia.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-linha px-3 py-1 text-xs font-semibold text-verde">
                    Tailwinds
                  </span>
                  <span className="rounded-full border border-linha px-3 py-1 text-xs font-semibold text-verde">
                    Javascript
                  </span>
                  <span className="rounded-full border border-linha px-3 py-1 text-xs font-semibold text-verde">
                    Html
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href={"https://github.com/Matheusrmorais/Spring-Boot"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overflow-hidden rounded-[28px] bg-bege shadow-lg ring-1 ring-black/5">
              <div className="relative h-[280px] ">
                <Image
                  src="/spring.jpg"
                  alt="Spring"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-6 top-6 text-xs font-bold text-verde">
                  02
                </span>
              </div>
              <div className="p-7">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-musgo">
                  Java
                </p>
                <h3 className="mt-4 text-2xl font-bold text-verde">
                  Spring Boot
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-musgo">
                  Projeto da faculdade spring boot com integração com bando de
                  dados oracle sql e testando API
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-linha px-3 py-1 text-xs font-semibold text-verde">
                    Java
                  </span>
                  <span className="rounded-full border border-linha px-3 py-1 text-xs font-semibold text-verde">
                    SQL Oracle
                  </span>
                  <span className="rounded-full border border-linha px-3 py-1 text-xs font-semibold text-verde">
                    Banco de dados
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href={
              "https://app.powerbi.com/view?r=eyJrIjoiZGU2NWI0NDgtMWQzNi00NzUzLTkxMDQtYzkzMWZlNTBiYmQ2IiwidCI6Ijc3ZTg1MThkLTRkY2MtNDQ0MS1iOTRiLTUxOWFjYzllMTAwMiJ9"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overflow-hidden rounded-[28px] bg-bege shadow-lg ring-1 ring-black/5">
              <div className="relative h-[280px] ">
                .
                <Image
                  src="/powerbi.webp"
                  alt="JoviCam"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-6 top-6 text-xs font-bold text-verde">
                  03
                </span>
              </div>
              <div className="p-7">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-musgo">
                  Power BI
                </p>
                <h3 className="mt-4 text-2xl font-bold text-verde">
                  Dashboard Hospitalar
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-musgo">
                  Visão executiva de faturamento, ticket médio e performance por
                  região, com indicadores que apoiam decisões comerciais.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-linha px-3 py-1 text-xs font-semibold text-verde">
                    Power BI
                  </span>
                  <span className="rounded-full border border-linha px-3 py-1 text-xs font-semibold text-verde">
                    DAX
                  </span>
                  <span className="rounded-full border border-linha px-3 py-1 text-xs font-semibold text-verde">
                    SQL
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-mt-6 w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="mt-30 pb-10 ">
            <p className="underline underline-offset-8 text-2xl font-bold" id="habilidades">
              03 — Habilidades
            </p>
          </div>

          <div className="pb-10">
            <h1 className="font-extrabold text-5xl text-[#193330] max-w-xl">
              Minha caixa {""}
              <span className="font-mono text-[#4F7270]">de ferramentas.</span>
            </h1>
            <p className="mt-5 text-lg text-[#193330] font-serif max-w-sm">
              Conhecimentos que uso hoje e tecnologias que fazem parte da minha
              evolução contínua.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <ul className="mx-auto max-w-3xl divide-y divide-[#d9d4c8] border-y border-[#d9d4c8] font-['DM_Sans',sans-serif] mt-30">
            <li className="grid grid-cols-[48px_1fr] gap-y-2 py-7 md:grid-cols-[60px_192px_1fr] md:gap-y-0">
              <span className="pt-1 text-xs font-bold text-[#7d8a86]">01</span>
              <h3 className="text-lg font-bold text-[#14302b]">
                Dados &amp; BI
              </h3>
              <p className="col-start-2 text-[15px] leading-relaxed text-[#6b7a76] md:col-start-auto">
                Power BI, DAX, SQL, Excel
              </p>
            </li>

            <li className="grid grid-cols-[48px_1fr] gap-y-2 py-7 md:grid-cols-[60px_192px_1fr] md:gap-y-0">
              <span className="pt-1 text-xs font-bold text-[#7d8a86]">02</span>
              <h3 className="text-lg font-bold text-[#14302b]">
                Desenvolvimento
              </h3>
              <p className="col-start-2 text-[15px] leading-relaxed text-[#6b7a76] md:col-start-auto">
                Java, POO, Spring Boot, APIs REST, REACT
              </p>
            </li>

            <li className="grid grid-cols-[48px_1fr] gap-y-2 py-7 md:grid-cols-[60px_192px_1fr] md:gap-y-0">
              <span className="pt-1 text-xs font-bold text-[#7d8a86]">03</span>
              <h3 className="text-lg font-bold text-[#14302b]">Soft skills</h3>
              <p className="col-start-2 text-[15px] leading-relaxed text-[#6b7a76] md:col-start-auto">
                Comunicação, pensamento crítico, organização
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

//px-6 py-10 md:px-16 lg:px-24
