
import './App.css';
import BtnScroll from './components/BtnScroll/BtnScroll';
import BtnLink from './components/BtnsLink/BtnLink';


//componentes
import Navbar from './components/Navbar/Navbar';
import SectionContact from './components/SectionContact/SectionContact';
import SectionInicio from './components/SectionInicio/SectionInicio'
import SectionPortfolio from './components/SectionPortfolio/SectionPortfolio';
import SectionSkills from './components/SectionSkills/SectionSkills';

import { iconLinkedIn,iconGitHub} from './icons';
function App() {

  return (
<>
  <Navbar/>
<section className='section-main'>

  <SectionInicio />
  <SectionSkills />
  <SectionPortfolio/>
  <SectionContact />
  <footer>
    <BtnScroll/>
  <div className='links-footer'>
  <BtnLink imagSvg={iconLinkedIn} Href='https://www.linkedin.com/in/federicogarea/' toolTip='LinkedIn'/>
  <BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga' toolTip='Repositorio'/>
  </div>
  <div><p>Federico Garea</p></div>
  </footer>
  </section>
 
  </>

)
}

export default App;

