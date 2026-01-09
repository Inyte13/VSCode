import styles from './Filtros.module.css'
export function Filtros () {
  return (
    <div className={styles.card}>
      <h3>Filtros</h3>
      <div className={styles.toolbar}>
        <span>Ordenamiento</span>
        <div>
          <div className={styles.option}>Precio, menor a mayor</div>
          <div className={styles.option}>Precio, mayor a menor</div>
        </div>
      </div>
    </div>
  )
}
