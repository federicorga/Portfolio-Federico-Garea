import './SectionContact.css'
import Title from "../ElementTitle/Titles/Title";
import Subtitle from "../ElementTitle/Subititle/Subtitle";
import BtnLink from '../BtnsLink/BtnLink';
import { iconLinkedIn } from '../../icons';
function SectionContact() {
  return (
    <>

    <Title id='contacto' text='Contacto'/>
  <p className="textDescrp">Puedes contactarme a travez de mi bandeja de entrada o LinkedIn. ¡Te responderé a la brevedad! 📬</p>
  <p className="textDescrp">Podés escribirme en 📩 <a className="link-email" href="mailto:federico.garea@gmail.com">federico.garea@gmail.com</a></p>
  <div className='linkedin-contactdiv'>
  <p className='textDescriptContact'>O ingresar aquí</p>
  <BtnLink imagSvg={iconLinkedIn} Href='https://www.linkedin.com/in/federicogarea/' toolTip='LinkedIn'/></div>
    <Subtitle text='Contacto'/>
      
    </>
  );
}

export default SectionContact;
