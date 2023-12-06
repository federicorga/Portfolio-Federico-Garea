
import './SectionInicio.css'
import BtnLink from '../BtnsLink/BtnLink';
import { IconCv } from '../../icons';
import BtnMouse from '../BtnsLink/BtnMouse';

function Inicio() {
  return (
    <>
    
    <section id='inicio' className='sectionProfile'>
      
      < div className='divProfile'>
      <div>
        <div className="imgProfile">
          <img src="./img/fsinfond.webp" alt="fotoPerfil"/>
        </div>
        </div>
      <div className='text-box-description'> 
      <h1 className='nameProfile'>Federico Garea</h1>
      <h2 className='title-Profesion'>Desarrollador Frontend </h2>
      <p className='textDescrp'>Soy Programador nacido en 🇦🇷 Argentina en búsqueda de nuevas oportunidades y experiencias. </p>
      <p className='textDescrp'>Actualmente trabajo de forma autónoma en el desarrollo de páginas web y aplicaciones.</p>
      <p className='pMasInfo'>Ver información completa en mi perfil de <a className='linkInfo'  href='https://www.linkedin.com/in/federicogarea/' target='_blank' rel="noreferrer">LinkedIn <i className="fa fa-external-link"></i></a>.</p>
      <p className='pMasInfoCv'>Descargar curriculum aquí<BtnLink imagSvg={IconCv} viewbox='0 0 448 512' toolTip={'Curriculum'} Href={'https://drive.google.com/drive/folders/1i2G3qkxDNYIJ42VHgH8zrKAu9_LuwnwZ?usp=sharing'}/></p>
      </div>  
      </div>   
    <div className='content-mouse'>
      <BtnMouse/> 
      </div> 
    </section>
    
      
      
    </>
  );
}

export default Inicio;
