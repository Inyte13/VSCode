// Arrays
const numeros=[0,1,2,3,4]
console.log(numeros[5]) // (undefined)
numeros[1]=7 // Sobreescribe 1, el del índice 1
numeros.push(5)
console.log(numeros) // ([ 0, 7, 2, 3, 4, 5 ])
const arregloMixto=["Holi", 19, true, null, {fotolove: "Sara"}]
