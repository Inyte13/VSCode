import './ListPeliculas.module.css'

export default function ListPeliculas ({ peliculas }) {
  return (
    peliculas
      ? (
        <ul>
          {peliculas.map(pelicula => (
            <li key={pelicula.id}>
              <h3>{pelicula.title}</h3>
              <p>{pelicula.year}</p>
              <img src={pelicula.poster} alt={pelicula.title} />
            </li>
          ))}
        </ul>
        )
      : (
        <p>No se encontrarón películas</p>
        )
  )
}
