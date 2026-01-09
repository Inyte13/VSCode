import { ListProductos } from '../components/ListProductos.jsx'
import { Filtros } from '../components/Filtros.jsx'
import styles from './Catalogo.module.css'
import { useEffect, useState } from 'react'

export default function Catalogo () {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchProductos () {
      try {
        setLoading(true)
        const response = await fetch('https://aplicacionwebempresarial-production.up.railway.app/api/products')
        if (!response.ok) throw new Error('Error al cargar los productos')
        const data = await response.json()
        setProductos(data)
      } catch (error) {
        console.error('Error fetching Productos:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProductos()
  }, [])
  return (
    <>
      <main className={styles.main}>
        <Filtros />
        <ListProductos productos={productos} loading={loading} />
      </main>
    </>
  )
}
