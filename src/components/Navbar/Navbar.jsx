import './Navbar.css'
import BtnDarkMode from './BtnDarkMode/BtnDarkMode';
//import BtnIdioma from './BtnIdioma/BtnIdioma'
import BtnIndice from './BtnIndice/BtnIndice';
import BtnLink from '../BtnsLink/BtnLink';
import { iconLinkedIn,iconGitHub} from '../../icons.js';
const Navbar = () => {
  return (
    
    <header>
        <nav className='nav'>
            <ul className='nav-list'>

              <a href="#inicio"> <BtnIndice text={'Inicio'}/></a>
              <a href="#skills"> <BtnIndice text={'Skills'}/></a>
              <a href="#portfolio"> <BtnIndice text={'Portfolio'}/></a>
              <a href="#contacto"> <BtnIndice text={'Contacto'}/></a>
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
