// Welcome.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Importar useNavigate
import s from "./Welcome.module.css"
import st from "../Components/CharacterPanel/CharacterPanel.module.css"
import sty from "../Components/Map/Map.module.css"
import { characterData } from '../data/characterData';

export default function Welcome() {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate() // Hook para navegación

  const handleDesktopClick = () => {
    setIsOpen(false) // Solo cierra el modal, se queda en desktop
  }

  const handleRecruiterClick = () => {
    navigate('/recruiter') // Redirige a la versión recruiter
  }

  if (!isOpen) return null

  return(
    <div className={st.overlay}>
      <div className={st.panel} onClick={(e) => e.stopPropagation()}>
        <div className={st.topDecoration}>✦ ✦ ✦</div>
        <div className={st.bottomDecoration}>✦ ✦ ✦</div>
        
        <div className={st.header}>
          <img src={characterData.avatar} alt={characterData.name} className={st.avatar} />
          <div className={st.quote}>
            <p className={`${st.quoteText} ${s.message}`}>
              Hola! Este portfolio está pensado para verse en desktop. 
              Si te encuentras utilizando un mobile o prefieres una versión más sobria, 
              ve a la versión recruiter.
            </p>
          </div>
        </div>
        
        <div className={s.buttons}> 
          <button 
            className={`${sty.btnTheme} ${sty.themeFront}`} 
            onClick={handleDesktopClick}
          >
            Desktop
          </button>
          <button 
            className={`${sty.btnTheme} ${sty.themeFront}`} 
            onClick={handleRecruiterClick}
          >
            Recruiter
          </button>
        </div>
      </div>
    </div>
  )
}