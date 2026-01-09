import styles from './ProductoCard.module.css'
export function ProductoCard ({ descuento, diaLlegada, producto, precioRegular, precioVenta, img }) {
  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <a href='#'>
          <img src={img} width='200' height='200' alt='' />
        </a>
        <div>
          <span>-{descuento}%</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          <p>Oferta</p>
          <span>Recibelo {diaLlegada.toLowerCase()}</span>
        </div>
        <div className={styles.info}>
          <h3>
            <a href='#'>{producto}</a>
          </h3>
          <div className={styles.price}>
            <div>
              <span className={styles.visuallyHidden}>Precio regular</span>
              <s>S/ {precioRegular}</s>
            </div>
            <div>
              <span className={styles.visuallyHidden}>Precio de venta</span>
              <span>S/ {precioVenta}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
