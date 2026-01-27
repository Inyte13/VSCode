import cors from 'cors'

// Sin la dependencia 'cors'
// res.header('Access-Control-Allow-Origin', 'http://localhost:5174')

// Con la dependencia cors
// 1. Si no se especifica es * 
//  app.use(cors())
// 2. Controlado
const URL_ACEPTADAS = [
  'http://localhost:5174'
]
// Creamos la urlAceptadas como parámetro para que sea testeable
export const corsMiddleware = ({ urlAceptadas = URL_ACEPTADAS} = {}) => {
  return cors({
    origin: (origin, callback) => {
      if (urlAceptadas.includes(origin) || !origin) {
        // null en el primer parámetro por que es el campo de los errores
        return callback(null, true)
      }
      return callback(new Error('Origen no permitido'))
    }
  }) 
}