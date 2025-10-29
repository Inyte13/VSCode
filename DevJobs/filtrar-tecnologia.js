// Guardamos el select #filter-experiencia
const filterTecnologia=document.querySelector("#filter-technology")

filterTecnologia?.addEventListener("change",()=>{ // Cada vez que cambie la opción en el select
  const articles=document.querySelectorAll("article") // Guardamos los articles en una NodeList 
  const filterOption=filterTecnologia.value   // Guardamos el valor que eligió
  articles.forEach((article)=>{ // Los recorremos con forEach
    const arrTecnologia=article.querySelector(".empleo")?.getAttribute("data-tecnologia").split(",") // Guardamos el arr de data-tecnologia
    if(filterOption===""||arrTecnologia.includes(filterOption)){ // Si lo que eligió es vacío o lo encuentra dentro del arrTecnologia
      article.classList.remove("ocultar") // Removemos los que tenga "ocultar" rezagados de un filtro pasado
    }else{
      article.classList.add("ocultar") // Si no agregamos la clase "ocultar"
    }
  })
})