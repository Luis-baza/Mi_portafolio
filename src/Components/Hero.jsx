import '../Styles/Hero.css'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <p className="hero-eyebrow">Hola, soy</p>
        <h1>LUIS</h1>
        <h2>Desarrollador Full Stack</h2>
        <div className="descripcion">
          <p>
            Construyo aplicaciones web modernas utilizando React, Java y
            Spring Boot.
          </p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="#proyectos">
              VER PROYECTOS
            </a>
            <a className="btn btn--outline" href="#contacto">
              CONTACTAR
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
