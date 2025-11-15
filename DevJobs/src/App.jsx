import { useState } from 'react'
import{Header}from './components/Header.jsx'
import{Pagination}from "./components/Pagination.jsx"
import{Hero}from "./components/Hero.jsx"
import{ListaEmpleos}from "./components/ListaEmpleos.jsx"
import{Footer} from "./components/Footer.jsx"
import data from "./data.json"


export default function App() {

  const EMPLEOS_POR_PAGINA=3
  const [pagina,setPagina]=useState(1)

  
  const cambiarPag=(pagina)=>{
    setPagina(pagina)
  }
  
  const [text,setText]=useState("")
  const coincidencias=text===""?data:data.filter(empleo=>empleo.titulo.toLowerCase().includes(text.toLowerCase()))
  
  const NUMERO_DE_PAGINAS=Math.ceil(coincidencias.length/EMPLEOS_POR_PAGINA)
  
  
  return (
    <>
      <Header />
        <main>
          <Hero enTextField={(e)=>{
            setText(e)
            setPagina(1)
            }}/>
          <section className="empleoContainer">
            <ListaEmpleos data={coincidencias.slice(
              EMPLEOS_POR_PAGINA*(pagina-1),
              EMPLEOS_POR_PAGINA*pagina)}/>
            <Pagination nroPaginas={NUMERO_DE_PAGINAS} paginaActual={pagina} fn={cambiarPag}/>
          </section>
        </main>
      <Footer/>
    </>
  )
}

