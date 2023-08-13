import './SectionSkills.css'
import Title from "../ElementTitle/Titles/Title";
import Subtitle from "../ElementTitle/Subititle/Subtitle";
import Skills from "../Skills/Skills";
function SectionSkills() {
  return (
    <>
    <Title id='skills' text='Skills'/>
    <p  className="textDescrp">De las habilidades que poseo, destaco algunas de ellas. Actualmente continúo en constante desarrollo.</p>
    <h2 className='TitleSectSkill'>SKILLS</h2> 
    <h3 className="subTitleSectSkill">Frontend</h3>
    <Skills arraySkills={['HTML','CSS','SASS', 'JavaScript', 'React','Boostrap', 'Git', 'GitHub & GitLab','FireBase', 'Filezilla','Diseño responsive', 'Accesibilidad web', 'SEO' ,'Librerías & Frameworks']} />
    <h3 className="subTitleSectSkill">Backend</h3>
    <Skills arraySkills={['NodeJS','NPM','API REST','Servidor web', 'Express', 'Passport', 'MongoDB', 'Postman','Docker','Artillery testing', 'Motor de plantillas', 'Patrón de diseño','Librerías & Frameworks' ]} />
   
    <h2 className='TitleSectSkill'>SOFTWARE</h2>
    <Skills arraySkills={['Visual Studio', 'Visual Studio Code','Postman','Filezilla','Microsoft Office','Docker Desktop', 'Adobe Photoshop','Adobe Ilustraitor' ]} />

    <h2 className='TitleSectSkill'>IDIOMA</h2>
    <Skills arraySkills={['Español(Nativo)', 'Ingles(Técnico)' ]} />

    <Subtitle text='Skills'/>
    
    </>
  );
}

export default SectionSkills;
