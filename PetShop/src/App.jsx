import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { Productos } from "./components/Productos.jsx"
import './App.css'
export default function App() {
  return (
    <>
    <Header/>
    <main>
      <Productos/>
    </main>
    <Footer/>
    </>
  )
}

