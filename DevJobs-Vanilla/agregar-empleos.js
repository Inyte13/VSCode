const empleoList=document.querySelector(".empleo__list") // Guardamos el div vacío que contendrá a todos los empleos
const busqueda=document.querySelector("#search") // Guardamos el input, con id="search"
fetch("./data.json")
  .then(response=>response.json())
  .then(empleos=>{
    empleos.forEach(empleo=>{
      const articulo=document.createElement("article") // Creamos un <article>
      articulo.setAttribute("data-id", empleo.id) // Al <article> le asignamos data-id="empleo.id"
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
      empleoList.appendChild(articulo) // Al final agregamos el article
    })
    
    busqueda.addEventListener("input",()=>{ // Escuchará cada vez que borre o inserte algo en el input
      const articles=document.querySelectorAll("article") // Guardará una nodeList de todos los <article>
      const inputActual=busqueda.value.toLowerCase() // Guardamos el valor del input actual y lo convertimos a lowercase
      const resultados=empleos.filter(actual=>{ // Recorremos todos los empleos
        return actual.titulo.toLowerCase().includes(inputActual) // Si en el titulo de cada empleo(lowercase) encontramos el inputActual, entrará en el arr que retornaremos
      })
      articles.forEach(a=>{a.classList.add("ocultar")}) // Cuando haga algún cambio, ocultaremos todos los articles
      resultados.forEach(r=>{
        const articuloSeleccionado=document.querySelector(`[data-id="${r.id}"]`) // Guardaremos el id único de los que si coincidan
        articuloSeleccionado.classList.remove("ocultar") // A cada resultado se le quita la clase ocultar
      })
    })
})