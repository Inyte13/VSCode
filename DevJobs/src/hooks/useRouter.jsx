import { useEffect, useState } from "react"

// Para un hook personalizado, es necesario el prefijo "use"
export function useRouter() {

  // Definimos el estado inicial con la ruta actual
  const [ pathActual, setPath ] = useState(window.location.pathname) 
  
  useEffect(() => {
    const manejarCambioUbicacion = () => {
      setPath(window.location.pathname)
    }
    // El popstate se dispara cuando el usuario navega a través del historial (atrás o adelante)
    window.addEventListener('popstate', manejarCambioUbicacion) 
    // Fx cleanup: IMPORTANT!
    return () => {
      window.removeEventListener('popstate', manejarCambioUbicacion)
    }
  }, [])

  function navegarA(path) {
    // 1. pushState cambia la URL en la barra de direcciones pero es silencioso (no dispara eventos)
    history.pushState({}, '', path)

    // 2. Lanzo manualmente el evento popstate para que el useEffect de arriba se entere y actualice el estado
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  return {
    pathActual,
    navegarA
  }
}