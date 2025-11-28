import { useEffect, useState } from 'react'
import './App.css'

export default function App () {
  const [activar, setActivar] = useState(false)
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('effect')
    const manejarMovimiento = (e) => {
      const { clientX, clientY } = e
      setPosicion({ x: clientX, y: clientY })
    }
    if (activar) {
      window.addEventListener('pointermove', manejarMovimiento)
    }
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', manejarMovimiento)
    }
  }, [activar])
  return (
    <main>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${posicion.x}px, ${posicion.y}px)`
        }}
      />
      <button
        onClick={() => setActivar(!activar)}
      >
        {!activar ? 'Activar' : 'Desactivar'} seguimiento de puntero
      </button>
    </main>
  )
}
