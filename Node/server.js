import { createServer } from 'node:http'
import { json } from 'node:stream/consumers'
import { randomUUID } from 'node:crypto'
// Para usar el port del .env
process.loadEnvFile()
const port = process.env.PORT ?? 3000

function enviarJson(response, status, data) {
  response.statusCode = status
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.end(JSON.stringify(data))
}

const users = [
  { id: 1, name: 'Cielo'},
  { id: 2, name: 'Luis'},
  { id: 3, name: 'midudev'}
]

const server = createServer(async (request, res) => {
  const { method, url } = request
  const [path, queryStr] = url.split('?')
  const searchParams = new URLSearchParams(queryStr)
  if (method === 'GET') {
    if (path === '/user') {
      const limit = Number(searchParams.get('limit')) || users.length
      // Si tengo limit=2, recupera el 2
      const offset = Number(searchParams.get('offset')) || 0
      const paginar = users.slice(offset, offset + limit)
      return enviarJson(res, 200, paginar)
    }
    if (path === '/health') {
      return enviarJson(res, 200, { status : 'ok', uptime: process.uptime() })
    }
  }
  if (method === 'POST') {
    if (path === '/user') {
      // Convertimos a json el request
      const body = await json(request)
      if (!body || !body.name) {
        return enviarJson(res, 400, { message: 'Name es requerido' })
      }
      const newUser = {
        name: body.name,
        id: randomUUID()
      }
      users.push(newUser)
      return enviarJson(res, 201, { message: 'Usuario creado' })
    }
  }
  return enviarJson(res, 404, { message: 'Not found' })
})

server.listen(port, () => {
  console.log(`Servidor levantado en http://localhost:${port}`)
})
// Para que se actualice automáticamente
// node --watch server.js 