import { Link } from './Link'
import styles from './Header.module.css'
import { NavLink } from 'react-router'
export function Header ({ isLogueado, onLogin, onLogout }) {
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
            ? <button onClick={onLogout}>Cerrar sesión</button>
            : <button onClick={onLogin}>Iniciar sesión</button>
        }
      </div>
    </header>
  )
}
