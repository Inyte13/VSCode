let btnColor=document.getElementsByClassName("btn__redondo")[0] // Guardo el btn__redondo del índice 0
let btnReset=document.getElementsByClassName("btn__redondo")[1] // Guardo el btn__redondo del índice 1
let img=document.getElementsByTagName("img") // Guardo los que tengan la etiqueta img

function colorAleatorio(){
  let hexadecimal="0123456789ABCDEF"
  let arrHexadecimal=[...hexadecimal] // Convierto el str a arr con spread
  var color="#"
  for(let i=0;i<6;i++){ // 6 veces porque #123456
    let random=Math.floor(Math.random()*16) // Número random [0,16]
    color+=arrHexadecimal[random] // Añado al color un aleatorio de mi arr
  }
  return color
}
function cambiarColor(){
  document.body.style.backgroundColor=colorAleatorio()
}
btnColor.addEventListener("click",event=>{cambiarColor()})
btnReset.addEventListener("click",event=>{
  document.body.style.backgroundColor="#191919"
  document.body.style.color="#fff"
})

