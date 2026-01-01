import { useState } from 'react'
import styles from './EmpleoCard.module.css'
import { Link } from './Link'

export function EmpleoCard ({ empleo }) {
  const [clickeado, setClickeado] = useState(false)
  return (
    <article className={styles.empleoCard} data-id={empleo.id}>
      <div className={styles.empleo} data-nivel={empleo.data.nivel} data-tecnologia={empleo.data.technology.join(',')}>
        <div className={styles.empleoColumn1}>
          <header>
            <h3>
              <Link
                className={styles.titulo}
                href={`/jobs/${empleo.id}`}
              >
                {empleo.titulo}
              </Link>
            </h3>
            <p>
              {empleo.empresa} | <span data-lugar={empleo.data.ubicacion}>{empleo.ubicacion}</span>
            </p>
          </header>
          <p>{empleo.descripcion}</p>
        </div>
        <div className={styles.empleoColumn2}>
          <Link
            className={styles.detalles}
            href={`/jobs/${empleo.id}`}
          >
            Ver detalles
          </Link>
          <button
            className={clickeado ? styles.clickeado : ''}
            onClick={() => setClickeado(true)}
          >{clickeado ? 'Aplicado' : 'Aplicar'}
          </button>
        </div>
      </div>
    </article>
  )
}
