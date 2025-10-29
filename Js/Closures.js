let contador=()=>{
  let valor=0
  return {
    incrementar(num){
      return valor+=num
    },
    valorActual(){
      return valor
    }
  }
}

const c = contador()
c.incrementar(12)
console.log(c.valorActual()) // 12
