import { useState } from 'react'
import { Pagination } from '../components/Pagination.jsx'
import { Hero } from '../components/Hero.jsx'
import { ListaEmpleos } from '../components/ListaEmpleos.jsx'
import data from '../data.json'

export function Busqueda () {
  const EMPLEOS_POR_PAGINA = 3

  const [pagina, setPagina] = useState(1)
  const cambiarPag = (page) => {
    setPagina(page)
  }

  const [inputText, setInputText] = useState('')
  const manejarInputText = (e) => {
    setInputText(e)
    setPagina(1)
  }

  const [filtroTecnologia, setFiltroTecnologia] = useState('')
  const manejarTecnologia = (e) => {
    setFiltroTecnologia(e)
    setPagina(1)
  }

  const [filtroUbicacion, setFiltroUbicacion] = useState('')
  const manejarUbicacion = (e) => {
    setFiltroUbicacion(e)
    setPagina(1)
  }
  const [filtroExperiencia, setFiltroExperiencia] = useState('')
  const manejarExperiencia = (e) => {
    setFiltroExperiencia(e)
    setPagina(1)
  }

  const dataFiltrada = data.filter(empleo =>
    (inputText === '' || empleo.titulo.toLowerCase().includes(inputText.toLowerCase())) &&
    (filtroTecnologia === '' || empleo.data.technology.includes(filtroTecnologia)) &&
    (filtroUbicacion === '' || empleo.data.ubicacion === filtroUbicacion) &&
    (filtroExperiencia === '' || empleo.data.nivel === filtroExperiencia)
  )

  const empleosActuales = dataFiltrada.slice(EMPLEOS_POR_PAGINA * (pagina - 1), EMPLEOS_POR_PAGINA * pagina)
  const NUMERO_DE_PAGINAS = Math.ceil(dataFiltrada.length / EMPLEOS_POR_PAGINA)

  return (
    <main>
      <Hero
        fnTextField={manejarInputText}
        fnTecnologia={manejarTecnologia}
        fnUbicacion={manejarUbicacion}
        fnExperiencia={manejarExperiencia}
      />
      <section className='empleoContainer'>
        <ListaEmpleos data={empleosActuales} />
        <Pagination nroPaginas={NUMERO_DE_PAGINAS} paginaActual={pagina} fn={cambiarPag} />
      </section>
    </main>
  )
}
