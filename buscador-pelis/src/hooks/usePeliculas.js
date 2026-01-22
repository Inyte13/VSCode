import { useRef, useState } from 'react'
import { readPeliculas } from '../services/pelisServices'

export function usePeliculas (search) {
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(false)
  const busquedaPrevia = useRef(search)

  const traerPeliculas = async () => {
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
  return { peliculas, loading, traerPeliculas }
}
