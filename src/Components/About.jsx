import '../Styles/About.css'

const About = () => {
  return (
    <section id="sobre-mi" className="section">
      <div className="section__inner about">
        <h2 className="section__title">Sobre mí</h2>
        <div className="about__body">
          {/* ✏️ Reemplaza con tu texto. Sé concreto y honesto. */}
          <p>
            Soy estudiante de Ingeniería de Sistemas y me apasiona crear
            software que resuelva problemas reales. Actualmente profundizo en
            desarrollo web con React y en backend con Java y Spring Boot.
          </p>
          <p>
            Me gusta aprender construyendo: proyectos académicos, prototipos
            para negocios reales y experimentos con IoT. Busco una oportunidad
            de práctica o primer empleo donde seguir creciendo como
            desarrollador.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
