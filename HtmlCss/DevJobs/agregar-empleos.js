const empleoList=document.querySelector(".empleo__list") // Guardamos el div vacío que contendrá a todos los empleos
const busqueda=document.querySelector("#search")
fetch("./data.json")
  .then((response)=>{return response.json()})
  .then((empleos)=>{
    empleos.forEach(empleo=>{
      const articulo=document.createElement("article")
      articulo.setAttribute("data-id", empleo.id)
      articulo.innerHTML=`
      <div class="empleo" data-nivel="${empleo.data.nivel}" data-tecnologia="${empleo.data.technology.join(",")}">
        <div class="empleo__column1">
          <header>
            <h3 class="empleo__title">${empleo.titulo}</h3>
            <p class="empleo__empresa">${empleo.empresa} | <span data-lugar="${empleo.data.ubicacion}" class="empleo__lugar">${empleo.ubicacion}</span></p>
          </header>
          <p class="empleo__descripcion">${empleo.descripcion}</p>
        </div>
        <div class="empleo__column2">
          <button class="empleo__aplicar" >Aplicar</button>
        </div>
      </div>`
      empleoList.appendChild(articulo)
    })
    
    busqueda.addEventListener("input",function(){
      let articles=document.querySelectorAll("article")
      let inputActual=busqueda.value.toLowerCase()
      const resultados=empleos.filter((actual)=>{
        return actual.titulo.toLowerCase().includes(inputActual)
      })
      articles.forEach(a=>{a.classList.add("ocultar")})
      resultados.forEach(r=>{
        const articuloSeleccionado=document.querySelector(`[data-id="${r.id}"]`)
        if(articuloSeleccionado!==null){
          articuloSeleccionado.classList.remove("ocultar")
        }
      })
      console.log(resultados)
    })
})