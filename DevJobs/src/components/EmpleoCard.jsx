import styles from "./EmpleoCard.module.css"
export function EmpleoCard({empleo}){
  return(
    <article className={styles.empleoCard} data-id={empleo.id}>
      <div className={styles.empleo} data-nivel={empleo.data.nivel} data-tecnologia={empleo.data.technology.join(",")}>
        <div className={styles.empleoColumn1}>
          <header>
            <h3>{empleo.titulo}</h3>
            <p>
              {empleo.empresa} | <span data-lugar={empleo.data.ubicacion}>{empleo.ubicacion}</span>
            </p>
          </header>
          <p>{empleo.descripcion}</p>
        </div>
        <div className={styles.empleoColumn2}>
          <button>Aplicar</button>
        </div>
      </div>
    </article>
  )
}