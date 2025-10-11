// Podemos asignar con el valor de null
let age=null
console.log(age) // null

// Una función puede devolver null
function retornaNull(){
  return null
}
console.log(retornaNull()) // null

// En cambio cuando no definimos nada será undefined
let name
console.log(name) // undefined

// Una función que no hace nada devuelve undefined
function retornaUndefined(){
}
console.log(retornaUndefined()) // undefined
