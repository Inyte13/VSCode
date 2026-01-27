import { test, describe, before, after } from 'node:test'
import assert from 'node:assert'
import app from './app.js'

let server
const PORT = 7777
const URL_BASE = `http://localhost:${PORT}`

// Antes de los tests para levantar el server
before(async () => {
  return new Promise((resolve, reject) => {
    server = app.listen(PORT, () => resolve())
    server.on('Error', reject) 
  })
})

describe('GET/trabajos', () => {
  test('debe responder con 200 y un array de trabajos', async () => {
    const res = await fetch(`${URL_BASE}/trabajos`)
    assert.strictEqual(res.status, 200) // Es lo mismo que decir res.status === 200
    const json = await res.json()
    assert.ok(Array.isArray(json.data), 'La respuesa debe ser un array') // Si lo de dentro es truthy
  }) 
})

test('debe filtras trabajos por tecnología', async () => {
  const tecnologia = 'react'
  const res = await fetch(`${URL_BASE}/trabajos?technology=${tecnologia}`)
  assert.strictEqual(res.status, 200)
  const json = await res.json()
  assert.ok(json.data.every(trabajo => trabajo.data.technology.includes(tecnologia)),`Todos los trabajos deben incluir la tecnología ${tecnologia}`)
})

// Después de los tests para cerrar el server
after(async () => {
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) return reject(err)
      resolve()
    })
  })
})