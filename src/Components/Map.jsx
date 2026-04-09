import { useState } from "react";
import s from './Map.module.css'

import house from '../assets/house.png'
import front from '../assets/front.png'
import interative from '../assets/interactive.png'
import lab from '../assets/lab.png'

import Card from "./Card";
import { proyectos } from "../data/proyectos";

export default function Map(){
  const [activeCard, setActiveCard] = useState(null);
  const [theme, setTheme] = useState({});

  const handleOpenCard = (key, e) => {
  const styles = getComputedStyle(e.currentTarget);

  const newTheme = {
    main: styles.getPropertyValue("--color-main"),
    hover: styles.getPropertyValue("--color-hover"),
    soft: styles.getPropertyValue("--color-soft"),
    dark: styles.getPropertyValue("--color-dark"),
    shadow: styles.getPropertyValue("--color-shadow"),
    glow: styles.getPropertyValue("--color-glow"),
    glowSoft: styles.getPropertyValue("--color-glow-soft")
  };

  setTheme(newTheme);
  setActiveCard(key);
};

  return(
    <>
      <div className={s.map}>

        {/* HOUSE */}
        <button 
          className={s.btnHouse}
          onClick={(e) => handleOpenCard("house", e)}
        >
          Casa
        </button>

        <img 
          src={house} 
          alt='Casa' 
          className={s.site} 
          id={s.house}
          onClick={() => setActiveCard("house")}
        />

        {/* FRONT */}
        <button 
          className={s.btnFront}
          onClick={(e) => handleOpenCard("front", e)}
        >
          Frontend
        </button>

        <img 
          src={front} 
          alt='Front' 
          className={s.site} 
          id={s.front}
          onClick={() => setActiveCard("front")}
        />

        {/* LAB */}
        <button 
          className={s.btnLab}
          onClick={(e) => handleOpenCard("lab", e)}
        >
          Laboratorio
        </button>

        <img 
          src={lab} 
          alt='lab' 
          className={s.site} 
          id={s.lab}
          onClick={() => setActiveCard("lab")}
        />

        {/* INTERACTIVE */}
        <button 
          className={s.btnInt}
          onClick={(e) => handleOpenCard("interactive", e)}
        >
          Entretenimiento
        </button>

        <img 
          src={interative} 
          alt='Interactive' 
          className={s.site} 
          id={s.interative}
          onClick={() => setActiveCard("interactive")}
        />

      </div>

      {/* CARD */}
      {activeCard && (
        <Card
          {...proyectos[activeCard]}
        theme={theme}
        onClose={() => setActiveCard(null)}
        />
      )}
    </>
  )
}