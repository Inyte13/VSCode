import { useEffect, useState } from 'react'
import { fetchImg } from '../services/words'

export function useImg ({ words }) {
  const [img, setImg] = useState('')
  useEffect(() => {
    if (!words) return
    fetchImg(words).then(url => setImg(url))
  }, [words])
  return { img }
}
