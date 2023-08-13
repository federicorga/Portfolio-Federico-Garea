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
    <Article titleProyect='Gamer-Zone JavaScript' textP='E-commerce para la venta videojuegos.' 
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Ecommerce-Game-JavaScript' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://federicorga.github.io/Ecommerce-Game-JavaScript/' toolTip='ver deploy'/>]} skills={['HTML','CSS', 'JavaScript', 'Librerias']} />
    <Article titleProyect='Fichero-IT' textP='Página de sitios web para programadores y diseñadores. 🚀'
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/FicheroIT' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://ficheroit.netlify.app/' toolTip='ver deploy'/>]} skills={['HTML','CSS','SASS', 'JavaScript', 'Librerias']} />
    <Article titleProyect='S.T.A.L.K.E.R - The Zone' textP='Proyecto inspirado en el juego Stalker. Cuenta con una página principal y una PDA interactiva con chat y minijuego que simula la que se encuentra en el juego original. ☢️'
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Stalker-the-zone' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://federicorga.github.io/Stalker-the-zone/' toolTip='ver deploy'/>]} skills={['HTML','CSS','JavaScript', 'NodeJS','API-REST','Express','SocketIo','Librerias']} />
    <Article titleProyect='Gamer-Zone React' textP='E-commerce para la venta de videojuegos Construido con React y base de datos Firebase.'
        iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Ecommerce-Game-ReactJS' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://ecommercegamereact.netlify.app/' toolTip='ver deploy'/>]} skills={['HTML','CSS','JavaScript','React','JSX','Babel','FireBase BD','Librerias']} />
    </div>
   

    <Subtitle text='Portfolio'/>
      
    </>
  );
}

export default SectionPortfolio;
