export const fetchWords = async () => {
  const res = await fetch('https://catfact.ninja/fact')
  const data = await res.json()
  const { fact } = data
  return fact.split(' ', 3).join(' ')
}

export const fetchImg = async (words) => {
  const res = await fetch(`https://cataas.com/cat/says/${words}?size=50&color=red&json=true`)
  const data = await res.json()
  return data.url
}
