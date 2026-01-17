import { useEffect, useState } from 'react'
import './App.css'
import { fetchWords } from './services/words'
import { useImg } from './hooks/useImg'

export default function App () {
  const [words, setWords] = useState('')
  const { img } = useImg({ words })

  useEffect(() => {
    fetchWords().then(words => setWords(words))
  }, [])

  const manejarClick = async () => {
    setWords(await fetchWords())
  }

  return (
    <main>
      {
        words && <h1>{words}</h1>
      }
      {
        img && <img src={img} />
      }
      <button onClick={manejarClick}>Resetear</button>
    </main>
  )
}
