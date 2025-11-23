import styles from "./Header.module.css"
import { Link } from "./Link.jsx"
export function Header(){
  return(
    <header>
      <div className={styles.bar}>
        <Link href="/">
          <img src="../public/logo_superpet.svg" alt="Logo de SuperPet" />
        </Link>
        <form role="search">
          <input name="search" id="search" required type="search" placeholder="Busca tus marcas y productos favoritos"/>
          <button type="submit">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-  outline icon-tabler-search">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" />
            </svg>
          </button>
        </form> 
        <nav>
          <div>
            <a href="#">
              <img src="../public/minicart.png" alt="Carrito de compras"/>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="../public/store.png" alt="Tienda"/>
            </a>
          </div>
          <div className={styles.account}>
            <img src="../public/user.png" alt="Usuario"/>
            <div>
              <a href="./login.html"><strong>Inicia sesión</strong></a>
              <a href="./register.html">Regístrate</a>
            </div>
          </div>
        </nav>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/catalogo">Perros</Link></li>
          <li><a href="#gato">Gatos</a></li>
          <li><a href="#otras-mascotas">Otras mascotas</a></li>
          <li><a href="#marcas">Marcas</a></li>
          <li><a href="#">Peluquería canina</a></li>
          <li><a href="#">Seguros</a></li>
        </ul>
      </nav>
    </header>
  )
}