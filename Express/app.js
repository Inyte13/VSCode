import express from 'express'
import { DEFAULTS } from './config.js'
import { corsMiddleware } from './middlewares/cors.js'
import { trabajosRouter } from './routes/trabajosRouter.js'

const PORT = process.env.PORT ?? DEFAULTS.PORT
const app = express()

app.use(corsMiddleware())
// Para hacer el post
app.use(express.json())

app.use('/trabajos', trabajosRouter)

// Para vercel: 
// npm i -g vercel
// vercel login
// vc deploy

// NODE_ENV
// node app.js : Por default usa undefined = development
// NODE_ENV=production node app.js : Indicamos explicitamente el production
// NODE_ENV=test node --test app.test.js : Para hacer los tests 

if (!process.env.NODE_ENV) {
  app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`)
  })
}

export default app