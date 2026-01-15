import { URL } from './config.js'

// fetch de todos los post indicando su title
// fetch(`${URL}/posts`)
//   .then(res => {
//     if (!res.ok) throw new Error('Error HTTP')
//     return res.json()
//   })
//   .then(data => {
//     data.forEach(post => console.log(post.title))  
//   })
//   .catch (err => {
//     console.log('Error', err.message)
//   })


export const getPosts = async (URL) => {
  try {
    const res = await fetch(`${URL}/posts`)
    if (!res.ok) throw new Error('Error HTTP')
    const data = await res.json()
    return data
  } catch (err) {
    console.error('Error', err.message)
  }
}

export const getPost = async (id) => {
  try {
    const res = await fetch(`${URL}/posts/${id}`)
    if (!res.ok) throw new Error('Error HTTP')
    const data = await res.json()
    return data
  } catch (err) {
    console.error(`Error`, err.message)
  }
}

export const getUser = async (id) => {
  try {
    const res = await fetch(`${URL}/users/${id}`)
    if (!res.ok) throw new Error('Error HTTP')
    const data = await res.json()
    return data
  } catch (err) {
    console.error('Error', err.message)
  }
}
