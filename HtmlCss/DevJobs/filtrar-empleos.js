// Guardamos el select #filter-location
const filtersSection=document.querySelector("#filter-location")

filtersSection?.addEventListener("change",function(){ // Cada vez que suceda un cambio...
  const filterOption=filtersSection.value   // Guardamos el valor que eligió
  const articles=document.querySelectorAll("article") // Guardamos los articles en una NodeList 
  articles.forEach(function(article){ // Los recorremos con forEach
    const lugar=article.querySelector(".empleo__lugar")?.getAttribute("data-value") // Guardamos el lugar si existe un empleo__lugar y obtenemos su data-value
    const isShow=filterOption===""||filterOption===lugar
    article.classList.toggle("ocultar",isShow===false) // La clase ocultar se muestra si isShow es false
    // if(filterOption===""||filterOption===lugar){
    //   article.classList.remove("ocultar")
    // }else{
    //   article.classList.add("ocultar")
    // }
  })
})

// Mas filtros (como "change", "click")

// const search=document.querySelector("#search")
// search.addEventListener("input",()=>{
//   console.log(search.value)
// })

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
