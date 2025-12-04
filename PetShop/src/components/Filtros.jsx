import styles from "./Filtros.module.css"
export function Filtros(){
  return (
    <div className={styles.card}>
      <h3>Filtros</h3>
      <div className={styles.toolbar}>
        <span>Ordenamiento</span>
        <div className={styles.options}>
          <div className={styles.option}>Más vendidos</div>
          <div className={styles.option}>Precio, menor a mayor</div>
          <div className={styles.option}>Precio, mayor a menor</div>
        </div>
      </div>
      <form>
        <div className={styles.filter}>
          <span>Uso</span>
          <ul>
            <li>
              <div>
                <input type="checkbox"/>
              </div>
              <span>Exterior</span>
            </li>
          </ul>
        </div>
        <div className={styles.filter}>
          <span>Tipo de producto</span>
          <ul>
            <li>
              <div>
                <input type="checkbox"/>
              </div>
              <span>Individual</span>
            </li>
          </ul>
        </div>
      </form>
    </div>
  )
}