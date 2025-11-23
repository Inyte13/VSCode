import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { Home } from "./pages/Home.jsx"
import { Catalogo } from "./pages/Catalogo.jsx"
import { useRouter } from "./hooks/useRouter.jsx"
import './App.css'
export default function App() {
  // Custom hook para
  const {pathActual}=useRouter()
  
  let paginaActual=null
  if(pathActual==="/"){
    paginaActual=<Home/>
  }else if(pathActual==="/catalogo"){
    paginaActual=<Catalogo/>
  }
  return (
    <>
      <Header/>
      {paginaActual}
      <Footer/>
    </>
  )
}

