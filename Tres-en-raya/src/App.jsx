import { useState } from 'react'
import './App.css'
import { Celda } from './components/Celda'
export default function App() {
  const TURNOS = {equis:"x",circulo: "o"}
  const ESTADO_FINAL = {ganador: "Ganador", perdedor: "Perdedor", empate: "Empate", ninguno: "Ninguno"}
  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNOS.equis)
  const [ganador, setGanador] = useState(ESTADO_FINAL.ninguno)

  const manejarClick = (index) => {
    if (tablero[index]) return
    const newTablero=[...tablero]
    newTablero[index]=turno
    setTablero(newTablero)
    const nuevoTurno = turno === TURNOS.equis ? TURNOS.circulo : TURNOS.equis
    setTurno(nuevoTurno)
  }
  
  return (
    <main className="tablero">
      <h1>Tres en raya</h1>
      <section className="game">
        {
          tablero.map((value,i)=>(
            <Celda
              key={i} 
              index={i}
              value={value}
              updateEstado={manejarClick}
            >
              {i}
            </Celda>
          ))
        }
      </section>
      <section className="turno">
        <p>Turno de {turno}</p>

      </section>
    </main>
  )
}
