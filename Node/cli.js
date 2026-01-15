import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

// node cli.js === ls

// Acceder a los argumentos
process.argv
// [
//   'C:\\Users\\luisg\\AppData\\Local\\fnm_multishells\\8508_1768257957114\\node.exe',
//   'B:\\Node\\cli.js'
// ]

// 1. Carpeta elegida o actual
const carpeta = process.argv[2] ?? '.'

// 2. Formatear tamaños
const formatear = tamano => {
  if (tamano < 1024) return `${tamano} B`
  return `${(tamano / 1024).toFixed(2)} KB`
}

// 3. Leer los nombres de los archivos
const archivos = await readdir(carpeta)

// 4. Recuperar la info de los archivos/carpetas
const entradas = await Promise.all(
  archivos.map(async name => {
    const path = join(carpeta, name)
    const informacion = await stat(path)

    return {
      name,
      isCarpeta: informacion.isDirectory(),
      size: formatear(informacion.size)
    }
  })
)

for (const entrada of entradas) {
  const tamano = entrada.isCarpeta ? '-' : `${entrada.size}`
  console.log(`${entrada.name.padEnd(30)}  ${tamano}`)
}

