import express from 'express'

const PORT = process.env.PORT ?? 3000
const app = express()

trabajos = [
  { id: 1, title: 'Desarrollador Frontend' },
  { id: 2, title: 'Desarrollador Backend' },
  { id: 3, title: 'Desarrollador Fullstack' }
] 
// Middleware
app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString()
  console.log(`[${time}] ${req.method} ${req.url}`)
  next()
})
// Tiene que ir en orden req, res
app.get('/', (req, res) => {
  // Automaticamente reconoce el Content-Type
  res.send('Hola express')
})

app.get('/trabajos', (req, res) => {
  res.json(trabajos)
})

app.get('/trabajo/:id', (req, res) => {
  const { id } = req.params
  res.json({
    
  })
})

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime()
  })
})  

app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`)
})

