import { Link } from "./Link"
import styles from "./Header.module.css"
export function Header(){
  return(
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href="/">
          <img src="/public/devjobs.png" alt="DevJobs logo" width="50"/>
        </Link>
        <h1><Link href="/">DevJobs</Link></h1>
      </div>
      <nav>
        <ul>
          <li><Link href="/busqueda">Empleos</Link></li>
          <li><a href="#empresas">Empresas</a></li>
          <li><a href="#salarios">Salarios</a></li>
        </ul>
      </nav>
      <div className={styles.actions}>
          <a href="#publicar">Subir CV</a>
          <div>
            {/* <devjobs-avatar></devjobs-avatar> */}
          </div>
      </div>
    </header>
  )
}