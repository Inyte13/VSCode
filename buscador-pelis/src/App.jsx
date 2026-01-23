import { useRef, useState } from 'react'
import './App.css'
import ListPeliculas from './components/ListPeliculas'
import { usePeliculas } from './hooks/usePeliculas'
import { useSearch } from './hooks/useSearch'

export default function App () {
  // useRef
  // const inputRef = useRef()
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const { value } = inputRef.current
  //   console.log(value)
  // }

  // JS puro, necesita el name en el input
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const fields = new window.FormData(e.target)
  //   console.log(fields.get('busqueda'))
  // }

  // Para varios inputs, obvio no varios useRef
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const fields = Object.fromEntries(new window.FormData(e.target))
  //   console.log(fields) // {busqueda1: 'avengers', busqueda2: 'Django'}
  // }
  const { search, setSearch, error } = useSearch()
  const [ordenar, setOrdenar] = useState(false)
  const { peliculas, traerPeliculas, loading } = usePeliculas(search, ordenar)
  const timeout = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    traerPeliculas(search)
  }
  const handleCambio = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      traerPeliculas(newSearch)
    }, 500)
  }
  const handleOrdenar = () => {
    setOrdenar(!ordenar)
  }
  return (
    <div className='content'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleCambio} value={search} placeholder='Django, Maltidos Bastardos, Avengers' />
          <input type='checkbox' onChange={handleOrdenar} />
          <button type='submit'>Buscar</button>
        </form>
        {error && (<p style={{ color: '#f00' }}>{error}</p>)}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <ListPeliculas peliculas={peliculas} />}

      </main>
    </div>
  )
}
