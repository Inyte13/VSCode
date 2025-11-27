import { Celda } from "./Celda"

export function MenuGanador({ganador, resetGame}) {
  if (ganador === null) return null
  return (
    <section className="ganador">
      <div className="text">
        <h2>
          {ganador === false ? "Empate" : "Ganó: "}
        </h2>
        <header className="win">
          {ganador && <Celda>{ganador}</Celda>}
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}