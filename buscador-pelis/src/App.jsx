import './App.css'

export default function App () {
  return (
    <div>
      <header>
        <h1>Buscador de películas</h1>
        <form>
          <input placeholder='Django, Maltidos Bastardos, Avengers' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        Aquí se mostrarán los resultados
      </main>
    </div>
  )
}
