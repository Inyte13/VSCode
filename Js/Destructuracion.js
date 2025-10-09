// Destructuración de arrays
const numeros=[0,1,2,3,4]
let[,uno,dos,,cuatro]=numeros
console.log(cuatro)

// Destructuración de Objetos
const usuario={name: "Oriana", age: 19, smash: true}
let{name,age,smash}=usuario // El nombre de las variables debe ser el mismo 
console.log(name)

let{name: nombre,age: edad, smash: leDoy}=usuario
console.log(leDoy)