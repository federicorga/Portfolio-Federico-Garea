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
    <p  className="textDescrp">De las habilidades que poseo, destaco algunas de ellas. Actualmente continúo en constante desarrollo.</p>
    <h2 className='TitleSectSkill'>SKILLS</h2>
    <h3 className="subTitleSectSkill">Frontend/Backend</h3>
    <div className='iconsDiv'>
    <IconDevImg imgUrl={icoHtml} title='HTML5'/>
    <IconDevImg imgUrl={icoCss} title='CSS3'/>
    <IconDevImg imgUrl={icoJs} title='JAVASCRIPT'/>
    <IconDevImg imgUrl={icoRea} title='REACT'/>
    <IconDevImg imgUrl={icoNodeJs} title='NODEJS'/>
    <IconDevImg imgUrl={iconCsharp} title='CSHARP'/>
    <IconDevImg imgUrl={icoFullResponive} title='DISEÑO RESPONSIVE'/>
    <IconDevImg imgUrl={icoGitHub} title='GITHUB'clase='img-Filter'/>
    <IconDevImg imgUrl={icoGitLab} title='GITLAB'/>
    <IconDevImg imgUrl={icoNpm} title='NPM'/>
    <IconDevImg imgUrl={icoBoo} title='BOOSTRAP'/>
    <IconDevImg imgUrl={icoSas} title='SASS'/>
    <IconDevImg imgUrl={icoHan} title='HANDLEBARS' clase='img-Filter'/>
    <IconDevImg imgUrl={icoFir} title='FIREBASE'/>
    <IconDevImg imgUrl={icoMon} title='MONGODB'/>
    <IconDevImg imgUrl={icoDocker} title='DOCKER'/>
    <IconDevImg imgUrl={icoExpress} title='EXPRESS'clase='img-Filter'/>
    <IconDevImg imgUrl={icoSocketio} title='SOCKETIO'clase='img-Filter'/>
    <IconDevImg imgUrl={icoPassport} title='PASSPORT'/>
    <IconDevImg imgUrl={icoJwt} title='JSONWEBTOKEN'/>
    <IconDevImg imgUrl={icoSwagger} title='SWAGGER'/>
    <IconDevImg imgUrl={icoNodeMailer} title='NODEMAILER'/>
    <IconDevImg imgUrl={icoArtillery} title='ARTILLERY'/>
    <IconDevImg imgUrl={icoMocha} title='MOCHA'/>
    <IconDevImg imgUrl={icoNodemon} title='NODEMON'/>
 
    </div>

    
    <h2 className='TitleSectSkill'>SOFTWARE</h2>
    <div className='iconsDiv'>
    <IconDevImg imgUrl={icoPhotoshop} title='PHOTOSHOP'/>
    <IconDevImg imgUrl={icoAillustraitor} title='ILLUSTRAITOR'/>
    <IconDevImg imgUrl={icoOffice} title='MICROSOFT OFFICE'/>
    <IconDevImg imgUrl={icoVisualStudio} title='VISUAL STUDIO'/>
    <IconDevImg imgUrl={icoVisualCode} title='VISUAL STUDIO CODE'/>
    <IconDevImg imgUrl={icoResponsively} title='RESPONSIVELY'/>
    <IconDevImg imgUrl={icoGit} title='GIT'/>
    <IconDevImg imgUrl={icoPostman} title='POSTMAN'/>
    <IconDevImg imgUrl={icoDocker} title='DOCKER'/>
    <IconDevImg imgUrl={icoFileZ} title='FILEZILLA'/>
    </div>

    <h2 className='TitleSectSkill'>IDIOMA</h2>
    <Skills arraySkills={['Español(Nativo)', 'Ingles(Técnico)' ]} />

    <Subtitle text='Skills'/>
    
    </>
  );
}

export default SectionSkills;
