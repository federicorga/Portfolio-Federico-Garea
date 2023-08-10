
import Skills from '../../Skills/Skills';
import './Article.css'


function Article({titleProyect,textP,iconLink,skills}) {
  return (
   <article>
    <div className='headArticIcons'>
        <div><svg className='folderPortfolio' width='30px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 11V4.6a.6.6 0 0 1 .6-.6h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H21.4a.6.6 0 0 1 .6.6V11M2 11v8.4a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6V11M2 11h20"/>
        </svg></div>
        <div className='div-iconlink'>
        {iconLink}
        </div>
    </div>
    <h3 className='proyect-title'>{titleProyect}</h3>
    <p>{textP}</p>
   <Skills arraySkills={skills} />
   </article>
  );
}

export default Article;
