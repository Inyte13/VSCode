import styles from "./ListaTrabajos.module.css"
import { EmpleoCard } from "./EmpleoCard"
export function ListaTrabajos({data}){
  return (
    <>
      <h2>Resultados de búsqueda</h2>
      <div className={styles.lista}>
        {data.map(empleo=>(
          <EmpleoCard key={empleo.id}empleo={empleo}/>
        ))}
      </div>
    </>
  )
}