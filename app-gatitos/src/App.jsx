import './App.css'
import { useImg } from './hooks/useImg'
import { useWords } from './hooks/useWords'

export default function App () {
  const { words, actualizarWords } = useWords()
  const { img } = useImg({ words })

  const manejarClick = async () => {
    actualizarWords()
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
