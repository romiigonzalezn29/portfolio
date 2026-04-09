import s from './Card.module.css'
import marco from '../assets/card.png'

export default function Card({
  title,
  description,
  technologies,
  image,
  theme,
  link,
  onClose
}){
    
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

  <div className={s.card} onClick={(e) => e.stopPropagation()}>


    <img src={image} alt={title} className={s.cardImage} />

    <div className={s.proyecto}></div>

    <div className={s.contenedor}>
  
  <div className={s.info}>
    <h4 className={s.subTitle}>Descripción</h4>
    <p className={s.cardDescription}>{description}</p>

    <h4 className={s.subTitle}>Tecnologías</h4>
    <div className={s.tecnologias}>
      {technologies.map((tech, i) => (
        <span key={i} className={s.tecnologia}>
          {tech}
        </span>
      ))}
    </div>
  </div>

  <div className={s.actions}>
    <button className={s.projectBtn}><a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className={s.projectBtn}
>
  Ver proyecto
</a></button>
    <button className={s.closeBtn} onClick={onClose}>
      Cerrar
    </button>
  </div>

</div>
  </div>
</div>
    )
}
