import { useEffect, useState } from "react"

export function useRouter(){
  const [rutaActual, setRuta]=useState(location.pathname)
  
  useEffect(()=>{
    const manejarCambio=()=>{
      setRuta(location.pathname)
    }
    addEventListener("popstate", manejarCambio)
    return()=>{
      removeEventListener("popstate", manejarCambio)
    }
  }, [])
  function navegarA(ruta){
    history.pushState({},"",ruta)
    dispatchEvent(new PopStateEvent("popstate"))
  }
  return {
    rutaActual,
    navegarA
  }
}