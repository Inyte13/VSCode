const empleoList=document.querySelector(".empleo__list")
fetch("./data.json").then(function(response){return response.json()}).then((empleos)=>{
    empleos.forEach(empleo=>{
      const articulo=document.createElement("article")
      articulo.innerHTML=`
      <div class="empleo" data-nivel="${empleo.data.nivel}" data-tecnologia="${empleo.data.technology}">
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
  })