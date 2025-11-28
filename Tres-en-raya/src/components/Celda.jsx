import styles from './Celda.module.css'
export function Celda ({ children, index, updateEstado }) {
  const manejarClick = () => {
    updateEstado(index)
  }
  return (
    <div
      className={styles.celda}
      onClick={manejarClick}
    >
      <span>{children}</span>
    </div>
  )
}
