import { mkdir, readFile, writeFile } from 'node:fs/promises'
// :fs = File system
import { join, basename, extname } from 'node:path'

let contenido = ''
if (process.permission.has('fs.read', 'archivo.txt')) {
  contenido = await readFile('archivo.txt', 'utf-8')
  console.log(contenido)
} else {
  console.log('No tienes permiso para leer el archivo')
}

const directorio = join('salida', 'files', 'documents')
if (process.permission.has('fs.write', 'salida/files/documents')) {
  // const contenido = await readFile('archivo.txt') // En bytes
  
  // join:  Escribir un path sin definir / o \
  // const directorio = 'salida/files/documents'
  await mkdir(directorio, { recursive: true })
  
  const uppercaseContenido = contenido.toUpperCase()
  
  const path = join(directorio, 'archivo-uppercase.txt')
  const extension = extname(path)
  const name = basename(path)
  await writeFile(path, uppercaseContenido)
} else {
  console.log(`No tienes permiso para escribir en el directorio ${directorio}`)
}
