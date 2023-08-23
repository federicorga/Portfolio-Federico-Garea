import React, { useEffect, useState } from "react";
import "./BtnScroll.css";

function BtnScroll() {
  const [ubicacionInicial, setUbicacionInicial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const ubicacionActual = window.pageYOffset;

      if (ubicacionInicial < 200) {
        document.getElementById("desplazador").style.opacity = "0";
        document.getElementById("desplazador").style.overflow = "hidden";
      } else {
        document.getElementById("desplazador").style.opacity = "100";
        document.getElementById("desplazador").style.overflow = "visible";
      }

      setUbicacionInicial(ubicacionActual);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ubicacionInicial]);

  return (
    <div
      id="desplazador" className="desplazador" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <a href="#inicio" aria-label="Boton up">
      <svg className="cohete" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label='Button Scroll' role='img'>
    <path fill="currentColor" d="M5 13c0-5.088 2.902-9.437 7-11.182C16.097 3.563 19 7.912 19 13c0 .823-.076 1.626-.221 2.403l1.94 1.832a.5.5 0 0 1 .096.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.235-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.235 2.234a.5.5 0 0 1-.792-.114l-2.496-4.575a.5.5 0 0 1 .096-.603l1.94-1.832C5.076 14.626 5 13.823 5 13Zm1.475 6.695l.817-.817A3 3 0 0 1 9.414 18h5.171a3 3 0 0 1 2.122.878l.817.817l.982-1.8l-1.1-1.038a2 2 0 0 1-.593-1.82A11.11 11.11 0 0 0 17 13c0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.186 2.036a2 2 0 0 1-.593 1.82l-1.1 1.04l.982 1.8ZM12 13a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"/>
</svg>
      </a>
    </div>
  );
}

export default BtnScroll;
