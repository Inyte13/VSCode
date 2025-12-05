import {Header} from "./components/Header.jsx"
import {Footer} from "./components/Footer.jsx"
import {Home} from "./pages/Home.jsx"
import {Busqueda} from "./pages/Busqueda.jsx"
import { useRouter } from "./hooks/useRouter.jsx"

export default function App() {
  // Custom hook para
  const { pathActual } = useRouter()
  
  let paginaActual = null
  if (pathActual === "/") {
    paginaActual=<Home/>
  } else if (pathActual==="/busqueda") {
    paginaActual=<Busqueda/>
  }
  return (
    <>
      <Header />
      {paginaActual}
      <Footer/>
    </>
  )
}

