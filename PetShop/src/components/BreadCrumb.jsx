import styles from "./BreadCrumb.module.css"
import { Link } from "./Link.jsx"
export function BreadCrumb({href,padre,hijo}){
  return (
    <div className={styles.card}>
      <nav>
        <div>
          <Link href={href}>{padre}</Link>
          <span>
            <svg fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
            </svg>
          </span>
          <Link href="#">{hijo}</Link>
        </div>
      </nav>
      <h1>{hijo}</h1>
    </div>
  )
}