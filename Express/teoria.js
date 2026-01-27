// Para que sea REST (reglas a seguir)
// 1. Mismo path, diferente metodo
// 2. No puedes llamar a un metodo dentro de otro

// Middlewares
app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString()
  console.log(`[${time}] ${req.method} ${req.url}`)
  next()
})

// '/ab{c}d', el c es opcional
// '/bb*bb', puede ir cualquier cosa en el comodín
// Para rutas más largas que no sabes como terminan
// '/file/*filename
app.get('/health', (req, res) => {
  return res.json({
    status: 'ok',
    uptime: process.uptime()
  })
})

// models: Lógica de datos, comunicación con bd
// view: Lo que devolvemos al cliente
// controller: Intermediario