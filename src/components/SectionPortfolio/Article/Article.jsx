
import Skills from '../../Skills/Skills';
import './Article.css'


function Article({titleProyect,textP,iconLink,skills, img=""}) {
  return (
   <article key={titleProyect} className='card'>
     
    {img !== "" && <section className='section-imagen-card'><img className='imagencard' src={img} alt="imagencard" /></section>}
    
    <section className='section-cuerpo-card'>
    <div className='headArticIcons'>
        <div><svg className='folderPortfolio' width='30px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 11V4.6a.6.6 0 0 1 .6-.6h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H21.4a.6.6 0 0 1 .6.6V11M2 11v8.4a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6V11M2 11h20"/>
        </svg></div>
        <div className='div-iconlink'> 
          {iconLink.map((link, index) => (
            <div key={index}>{link}</div>
          ))}
        </div>
    </div>
    <h3 className='proyect-title'>{titleProyect}</h3>
    <div>
    <p>{textP}</p>
   <Skills arraySkills={skills} />
    </div>

    </section>
   </article>
  );
}

export default Article;
