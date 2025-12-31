import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRouter } from '../hooks/useRouter'
import { Link } from '../components/Link'
import snarkdown from 'snarkdown'
import styles from './Job.module.css'

function JobSection ({ titulo, contenido }) {
  const html = snarkdown(contenido)
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        {titulo}
      </h2>
      <div className={`${styles.sectionContent} prose`}>
        {html}
      </div>
    </section>
  )
}

export function Job () {
  // El 'id' tiene que ser el mismo que aparece en jobs/id
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://jscamp-api.vercel.app/api/jobs/${id}`)
      .then(response => {
        // Verificar si la response dio okey
        if (!response.ok) throw new Error('Job no encontrado')
        return response.json()
      })
      .then(json => {
        setJob(json)
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  const { navegarA } = useRouter()

  if (loading) {
    return (
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div className={styles.loading}>
          <p className={styles.loadingText}>Cargando...</p>
        </div>
      </div>
    )
  }

  if (error || !job) {
    return (
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div className={styles.error}>
          <h2 className={styles.errorTitle}>
            Empleo no encontrado
          </h2>
          <button
            onClick={() => navegarA('/')}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }
  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb}>
          <Link
            href='/search'
            className={styles.breadcrumbButton}
          >
            Empleos
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{job.titulo}</span>
        </nav>
      </div>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {job.titulo}
        </h1>
        <p className={styles.meta}>
          {job.empresa} · {job.ubicacion}
        </p>
      </header>
      <button className={styles.applyButton}>
        Aplicar ahora
      </button>

      <JobSection
        titulo='Descripción del puesto'
        contenido={job.content.description}
      />
      <JobSection
        titulo='Responsabilidades'
        contenido={job.content.responsibilities}
      />
      <JobSection
        titulo='Requisitos'
        contenido={job.content.requirements}
      />
      <JobSection
        titulo='Acerca de la empresa'
        contenido={job.content.about}
      />
    </div>
  )
}
