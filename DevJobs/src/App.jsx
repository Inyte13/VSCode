import { useEffect, useState } from "react"
import {Header} from "./components/Header.jsx"
import {Footer} from "./components/Footer.jsx"
import {Home} from "./pages/Home.jsx"
import {Busqueda} from "./pages/Busqueda.jsx"


export default function App() {
  const [pathActual, setPath]=useState(location.pathname)
  let paginaActual=null
  if(pathActual==="/"){
    paginaActual=<Home/>
  }else if(pathActual==="/busqueda"){
    paginaActual=<Busqueda/>
  }
  // Efecto que se suscribe a los cambios de la url, SPA
  useEffect(()=>{
    const manejarCambio=()=>{
      setPath(location.pathname)
    }
    addEventListener("popstate", manejarCambio)
    return()=>{
      removeEventListener("popstate", manejarCambio)
    }
  }, [])
  return (
    <>
      <Header />
      {paginaActual}
      <Footer/>
    </>
  )
}

