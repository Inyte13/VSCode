// createElement, recibe como parámetro una etiqueta html
let btn=document.createElement("button") 
btn.className="btn__redondo"
btn.innerText="Botón creado con js"
document.body.append(btn)

// createDocumentFragment, para varios elementos
let urls=["./Images/robot1.png", "./Images/robot2.png", "./Images/robot3.png"]
let galeria=document.getElementsByClassName("galeria")[0]
let fragmento=document.createDocumentFragment()
for(let i in urls){
  let img=document.createElement("img")
  img.src=urls[i]
  img.ariaLabel=`robot${parseInt(i)+1}`
  fragmento.appendChild(img)
}
galeria.append(fragmento)

// cloneNode
document.body.append(galeria.cloneNode(true)) // true (incluye nodos hijos, todo lo que está dentro)
document.body.append(galeria.cloneNode(false)) // false (solo copia el elemento en si, nada de lo que esta dentro)

// createTextNode, crea texto suelto
document.body.append(document.createTextNode("Creado con js"))