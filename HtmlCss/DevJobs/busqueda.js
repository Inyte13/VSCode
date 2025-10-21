let busqueda=document.querySelector("#search")
let empleos=[]
fetch("./data.json").then((response)=>{return response.json()}).then(function(data){empleos=data})
busqueda.addEventListener("input",function(){
  let inputActual=busqueda.value.toLowerCase()
  
    const resultados=empleos.filter((actual)=>{
      return actual.titulo.toLowerCase().includes(inputActual)
    })
    console.log(resultados)
})
