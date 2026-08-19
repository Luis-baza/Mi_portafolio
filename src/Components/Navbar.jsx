import React from 'react'
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='nav_container'>
      <nav className='navbar'>

        <div className="navbar_logo">
            <a href="/">Luis.dev</a>
        </div>

        <ul className='navbar_links'>
            <li><a href="#inicio"> Inicio</a></li>
            <li><a href="#sobre_mi">Sobre mi</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar
