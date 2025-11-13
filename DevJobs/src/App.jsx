import './styles-empleos.css'
import { useState } from 'react'
import{Header}from './components/Header.jsx'
import{Pagination}from "./components/Pagination.jsx"
import{Busqueda}from "./components/Busqueda.jsx"
import{ListaTrabajos}from "./components/ListaTrabajos.jsx"
import{Footer} from "./components/Footer.jsx"

export default function App() {
  const[paginaActual,setPagina]=useState(1)
  const mostrarCambio=(pagina)=>{
    console.log("Cambiando la página: ",pagina)
    setPagina(pagina)
  }
  return (
    <>
      <Header/>
        <main>
          <Busqueda/>
          <section className="empleo__container">
            <ListaTrabajos/>
            <Pagination paginaActual={paginaActual} fn={mostrarCambio}/>
          </section>
        </main>
      <Footer/>
    </>
  )
}

