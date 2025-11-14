import { useState } from 'react'
import{Header}from './components/Header.jsx'
import{Pagination}from "./components/Pagination.jsx"
import{Hero}from "./components/Hero.jsx"
import{ListaTrabajos}from "./components/ListaTrabajos.jsx"
import{Footer} from "./components/Footer.jsx"
import data from "./data.json"

const RESULTADOS_POR_PAGINA=5
const paginasTotales=Math.ceil(data.length/RESULTADOS_POR_PAGINA)

export default function App() {
  const[paginaActual,setPagina]=useState(1)
  const mostrarCambio=(pagina)=>{
    setPagina(pagina)
  }
  return (
    <>
      <Header/>
        <main>
          <Hero/>
          <section className="empleoContainer">
            <ListaTrabajos data={data.slice(
              (paginaActual-1)*RESULTADOS_POR_PAGINA,
              paginaActual*RESULTADOS_POR_PAGINA)}/>
            <Pagination nroPaginas={paginasTotales} paginaActual={paginaActual} fn={mostrarCambio}/>
          </section>
        </main>
      <Footer/>
    </>
  )
}

