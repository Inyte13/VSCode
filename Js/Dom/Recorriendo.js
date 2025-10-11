function recorrerElementos(elemento){
  console.log(elemento.tagName)
  for(let element of elemento.children){
    recorrerElementos(element)
  }
}
recorrerElementos(document.body)