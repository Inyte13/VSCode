import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isPrimerInput = useRef(true)

  useEffect(() => {
    if (isPrimerInput.current) {
      isPrimerInput.current = search === ''
      return
    }
    if (search === '') {
      setError('El campo no debe estar vacío')
      return
    }
    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
