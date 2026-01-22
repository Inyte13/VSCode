const BASE_URL = 'https://www.omdbapi.com/?apikey=4287ad07&'
export const readPeliculas = async (search) => {
  const res = await fetch(`${BASE_URL}&s=${search}`)
  if (!res.ok) throw new Error('Error al traer películas')
  const { Search } = await res.json()
  return Search?.map(pelicula => ({
    id: pelicula.imdbID,
    title: pelicula.Title,
    year: pelicula.Year,
    poster: pelicula.Poster
  }))
}
