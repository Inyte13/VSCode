// Retorno implícito
let sumar=(x,y)=>x+y
console.log(sumar(8,9))

// Si solo es un parámetro, puede declararse sin paréntesis
let aLa2=x=>x*x
console.log(aLa2(9))

// Retorno explícito, retornando algo
let sum=(x,y)=>{return x+y}
console.log(sum(9,8))

// Retorno explícito, mostrando console.log
let saludo=()=>{console.log("Hola")}
saludo()

// Con un objeto literal, se debe englobar con () después de {} 
let crearPersona=(name,age)=>{return ({nombre: name, edad: age })}
console.log(crearPersona("Oriana", 19)) 