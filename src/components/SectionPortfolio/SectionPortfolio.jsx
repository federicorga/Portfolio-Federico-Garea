import './SectionPortfolio.css'
import Title from "../ElementTitle/Titles/Title";
import Subtitle from "../ElementTitle/Subititle/Subtitle";
import Article from './Article/Article';
import BtnLink from '../BtnsLink/BtnLink';
import { iconGitHub,iconlink } from '../../icons';
function SectionPortfolio() {
  return (
    <>
    <Title id='portfolio' text='Portfolio'/>
    <p className='textDescrp'>De algunos proyectos que se encuentran en el repositorio, aquí hay una selección de los más relevantes.</p>
    <div className='divArticles'>
    <Article titleProyect='Gamer-Zone Ecommerce JS' textP='Ecommerce para la venta videojuegos en JavaScript' 
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Ecommerce-Game-JavaScript' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://federicorga.github.io/Ecommerce-Game-JavaScript/' toolTip='ver deploy'/>]} skills={['HTML','CSS', 'JavaScript', 'Librerias']} />
    <Article titleProyect='Fichero-IT' textP='Pagina de sitios web para programadores y diseñadores 🚀'
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/FicheroIT' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://ficheroit.netlify.app/' toolTip='ver deploy'/>]} skills={['HTML','CSS','SASS', 'JavaScript', 'Librerias']} />
    <Article titleProyect='S.T.A.L.K.E.R - The Zone' textP='Pagina inspirada en el juego Stalker y su pagina oficial, ademas cuenta con un PDA simulando la misma que se encuentra en el juego. con un chat y mininuego ☢️'
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Stalker-the-zone' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://federicorga.github.io/Stalker-the-zone/' toolTip='ver deploy'/>]} skills={['HTML','CSS','JavaScript', 'NodeJS','API-REST','Express','SocketIo','Librerias']} />
    <Article titleProyect='Ecommerce React' textP='Ecommerce construido con React y base de datos Firebase'
        iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Ecommerce-Game-ReactJS' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://ecommercegamereact.netlify.app/' toolTip='ver deploy'/>]} skills={['HTML','CSS','JavaScript','React','JSX','Babel','FireBase BD','Librerias']} />
    </div>
   

    <Subtitle text='Portfolio'/>
      
    </>
  );
}

export default SectionPortfolio;
