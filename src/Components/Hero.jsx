import React from "react";
import "../Styles/Hero.css";
const Hero = () => {
  return (
    <div className="container">
      <div className="hero-container">
        <h1>HOLA, SOY LUIS</h1>
        <h2>Desarrollador Full Stack </h2>
        <div className="descripcion">
          <p>
            Construyo aplicaciones web modernas utilizando React, Java y
            Spring Boot.
          </p>

          <a href="#proyecto">VER PROYECTOS</a> 
          <a href="#contactar">CONTACTAR</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
