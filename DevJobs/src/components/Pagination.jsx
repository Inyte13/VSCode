import styles from './Pagination.module.css'
export function Pagination ({ paginaActual = 1, nroPaginas = 5, fn }) {
  const paginas = Array.from({ length: nroPaginas }, (_, index) => index + 1)
  const aOpaco = { pointerEvents: 'none', opacity: 0.5 }
  return (
    <nav className={styles.pagination}>
      <a
        href='#'
        style={paginaActual === 1 ? aOpaco : {}}
        onClick={(e) => {
          e.preventDefault()
          fn(paginaActual - 1)
        }}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-chevron-left'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M15 6l-6 6l6 6' /></svg>
      </a>
      {paginas.map(pagina => (
        <a
          key={pagina}
          href='#'
          className={`pagination__number ${paginaActual === pagina ? styles.estasAqui : ''}`}
          onClick={(e) => {
            e.preventDefault()
            fn(pagina)
          }}
        >
          {pagina}
        </a>
      ))}
      <a
        href='#'
        style={paginaActual === nroPaginas ? aOpaco : {}}
        onClick={(e) => {
          e.preventDefault()
          fn(paginaActual + 1)
        }}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-chevron-right'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M9 6l6 6l-6 6' /></svg>
      </a>
    </nav>
  )
}
