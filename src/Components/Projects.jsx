import { projects } from '../data/projects'
import '../Styles/Projects.css'

const Projects = () => {
  return (
    <section id="proyectos" className="section">
      <div className="section__inner">
        <h2 className="section__title">Proyectos</h2>
        <p className="section__subtitle">
          Algunos de los proyectos en los que he trabajado.
        </p>

        <div className="projects">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <ul className="project-card__stack">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="project-card__links">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Ver código
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
