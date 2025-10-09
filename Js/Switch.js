let fruta="manzana"
let color
switch(fruta){
  case "manzana":
  case "cereza":
    color="rojo"
    break
  case "banana":
    color="amarillo"
    break
  case "uva":
    color="violeta"
  default:
    color="desconocido"
}
console.log(`El color de la ${fruta} es ${color}`)
