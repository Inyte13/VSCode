import styles from "./Hero.module.css"
export function Hero(){
  return(

    <section className={styles.hero}>

      <header>
        <h1 className="hero__title">Encuentra tu próximo trabajo</h1>
        <p className="hero__text">Explora miles de oportunidades en el sector tecnológico.</p>  
      </header>

      <form role="search" aria-label="Buscar en el sitio">
        <input name="search" id="search" required type="search" placeholder="Buscar trabajos, empresas o habilidades" aria-label="Buscar"/>
        <button type="submit" aria-label="Enviar búsqueda">
          <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-  outline icon-tabler-search">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" />
          </svg>
        </button>
      </form> 

      <nav>

        <select name="technology" id="filter-technology">
          <option value="">Tecnología</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="php">PHP</option>
          <option value="c#">C#</option>
          <option value="pandas">Pandas</option>
          <option value="revit">Revit</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
          <option value="bootstrap">Bootstrap</option>
          <option value="spring boot">Spring Boot</option>
          <option value="ci/cd">CI/CD</option>
          <option value="scrum">Scrum</option>
          <option value="typescript">TypeScript</option>
          <option value="nestjs">NestJs</option>
          <option value="kotlin">Kotlin</option>
          <option value="django">Django</option>
          <option value="python">Python</option>
          <option value="devops">DevOps</option>
          <option value="nodejs">NodeJs</option>
          <option value="android">Android</option>
          <option value="mysql">MySQL</option>
          <option value="sql">SQL</option>
          <option value="postgresql">PostgreSQL</option>
          <option value="angular">Angular</option>
          <option value="docker">Docker</option>
        </select>

        <select name="location" id="filter-ubicacion">
          <option value="">Ubicación</option>
          <option value="remoto">Remoto</option>
          <option value="cdmx">Ciudad de México</option>
          <option value="guadalajara">Guadalajara</option>
          <option value="monterrey">Monterrey</option>
          <option value="barcelona">Barcelona</option>
        </select>

        <select name="experience" id="filter-experience">
          <option value="">Nivel de experiencia</option>
          <option value="junior">Junior</option>
          <option value="mid">Semi Senior</option>
          <option value="senior">Senior</option>
          <option value="lead">Líder técnico</option>
        </select>
      </nav>
    </section>
  )
}