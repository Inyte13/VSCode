import type { UsuarioCreate } from "./types.ts"

const usuario1: UsuarioCreate ={
  nombre: 'Luis',
  edad: 19,
  email: 'luisgardaz13@gmail.com',
  cargo: 'admin'
}

// COMPILACIÓN
// Con el readonly en el type, no se puedo modificar
// usuario1.nombre = 'Antonio'

// EJECUCIÓN
// const usuario1: Usuario = Object.freeze({
//   nombre: 'Luis',
//   edad: 19,
//   email: 'luisgardaz13@gmail.com'
// })

const usuario2: UsuarioCreate = {
  nombre: 'Cielo',
  edad: 20,
  cargo: 'user'
}
