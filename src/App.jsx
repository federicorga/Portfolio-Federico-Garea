import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader'; // Asegúrate de importar el componente Loader desde la ubicación correcta
import { iconLinkedIn, iconGitHub } from "./icons";
import BtnLink from "./components/BtnsLink/BtnLink";
import BtnScroll from "./components/BtnScroll/BtnScroll";
import Navbar from "./components/Navbar/Navbar";
import SectionContact from "./components/SectionContact/SectionContact";
import SectionInicio from "./components/SectionInicio/SectionInicio";
import SectionPortfolio from "./components/SectionPortfolio/SectionPortfolio";
import SectionSkills from "./components/SectionSkills/SectionSkills";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos (puedes reemplazar esto por tu lógica real)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Mostrar el loader mientras se carga la página
      ) : (
        <>
          <Navbar />
          <section className="section-main">
            <SectionInicio />
            <SectionSkills />
            <SectionPortfolio />
            <SectionContact />
            <footer>
              <BtnScroll />
              <div className="links-footer">
                <BtnLink imagSvg={iconLinkedIn} Href="https://www.linkedin.com/in/federicogarea/" toolTip="LinkedIn" />
                <BtnLink imagSvg={iconGitHub} Href="https://github.com/federicorga" toolTip="Repositorio" />
              </div>
              <div>
                <p>Federico Garea</p>
              </div>
            </footer>
          </section>
       </>
      )}
    </>
  );
}

export default App;
