// Pasando valor
function incrementar(num){
  // return num++  NO FUNCIONA CON ++ porque (num=num+1) entonces devuelve primero num
  return num+1
}
let num=5
let num2=incrementar(num)
console.log(num)
console.log(num2)

// Pasando por referencia
function agregarArray(arr,value){
  arr.push(value)
  return arr
}
let array=[0,1,2,3,4,5]
agregarArray(array,6)
console.log(array)