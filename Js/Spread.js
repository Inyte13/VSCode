// Copiar arrays
let numeros=[0,1,2,3,4]
let copiaNumeros=[...numeros]

// Copiar objetos
let persona={name: "Oriana", id: "19202006"}
let copiaPersona={...persona}

// Unir arrays
let array1=[0,1,2]
let array2=[3,4,5]
let unir=[...array1,...array2]

// Pasar argumentos a una función
function suma(a,b,c){
  return a+b+c
}
console.log(suma(...array1)) // (3)

// Convertir str a array
let str="Oriana"
console.log([...str]) // ([ 'O', 'r', 'i', 'a', 'n', 'a' ])
