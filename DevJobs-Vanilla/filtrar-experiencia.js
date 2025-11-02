// Guardamos el select #filter-experiencia
const filterExperience=document.querySelector("#filter-experience")

filterExperience?.addEventListener("change",()=>{ // Cada vez que cambie la opción en el select
  const articles=document.querySelectorAll("article") // Guardamos los articles en una NodeList 
  const filterOption=filterExperience.value   // Guardamos el valor que eligió
  articles.forEach((article)=>{ // Los recorremos con forEach
    const experiencia=article.querySelector(".empleo")?.getAttribute("data-nivel") // Guardamos el data-nivel
    if(filterOption===""||filterOption===experiencia){ // Si lo que eligió es vacío o igual al data-lugar
      article.classList.remove("ocultar") // Removemos los que tenga "ocultar" rezagados de un filtro pasado
    }else{
      article.classList.add("ocultar") // Si no agregamos la clase "ocultar"
    }
  })
})