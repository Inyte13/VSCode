import { useEffect } from 'react'
import './App.css'

export default function App() {
  const [value, setValue] = useEffect(false)

  useEffect(() => {
    
  }) // Las dependencias son opcionales
  // }) si no colocas nada se usara cada vez que se renderice
  // }, []) si colocas un arr como mínimo se ejecuta 1 vez 

  return (
    <>
    </>
  )
}

