import { useEffect, useState } from 'react'
import { fetchWords } from '../services/words'

export function useWords () {
  const [words, setWords] = useState('')
  const actualizarWords = () => {
    fetchWords().then(words => setWords(words))
  }
  useEffect(() => {
    actualizarWords()
  }, [])
  return { words, actualizarWords }
}
