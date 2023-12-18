import { NavBar } from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main >
        {/* Inicial page */}
        <div className="bg-gradient-to-b from-primary via-primary to-primary/95 w-full h-[833px] flex flex-col items-center justify-center">
          <h1 className="text-center">A plataforma que conecta</h1>
          <h1 className="text-7xl font-extrabold">empresas <span className="text-center">e</span> profissionais</h1>
          <h1 className="text-center">da Metalmecânica</h1>
          <h2 className="text-2xl font-light mt-3">Milhares de profissionais esperando</h2>
          <h2 className="text-2xl font-light">pela sua vaga.</h2>
          <button className="bg-third w-64 h-14 mt-8 rounded-3xl font-light text-xl shadow-xl hover:bg-primary">Ver mais</button>
        </div>

        <div className="bg-secondary w-full h-[945px] flex justify-between items-center">
          <div className="flex flex-col gap-5 m-32">
            <div className="w-16 h-2 bg-primary shadow-xl"></div>
            <h1 className="text-black font-black text-7xl font-sans">O que <br />fazemos?</h1>
            <h2 className="text-black/50  text-2xl font-bold font-sans">Somos uma Plataforma que conecta  empresas da área industrial que precisam contratar mão de Obra, e os melhores Profissionais do Mercado.</h2>
            <span className="text-black/50 text-xl font-light">A plataforma surgiu devido as dificuldades para encontrar Mão de Obra qualificada com rapidez e assertividade. Os processos de seleção ficam cada dia mais complexos e demorados, por isso resolvemos criar algo simples e funcional , onde qualquer pessoa com um celular na mão consegue anunciar, acompanhar e medir o alcance da vaga.</span>
          </div>
          <div className="mr-24 ">
            <Image
              src="/image1.png"
              height={2000}
              width={3500}
              alt="image-1" />
          </div>
        </div>
      </main >
    </>
  )
}
