import './SectionSkills.css'
import Title from "../ElementTitle/Titles/Title";
import Subtitle from "../ElementTitle/Subititle/Subtitle";
import Skills from "../Skills/Skills";
import IconDevImg from '../IconDevImg/IconDevImg';
import {icoHtml,
  icoCss,
  icoBoo,
  icoSas,
  icoJs,
  icoRea,
  icoNpm,
  icoNodeJs,
  icoMon,
  icoDocker,
  icoFullResponive,
  icoHan,
  icoFir,
  icoJwt,
  icoGit,
  icoNodeMailer,
  icoNodemon,
  icoSocketio,
  icoMocha,
  icoExpress,
  icoArtillery,
  icoPassport,
  icoFileZ,
  iconCsharp,
  icoGitHub,
  icoGitLab,
  icoVisualCode,
  icoVisualStudio,
  icoPhotoshop,
  icoAillustraitor,
  icoOffice,
  icoPostman,
  icoSwagger,
  icoResponsively} from '../imgDevIcon.js';
function SectionSkills() {
  return (
    <>
    <Title id='skills' text='Skills'/>
    <p  className="textDescrp">En esta sección encontraras las habilidades y herramientas que poseo. Aunque me apasiona aprender y mantenerme al tanto de las últimas tendencias y tecnologías, por lo que sigo en constante desarrollo de nuevas habilidades.</p>
    <h2 className='TitleSectSkill'>SKILLS</h2>

    <h3 className="subTitleSectSkill">Backend</h3>
    <div className='iconsDiv'>
    <IconDevImg imgUrl={iconCsharp} title='CSHARP'/>
    <IconDevImg imgUrl={icoNodeJs} title='NODEJS'/>
    <IconDevImg imgUrl={icoMon} title='MONGODB'/>
    <IconDevImg imgUrl={icoFir} title='FIREBASE'/>
    <IconDevImg imgUrl={icoDocker} title='DOCKER'/>
    <IconDevImg imgUrl={icoExpress} title='EXPRESS'clase='img-Filter'/>
    <IconDevImg imgUrl={icoSocketio} title='SOCKETIO'clase='img-Filter'/>
    <IconDevImg imgUrl={icoPassport} title='PASSPORT'/>
    <IconDevImg imgUrl={icoJwt} title='JSONWEBTOKEN'/>
    <IconDevImg imgUrl={icoArtillery} title='ARTILLERY'/>
    <IconDevImg imgUrl={icoMocha} title='MOCHA'/>
    <IconDevImg imgUrl={icoNodemon} title='NODEMON'/>
    <IconDevImg imgUrl={icoNodeMailer} title='NODEMAILER'/>
    <IconDevImg imgUrl={icoSwagger} title='SWAGGER'/>
    </div>

    <h3 className="subTitleSectSkill">Frontend</h3>
    <div className='iconsDiv'>
    <IconDevImg imgUrl={icoJs} title='JAVASCRIPT'/>
    <IconDevImg imgUrl={icoRea} title='REACT'/>
    <IconDevImg imgUrl={icoHtml} title='HTML5'/>
    <IconDevImg imgUrl={icoCss} title='CSS3'/>
    <IconDevImg imgUrl={icoSas} title='SASS'/>  
    <IconDevImg imgUrl={icoBoo} title='BOOSTRAP'/>
    <IconDevImg imgUrl={icoHan} title='HANDLEBARS' clase='img-Filter'/>
    <IconDevImg imgUrl={icoFullResponive} title='DISEÑO RESPONSIVE'/>
    </div>
    
    <h3 className="subTitleSectSkill">Herramientas de desarrollo</h3>
    <div className='iconsDiv'>
    <IconDevImg imgUrl={icoGit} title='GIT'/>
    <IconDevImg imgUrl={icoNpm} title='NPM'/>
    <IconDevImg imgUrl={icoGitHub} title='GITHUB'clase='img-Filter'/>
    <IconDevImg imgUrl={icoGitLab} title='GITLAB'/>
    <IconDevImg imgUrl={icoVisualStudio} title='VISUAL STUDIO'/>
    <IconDevImg imgUrl={icoVisualCode} title='VISUAL STUDIO CODE'/>
    <IconDevImg imgUrl={icoMon} title='MONGODBCOMPASS'/>
    <IconDevImg imgUrl={icoPostman} title='POSTMAN'/>
    <IconDevImg imgUrl={icoDocker} title='DOCKER'/>
    <IconDevImg imgUrl={icoFileZ} title='FILEZILLA'/>
    <IconDevImg imgUrl={icoResponsively} title='RESPONSIVELY'/>
    <IconDevImg imgUrl={icoPhotoshop} title='PHOTOSHOP'/>
    <IconDevImg imgUrl={icoAillustraitor} title='ILLUSTRAITOR'/>
    <IconDevImg imgUrl={icoOffice} title='MICROSOFT OFFICE'/>
    </div>

    <h2 className='TitleSectSkill'>IDIOMA</h2>
    <Skills arraySkills={['Español(Nativo)', 'Ingles(Técnico)' ]} />

    <Subtitle text='Skills'/>
    
    </>
  );
}

export default SectionSkills;
