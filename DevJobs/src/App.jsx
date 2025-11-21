import {Header} from "./components/Header.jsx"
import {Footer} from "./components/Footer.jsx"
import {Home} from "./pages/Home.jsx"
import {Busqueda} from "./pages/Busqueda.jsx"

const pathActual=window.location.pathname
let paginaActual=null
if(pathActual==="/"){
  paginaActual=<Home/>
}else if(pathActual==="/busqueda"){
  paginaActual=<Busqueda/>
}


export default function App() {
  return (
    <>
      <Header />
      {paginaActual}
      <Footer/>
    </>
  )
}

