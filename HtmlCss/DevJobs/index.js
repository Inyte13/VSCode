// const btn=document.querySelector(".empleo__aplicar") // Nos da un elemento si no encuentra null
// const arrBtn=document.querySelectorAll(".empleo__aplicar") // Nos da arr si no encuentra arr vacío
// arrBtn.forEach(function(btn){
//   btn.addEventListener("click", function(){
//     btn.textContent="¡Aplicado!"
//     btn.classList.add("clickeado")
//     btn.disabled=true
//   })
// })

// Con un solo evento
const empleosList=document.querySelector(".empleo__list")
// ?: Optional chaining
empleosList?.addEventListener("click",function(click){
  const btn=click.target
  if(btn.classList.contains("empleo__aplicar")){
    btn.textContent="¡Aplicado!"
    btn.classList.add("clickeado")
    btn.disabled=true
  }
})