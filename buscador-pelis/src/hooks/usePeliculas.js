import { useCallback, useMemo, useRef, useState } from 'react'
import { readPeliculas } from '../services/pelisServices'

export function usePeliculas (search, ordenar) {
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(false)
  const busquedaPrevia = useRef(search)

  // useCallback es el useMemo para funciones
  const traerPeliculas = useCallback(async (search) => {
    if (search === busquedaPrevia.current) return
    try {
      if (!search) return
      setLoading(true)
      busquedaPrevia.current = search
      const data = await readPeliculas(search)
      setPeliculas(data)
    } catch (err) {
      console.error('Error al traer las películas', err)
    } finally {
      setLoading(false)
    }
  }
  , [])
  // Como un fx condicionada
  const peliculasOrdenadas = useMemo(() => {
    return ordenar
      ? [...peliculas].sort((a, b) => a.title.localeCompare(b.title))
      : peliculas
  }, [ordenar, peliculas])
  return { peliculas: peliculasOrdenadas, loading, traerPeliculas }
}
