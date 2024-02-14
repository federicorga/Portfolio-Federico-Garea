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
    <p className='textDescrp'>Esta sección contiene algunos de mis Proyectos. Puedes ver el resto ingresando a  mi repositorio de GitHub.</p>
    <div className='divArticles'>
    <Article img="/img/paginasimg/sunsound.webp"  titleProyect='SunSound NFT' textP='Este proyecto simula un E-learning relacionado con la música, además cuenta una sección de de Artistas y sus obras musicales que se pueden reproducir representadas en NFTs. 🎵' 
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/SunSound' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://sunsound.netlify.app/' toolTip='ver deploy'/>]} skills={['HTML','CSS','JavaScript', 'Librerias']} />
    <Article   img="/img/paginasimg/imagentieneda.webp" titleProyect='Gamer-Zone JavaScript Frontend ' textP='Este proyecto construido con JavaScript simula un Ecommerce para la venta videojuegos 🛒' 
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Ecommerce-Game-JavaScript' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://federicorga.github.io/Ecommerce-Game-JavaScript/' toolTip='ver deploy'/>]} skills={['HTML','CSS', 'JavaScript', 'Librerias']} />
     <Article img="/img/paginasimg/gamerzonereact.webp" titleProyect='Gamer-Zone React Frontend ' textP='Este proyecto esta creado con React usando una base de datos Firebase para almacenar los juegos. Simula la compra de videojuegos'
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Ecommerce-Game-ReactJS' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://ecommercegamereact.netlify.app/' toolTip='ver deploy'/>]} skills={['HTML','CSS','JavaScript','React','JSX','Babel','FireBase BD','Librerias']} />
    <Article  titleProyect='API Ecommerce - Venta de entradas FullStack ' textP='Este proyecto consta de una arquitectura de aplicacion completa Frontend/Backend/API/BD-MongoDB para la compra de entradas. Como lenguaje uso NodeJS y Handlebars como motor de plantillas para la generación de HTML dinámico. Cuenta con registro de usuario, test de rendimineto, etc. ' 
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/API-Ecommerce-NodeJs-Backend' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://entradasrecitalesweb.glitch.me/views/login' toolTip='ver deploy'/>]} skills={['NodeJS','MongoDB','API-REST','Docker','JSW','Passport','Swagger','Artillery','Express','SocketIo','Handlebars','Mocha','Nodemailer','JavaScript','Nodemon', 'Librerias']} />
     <Article img="/img/paginasimg/stalkerthezone.webp" titleProyect='S.T.A.L.K.E.R - The Zone ' textP='Este proyecto esta inspirado en el juego Stalker. Construido con NodeJS. Además de la página principal, cuenta con una PDA interactiva con chat utilizando Socket.IO que permite la conexión de los usuarios en tiempo real y un minijuego "búsqueda de artefacto". Esta PDA es la misma que podemos encontrar dentro del juego y el objetivo del proyecto es recrearla ☢️'
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/Stalker-the-zone' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://federicorga.github.io/Stalker-the-zone/' toolTip='ver deploy'/>]} skills={['HTML','CSS','JavaScript', 'NodeJS','Express','SocketIo','Librerias']} />
    <Article img="/img/paginasimg/ficheroit.webp" titleProyect='Fichero-IT' textP='Este proyecto es una biblioteca de enlaces a paginas web de programación y desarrollo web. Surgió a partir de la enorme cantidad de marcadores (enlaces) que poseía en favoritos y eran difícil de administrar. Ahora las paginas estan organizadas por secciones, posee filtros y un buscador con una interface amigable y divertida. 🗃️'
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/FicheroIT' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://ficheroit.netlify.app/' toolTip='ver deploy'/>]} skills={['HTML','CSS','SASS', 'JavaScript','Conexion a Api', 'Librerias']} />
    <Article img="/img/paginasimg/segurapp.webp" titleProyect='SegurAPP' textP='Este proyecto Simula una consultora de Seguridad e Higiene. Construido con HTML, CSS y SASS fue el primer proyecto que hice'
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/federicorga/SegurAPP-HTML' toolTip='ver repositorio'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://federicorga.github.io/SegurAPP-HTML/' toolTip='ver deploy'/>]} skills={['HTML','CSS','SASS','Librerias']} />    
    </div>
   

    <Subtitle text='Proyectos'/>
      
    </>
  );
}

export default SectionPortfolio;
