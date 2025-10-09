// La variable var
function ejemploVar(){
  if(true){
    var x=10
  }
  console.log(x)
}
ejemploVar() // (10)

// Reasignación de var
var y=100
y=999
console.log(y) // (999)

// Redeclaración de var
var z="Hola"
var z="mundo"
console.log(z) // (mundo)

// La variable let
// function ejemploLet(){
//   if(true){
//     let x=10
//   }
//   console.log(x)
// }
// ejemploLet() // ERROR: x no esta definido

// Reasignación de let
let a=10
a=20
console.log(a)

// Redeclaración de let
// let b=19
// let b=20 // ERROR: Identificador 'b' ya ha sido declarado

// La variable const
// function ejemploConst(){
//   if(true){
//     let x=10
//   }
//   console.log(x)
// }
// ejemploConst() // ERROR: x no esta definido

// Reasignación de const
// const b=10
// b=20
// console.log(b) // ERROR: Asignación a variable constante

// Redeclaración de const
// const b=19
// const b=20 // ERROR: Identificador 'b' ya ha sido declarado