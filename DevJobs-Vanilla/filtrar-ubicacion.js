// Guardamos el select #filter-ubicacion
const filterUbicacion=document.querySelector("#filter-ubicacion")

filterUbicacion?.addEventListener("change",()=>{ // Cada vez que cambie la opción en el select
  const articles=document.querySelectorAll("article") // Guardamos los articles en una NodeList 
  const filterOption=filterUbicacion.value   // Guardamos el valor que eligió
  articles.forEach((article)=>{ // Los recorremos con forEach
    const lugar=article.querySelector(".empleo__lugar")?.getAttribute("data-lugar") // Guardamos el lugar si existe un empleo__lugar y obtenemos su data-value
    if(filterOption===""||filterOption===lugar){ // Si lo que eligió es vacío o igual al data-lugar
      article.classList.remove("ocultar") // Removemos los que tenga "ocultar" rezagados de un filtro pasado
    }else{
      article.classList.add("ocultar") // Si no agregamos la clase "ocultar"
    }
  })
})

// Mas filtros (como "change", "click")

// search.addEventListener("blur", ()=>{
//   console.log("Se perdió el foco")
// })

// const formSearch=document.querySelector(".hero__search")
// formSearch.addEventListener("submit",function(event){
//   event.preventDefault
//   console.log("enviado")
// })

// document.addEventListener("keydown",(event)=>{
//   console.log(event.key)
// })
