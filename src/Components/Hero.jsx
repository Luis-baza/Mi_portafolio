import { useEffect, useState, useMemo } from 'react'
import '../Styles/Hero.css'

const Hero = () => {
  const roles = useMemo(
    () => [
      'Desarrollador Full Stack',
      'Bacckend en Spring Boot & Java',
      'Frontend con React',
      'Entusiasta de IoT y Sistemas',
      'proximamente analista de datos',
    ],
    [],
  )

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = roles[currentRoleIndex]
    let timer

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && currentText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }, 500)
    } else {
      const speed = isDeleting ? 40 : 80
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1),
        )
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentRoleIndex, roles])

  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <p className="hero-eyebrow">Hola, soy</p>
        <h1>LUIS</h1>
        <h2>
          <span>{currentText}</span>
          <span className="hero-cursor" aria-hidden="true">
            |
          </span>
        </h2>
        <div className="descripcion">
          <p>
            Construyo aplicaciones web modernas utilizando React, Java y
            Spring Boot.
          </p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="#proyectos">
              VER PROYECTOS
            </a>
            <a
              className="btn btn--cv"
              href="/cv.pdf"
              download="CV_Luis.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="btn-icon"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              DESCARGAR CV
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
