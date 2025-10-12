function time(){
  let ahora=new Date()
  let hora=ahora.getHours()
  let min=ahora.getMinutes()
  let sec=ahora.getSeconds()
  console.log(`${hora}:${min}:${sec}`)
}

  // setInterval, ejecutar una fx repetidamente con un intervalo (ms)
  let idRepeticiones=setInterval(time,1000)

  // setTimeout, ejecuta la fx, y lo detiene despues de unos (ms) 
  setTimeout(() => { 
    clearInterval(idRepeticiones)
  }, 5000);