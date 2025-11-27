import { useState } from 'react'
import { Celda } from './components/Celda'
import { TURNOS, COMBOS_GANADORES } from './enum'
import confetti from "canvas-confetti"
import { MenuGanador } from './components/MenuGanador'
import './App.css'

// useEffect es: ejecutar codigo cuando el se monta el componente y también cuando cambia las dependencias

export default function App() {
  const [tablero, setTablero] = useState(() => {
    const tableroEnStorage = localStorage.getItem("tablero") // Solo hacerlo una vez, por que es muy lento
    return tableroEnStorage ? JSON.parse(tableroEnStorage) : Array(9).fill(null)
  })
  const [turno, setTurno] = useState(() => {
    const turnoEnStorage = localStorage.getItem("turno")
    return turnoEnStorage ?? TURNOS.equis
  })
  const [ganador, setGanador] = useState(null)

  const verificarGanador = (newTablero) => {
    for (const combo of COMBOS_GANADORES) {
      const [a, b, c] = combo
      if (
        newTablero[a] &&
        newTablero[a] === newTablero[b] &&
        newTablero[a] === newTablero[c] 
      ) {
        return newTablero[a]
      }
    }
    return null
  }

  const manejarClick = (index) => {
    if (tablero[index] || ganador) return
    const newTablero=[...tablero]
    newTablero[index]=turno
    setTablero(newTablero)
    const nuevoTurno = turno === TURNOS.equis ? TURNOS.circulo : TURNOS.equis
    setTurno(nuevoTurno)

    localStorage.setItem("tablero", JSON.stringify(newTablero))
    localStorage.setItem("turno", nuevoTurno)

    const newGanador = verificarGanador(newTablero)
    if (newGanador !== null) {
      confetti()
      setGanador(newGanador)
    } else if (!newTablero.includes(null)) {
      setGanador(false)
    }
  }

  useEffect

  const resetGame = () => {
    setTablero(Array(9).fill(null))
    setTurno(TURNOS.equis)
    setGanador(null)
    localStorage.removeItem("tablero")
    localStorage.removeItem("turno")
  }
  
  return (
    <main>
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Resetar el juego</button>
      <section className="game">
        {
          tablero.map((value,i)=>(
            <Celda
              key={i} 
              index={i}
              value={value}
              updateEstado={manejarClick}
            >
              {value}
            </Celda>
          ))
        }
      </section>
      <section className="turno">
        <p>Turno de {turno}</p>
      </section>
      <MenuGanador ganador={ganador} resetGame={resetGame}/>
    </main>
  )
}
