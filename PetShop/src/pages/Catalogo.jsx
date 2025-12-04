import { BreadCrumb } from "../components/BreadCrumb.jsx"
import { Productos } from "../components/Productos.jsx"
import { Filtros } from "../components/Filtros.jsx" 
export function Catalogo(){
  return (
    <>
    <BreadCrumb 
      href={"/"} 
      padre={"Inicio"} 
      hijo={"Accesorios para perros"}/>
    <Filtros/>
    <Productos/>
    </>
  )
}