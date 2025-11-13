export function Header(){
  return(
    <header className="navbar">
      <div className="navbar__brand">
        <img className="navbar__brand-logo" src="./public/devjobs.png" alt="DevJobs logo" width="50"/>
        <h1 className="navbar__brand-name">DevJobs</h1>
      </div>
      <nav>
        <ul className="navbar__menu">
          <li><a href="#empleos" className="navbar__link">Empleos</a></li>
          <li><a href="#empresas" className="navbar__link">Empresas</a></li>
          <li><a href="#salarios" className="navbar__link">Salarios</a></li>
        </ul>
      </nav>
      <div className="navbar__actions">
          <a href="#publicar" className="btn btn--primary">Subir CV</a>
          {/* <div>
            <devjobs-avatar></devjobs-avatar>
          </div> */}
      </div>
    </header>
  )
}