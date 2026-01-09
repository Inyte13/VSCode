import styles from './ListProductos.module.css'
import { ProductoCard } from './ProductoCard.jsx'
export function ListProductos ({ productos }) {
  return (
    <div className={styles.productos}>
      {
        productos.length === 0 && (
          <p style={{ textAlign: 'center', padding: '1rem' }}>No hay coincidencias</p>
        )
      }
      {
        productos.map(producto => (
          <ProductoCard
            key={producto.Id}
            descuento={producto.Descuento}
            diaLlegada={producto.DiaLlegada}
            producto={producto.Nombre}
            precioRegular={producto.PrecioRegular}
            precioVenta={producto.PrecioVenta}
            img={producto.UrlImagen}
          />
        ))
      }
    </div>
  )
}
