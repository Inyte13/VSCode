import { useEffect, useRef, useState } from 'react'
import { useRouter } from './useRouter'

export function useFilters () {
  // Usamos useRef para la persistencia, donde la variable inicializada estará en 'current'
  const timeoutId = useRef(null)
  const [pagina, setPagina] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    const urlPag = params.get('pagina')
    return urlPag ? Number(urlPag) : 1
  })
  const cambiarPag = (page) => {
    setPagina(page)
  }

  const [inputText, setInputText] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('text') || ''
  })
  const manejarInputText = (e) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }
    timeoutId.current = setTimeout(() => {
      setInputText(e)
    }, 500)
    setPagina(1)
  }

  const [filtroTecnologia, setFiltroTecnologia] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('technology') || ''
  })
  const manejarTecnologia = (e) => {
    setFiltroTecnologia(e)
    setPagina(1)
  }

  const [filtroUbicacion, setFiltroUbicacion] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('type') || ''
  })
  const manejarUbicacion = (e) => {
    setFiltroUbicacion(e)
    setPagina(1)
  }
  const [filtroExperiencia, setFiltroExperiencia] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('level') || ''
  })
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

  const { navegarA } = useRouter()

  // useEffect
  useEffect(() => {
    const params = new URLSearchParams()
    if (inputText) params.append('text', inputText)
    if (filtroTecnologia) params.append('technology', filtroTecnologia)
    if (filtroUbicacion) params.append('type', filtroUbicacion)
    if (filtroExperiencia) params.append('level', filtroExperiencia)

    if (pagina > 1) params.append('pagina', pagina)
    const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname
    navegarA(newUrl)
  }, [inputText, filtroTecnologia, filtroUbicacion, filtroExperiencia, pagina, navegarA])

  // Para calcular el número de páginas, usando el total
  const NUMERO_DE_PAGINAS = Math.ceil(total / EMPLEOS_POR_PAGINA)

  return {
    empleos,
    loading,
    inputText,
    manejarInputText,
    manejarTecnologia,
    manejarUbicacion,
    manejarExperiencia,
    NUMERO_DE_PAGINAS,
    pagina,
    cambiarPag
  }
}
