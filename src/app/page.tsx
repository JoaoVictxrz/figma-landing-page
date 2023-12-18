import { NavBar } from "./components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main >

        <div className="bg-gradient-to-b from-primary via-primary to-secondary/70 w-full h-[833px] flex flex-col items-center justify-center">
          <h1 className="text-center">A plataforma que conecta</h1>
          <h1 className="text-7xl font-extrabold">empresas <span className="text-center">e</span> profissionais</h1>
          <h1 className="text-center">da Metalmecânica</h1>
          <h2 className="text-2xl font-light mt-3">Milhares de profissionais esperando</h2>
          <h2 className="text-2xl font-light">pela sua vaga.</h2>
          <button className="bg-third w-64 h-14 mt-8 rounded-3xl font-light text-xl shadow-xl hover:bg-primary">Ver mais</button>
        </div>

      </main >
    </>
  )
}
