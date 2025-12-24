import { useEffect, useRef, useState } from 'react'

export function useFilters () {
  // Usamos useRef para la persistencia, donde la variable inicializada estará en 'current'
  const [timeoutId] = useRef(null)
  const [pagina, setPagina] = useState(1)
  const cambiarPag = (page) => {
    setPagina(page)
  }

  const [inputText, setInputText] = useState('')
  const manejarInputText = (e) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }
    timeoutId.current = setTimeout(() => {
      setInputText(e)
    }, 500)
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

  const EMPLEOS_POR_PAGINA = 3

  const [empleos, setEmpleos] = useState([])

  // El total de empleos encontrados
  const [total, setTotal] = useState(0)

  // Para informar al usuario si se está cargando la petición
  const [loading, setLoading] = useState(true)

  // useEffect es necesario para hacer fetching de datos
  useEffect(() => {
    async function fetchEmpleos () {
      try {
        // Cambiamos el valor de loading en true
        setLoading(true)

        // Los query params
        const params = new URLSearchParams()
        if (inputText) params.append('text', inputText)
        if (filtroTecnologia) params.append('technology', filtroTecnologia)
        if (filtroUbicacion) params.append('type', filtroUbicacion)
        if (filtroExperiencia) params.append('level', filtroExperiencia)

        // Simulando la paginación
        const offset = (pagina - 1) * EMPLEOS_POR_PAGINA
        params.append('limit', EMPLEOS_POR_PAGINA)
        params.append('offset', offset)

        // Guardando todos los filtros
        const queryParams = params.toString()
        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
        const json = await response.json()
        setEmpleos(json.data)
        setTotal(json.total)
      } catch (error) {
        console.error('Error fetching json:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchEmpleos()
  }, [inputText, filtroTecnologia, filtroUbicacion, filtroExperiencia, pagina])

  // Para calcular el número de páginas, usando el total
  const NUMERO_DE_PAGINAS = Math.ceil(total / EMPLEOS_POR_PAGINA)

  return {
    empleos,
    loading,
    manejarInputText,
    manejarTecnologia,
    manejarUbicacion,
    manejarExperiencia,
    NUMERO_DE_PAGINAS,
    pagina,
    cambiarPag
  }
}
