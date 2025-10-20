// const btn=document.querySelector(".empleo__aplicar") // Nos da un elemento si no encuentra null
// const arrBtn=document.querySelectorAll(".empleo__aplicar") // Nos da NodeList, si no encuentra arr vacío
// arrBtn.forEach(function(btn){
//   btn.addEventListener("click", function(){
//     btn.textContent="¡Aplicado!"
//     btn.classList.add("clickeado")
//     btn.disabled=true
//   })
// })

// EVENT BUBBLING
const empleosList=document.querySelector(".empleo__list")
// ?: Optional chaining, solo se ejecuta si encuentra .emplo__list existe (no es null ni undefined)
empleosList?.addEventListener("click",function(eventoClick){
  const btn=eventoClick.target // Guardamos el elemento que recibe el eventoClick
  if(btn.classList.contains("empleo__aplicar")){
    btn.textContent="¡Aplicado!"
    btn.classList.add("clickeado")
    btn.disabled=true
  }
})