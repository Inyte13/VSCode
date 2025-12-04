import { useEffect, useState } from "react"

export function useRouter(){
  const [pathActual, setPath]=useState(location.pathname)
  useEffect(()=>{
    const manejarCambio=()=>{
      setPath(location.pathname)
    }
    addEventListener("popstate", manejarCambio)
    return()=>{
      removeEventListener("popstate", manejarCambio)
    }
  }, [])
  function navegarA(path){
    history.pushState({},"",path)
    dispatchEvent(new PopStateEvent("popstate"))
  }
  return {
    pathActual,
    navegarA
  }
}