import { Link } from './Link'
import styles from './Header.module.css'
import { NavLink } from 'react-router'
import { useAuthStore } from '../store/authStore'
export function Header () {
  // Importamos desde el context
  const { isLogueado, login, logout } = useAuthStore()
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href='/'>
          <img src='/public/devjobs.png' alt='DevJobs logo' width='50' />
        </Link>
        <h1><Link href='/'>DevJobs</Link></h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? styles.isActive : ''}
              to='/busqueda'
            >
              Empleos
            </NavLink>
          </li>
          <li><a href='#empresas'>Empresas</a></li>
          <li><a href='#salarios'>Salarios</a></li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <div>
          {/* <devjobs-avatar></devjobs-avatar> */}
        </div>
        {
          isLogueado
            ? <button onClick={logout}>Cerrar sesión</button>
            : <button onClick={login}>Iniciar sesión</button>
        }
      </div>
    </header>
  )
}
