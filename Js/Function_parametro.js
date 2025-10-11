// Funciones declaradas como una expresión
const saludo=function(name){ // A saludo le asigno una función anonima
  console.log(`Hola ${name}`)
}
// Creo una función que use una función como parámetro
function generarSaludo(f){
  const names=["María", "Oriana", "Camila", "Victoria"]
  for(let n of names){
    f(n)
  }
}
generarSaludo(saludo)