
import './SectionInicio.css'

import { IconCv, iconEmail, iconLinkedIn} from '../../icons';
import BtnMouse from '../BtnsLink/BtnMouse';
import BtnLink2 from '../BtnsLink/BtnLink2';
import clipboardCopy from 'clipboard-copy';
import { toast } from 'react-toastify';

function Inicio() {
  const myEmail="federico.garea@gmail.com";
  const copiarAlPortapapeles = () => {
    clipboardCopy(myEmail)
      .then(() => {
        showToast('Texto copiado al portapapeles!');
        // Puedes agregar más lógica aquí después de copiar al portapapeles
      })
      .catch((err) => {
        showToast('Error al copiar al portapapeles: ' + err.message);
      });
  };

  const showToast = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2000, // Cierra automáticamente después de 3 segundos
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };
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
      <h1 className='stateProfile'>Disponible para trabajar</h1>
      <h2 className='title-Name'>Hey, soy Federico</h2>
      <h2 className='title-Profesion'>Desarrollador FullStack Jr</h2>
      
      <p className='textDescrp'>Un apasionado Programador de <span className='text-span1'>Argentina 🇦🇷</span>.</p>
      <p className='textDescrp'>Mi experiencia actual se centra en el <span className='text-span2'>Desarrollo de Páginas Web y aplicaciones</span>.</p>
      <p className='textDescrp'><span className='text-span3'>Estoy en búsqueda activa de empleo y entusiasmado con la posibilidad de aplicar mis habilidades en una empresa</span>.</p>
 
     
      <div className='pMasInfo'>
      <BtnLink2  contentP={"Linkedin"} imagSvg={iconLinkedIn} Width='24'viewbox='0 0 16 16' toolTip={'LinkedIn'} Href={'https://www.linkedin.com/in/federicogarea/'} />
        <BtnLink2  contentP={"Curriculum"} imagSvg={IconCv}Width='25' viewbox='0 0 449 512' toolTip={'Curriculum'} Href={'https://drive.google.com/drive/folders/1i2G3qkxDNYIJ42VHgH8zrKAu9_LuwnwZ?usp=sharing'} />
        <div onClick={copiarAlPortapapeles}>
        <BtnLink2 contentP={"federico.garea@gmail.com"} imagSvg={iconEmail} viewBox='0 0 24 24' toolTip={'Email'}  href={""}/>
        </div>

           

</div>   
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
