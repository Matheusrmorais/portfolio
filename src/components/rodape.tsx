"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="bg-[#133535] font-['DM_Sans',sans-serif] text-white"
    >
      <div className="mx-auto max-w-[1160px] px-6 md:px-0">
        <div className="grid gap-12 pb-20 pt-24 md:grid-cols-2 md:items-end md:pt-32">
          <div>


            <h2 className="mt-5 text-6xl font-bold leading-[0.95] tracking-tight md:text-[88px]">
              Vamos criar algo
              <span className="block font-mono text-[72px] font-normal italic leading-[0.9] tracking-tight text-[#a6c9c0] md:text-[96px]">
              com dados?
              </span>
            </h2>
          </div>

          <div className="md:pl-20">
            <p className="max-w-sm text-base leading-relaxed text-[#a6c9c0]">
              Estou aberto a oportunidades, conexões e conversas sobre dados, BI
              e tecnologia.
            </p>

            <a
              href="mailto:mathmoraiscontato@gmail.com"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#dbf95a] px-6 py-4 text-sm font-bold text-[#133535] transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dbf95a]"
            >
              mathmoraiscontato@gmail.com
           
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#a6c9c0]">
            © 2026 Matheus Morais. Feito com curiosidade e café.
          </p>

          <nav className="flex gap-8 font-bold">
            <Link
              href="https://www.linkedin.com/in/matheus-rodrigues-morais/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 hover:text-[#dbf95a]"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="https://github.com/Matheusrmorais"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 hover:text-[#dbf95a]"
            >
              GitHub <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
