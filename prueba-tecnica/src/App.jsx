import { useEffect, useState } from 'react'

export default function App () {
  const [hecho, setHecho] = useState()
  // Por qué un useEffect?
  // re: porque sino haría un fetch cada vez que se renderiza
  //     componente y ese fetch tambien settearia mi hecho
  //     haciendo un loop infinito
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json()) // La respuesta la transformamos a json
      .then(data => {
        const fact = data.fact
        // Lo mismo que escribir esto:
        // const { fact } = data
        // o así:
        // const { fact: hecho } = data
        setHecho(fact)
        const primerasPalabras = fact.split(' ').slice(0, 3).join(' ')
        // Lo mismo que escribir esto:
        // const primerasPalabras = fact.split(' ', 3).join(' ')
        console.log(primerasPalabras)
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {hecho && (<p>{hecho}</p>)}
    </main>
  )
}
