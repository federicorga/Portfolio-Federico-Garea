import React, { useState } from 'react';
import './Navbar.css'
import BtnDarkMode from './BtnDarkMode/BtnDarkMode';
//import BtnIdioma from './BtnIdioma/BtnIdioma'
import BtnIndice from './BtnIndice/BtnIndice';
import BtnLink from '../BtnsLink/BtnLink';
import { iconLinkedIn,iconGitHub} from '../../icons.js';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    
    <header>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <button className='close-button' onClick={toggleMenu}>
        <svg className='btn-link' width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/>
    </svg>

  </button>
            <ul className='nav-list'>

              <a href="#inicio" onClick={toggleMenu}> <BtnIndice text={'Inicio'}/></a>
              <a href="#skills"onClick={toggleMenu}> <BtnIndice text={'Skills'}/></a>
              <a href="#portfolio"onClick={toggleMenu}> <BtnIndice text={'Portfolio'}/></a>
              <a href="#contacto"onClick={toggleMenu}> <BtnIndice text={'Contacto'}/></a>
            </ul>
        
        </nav>
        <div className='content-navbar-btns'> 

        <BtnLink imagSvg={iconLinkedIn} Href='https://www.linkedin.com/in/federicogarea/' viewbox='0 0 24 24' />
        <BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga' viewbox='0 0 24 24' />
          <BtnDarkMode />
        </div>
      
       
    </header>
    
    
  );
}

export default Navbar;
