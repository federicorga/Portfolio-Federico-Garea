import './SectionPortfolio.css'
import Title from "../ElementTitle/Titles/Title";
import Subtitle from "../ElementTitle/Subititle/Subtitle";
import Article from './Article/Article';
import BtnLink from '../BtnsLink/BtnLink';
import { iconGitHub,iconlink } from '../../icons';
function SectionPortfolio() {
  return (
    <>
    <Title id='portfolio' text='Proyectos'/>
    <p className='textDescrp'>De algunos proyectos que se encuentran en mi repositorio, aquí hay una selección de los más relevantes. Puedes ver los que faltan ingresando a GitHub.</p>
    <div className='divArticles'>
    <Article  titleProyect='Lemuris NFT-Cripto' textP='Es una pagina para la visualizacion y adquisicion de NFTs artisticos. Construido con Html y css' 
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/lemuris' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://federicorga.github.io/lemuris/' toolTip='ver deploy'/>]} skills={['HTML','CSS', 'Librerias']} />
    <Article  titleProyect='Gamer-Zone Frontend JavaScript' textP='E-commerce para la venta videojuegos construido con Javascript.' 
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Ecommerce-Game-JavaScript' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://federicorga.github.io/Ecommerce-Game-JavaScript/' toolTip='ver deploy'/>]} skills={['HTML','CSS', 'JavaScript', 'Librerias']} />
    <Article  titleProyect='Venta de entradas - Servidor API FullStack' textP='Un Servidor para la compra de entrada donde utilizo multiples herramientas terminado.Construido con NodeJS, Cuenta con registro de usuario, una api que se conecta a una base de datos de MongoDB, test de rendimineto, etc. ' 
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Servidor-Ecommerce-NodeJs-Backend' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://entradasrecitalesweb.glitch.me/views/login' toolTip='ver deploy'/>]} skills={['NodeJS','MongoDB','API-REST','Docker','JSW','Passport','Swagger','Artillery','Express','SocketIo','Handlebars','Mocha','Nodemailer','JavaScript','Nodemon', 'Librerias']} />
     <Article titleProyect='S.T.A.L.K.E.R - The Zone ' textP='Proyecto inspirado en el juego Stalker construido con NodeJS. Cuenta con una página principal y una PDA interactiva con chat, minijuego y mapa de la zona que simula la que se encuentra en el juego original. ☢️'
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Stalker-the-zone' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://federicorga.github.io/Stalker-the-zone/' toolTip='ver deploy'/>]} skills={['HTML','CSS','JavaScript', 'NodeJS','API-REST','Express','SocketIo','Librerias']} />
    <Article titleProyect='Gamer-Zone Frontend React' textP='E-commerce para la venta de videojuegos Construido con React y base de datos Firebase.'
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Ecommerce-Game-ReactJS' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://ecommercegamereact.netlify.app/' toolTip='ver deploy'/>]} skills={['HTML','CSS','JavaScript','React','JSX','Babel','FireBase BD','Librerias']} />
    <Article titleProyect='Fichero-IT' textP='Una biblioteca de sitios web para programadores y diseñadores 🗃️'
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/FicheroIT' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://ficheroit.netlify.app/' toolTip='ver deploy'/>]} skills={['HTML','CSS','SASS', 'JavaScript','Conexion a Api', 'Librerias']} />    
    </div>
   

    <Subtitle text='Proyectos'/>
      
    </>
  );
}

export default SectionPortfolio;
