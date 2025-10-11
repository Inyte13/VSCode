// No funciona porque num++ retorna el valor antes de sumar, ++num retorna el valor después de sumar
// function incrementar(num){
//   return num++
// }

function incrementar(num){
  return ++num
}

function agregarArray(arr,value){
  return arr.push(value)
}