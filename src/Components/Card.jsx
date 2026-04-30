import s from './Card.module.css'
import marco from '../assets/card.png'

export default function Card({
  title,
  description,
  technologies,
  image,
  theme,
  link,
  projects,
  sectionTitle1,
  sectionTitle2,
  onClose
}){
const isMultiProject = projects && projects.length > 1;
    return(
 <div className={s.overlay} onClick={onClose}
 style={{
    "--color-main": theme.main,
    "--color-hover": theme.hover,
    "--color-soft": theme.soft,
    "--color-dark": theme.dark,
    "--color-shadow": theme.shadow,
    "--color-glow": theme.glow,
    "--color-glow-soft": theme.glowSoft
  }}>
  <div className={s.blur} ></div>

  <h3 className={s.cardTitle}>{title}</h3>

  <div className={`${s.card} ${isMultiProject ? s.multiLayout : s.singleLayout}`} onClick={(e) => e.stopPropagation()}>

    <img src={marco} alt={title} className={s.cardImage}/>
    
    
      <div className={`${s.proyectosContainer} ${isMultiProject ? s.multi : s.single}`}>
  {(projects || [{ image, link }]).map((proj, i) => (
    <div key={i} className={s.proyecto}>
      <a href={proj.link || link}
      target="_blank"
      rel="noopener noreferrer"
      >
        <img src={proj.image} alt={title} className={s.muestra} />
      </a>
    </div>
  ))}
</div>


    <div className={s.contenedor}>
  
  <div className={s.info}>
    <h4 className={s.subTitle}>{sectionTitle1 || "Descripción"}</h4>
    <p className={s.cardDescription}>{description}</p>

    <h4 className={s.subTitle}>{sectionTitle2 || "Tecnologías"}</h4>
    <div className={s.tecnologias}>
      {technologies.map((tech, i) => (
        <span key={i} className={s.tecnologia}>
          {tech}
        </span>
      ))}
    </div>
  </div>

<div className={s.actions}>
 
    <button className={`${isMultiProject ? s.oculto : s.project} ${s.btnTheme}`}>
      <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={s.projectBtn}
    >
      Ver proyecto
    </a>
    </button>
    

  <button className={` ${s.closeBtn} ${s.btnTheme}`} onClick={onClose}>
    Cerrar
  </button>
</div>

</div>
  </div>
</div>
    )
}