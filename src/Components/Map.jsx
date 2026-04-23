import { useState } from "react";
import s from './Map.module.css'
import Book from "./Book";
import house from '../assets/house.png'
import front from '../assets/front.png'
import interative from '../assets/interactive.png'
import lab from '../assets/lab.png'
import bookimage from '../assets/skills.png'
import Card from "./Card";
import NPC from "./NPC";

import { proyectos } from "../data/proyectos";

export default function Map() {
  const [activeCard, setActiveCard] = useState(null);
  const [isBookOpen, setIsBookOpen] = useState(false);
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

  return (
    <>
      <div className={s.map}>
        {/* BOOK */}
        <img 
          src={bookimage} 
          alt='Skills' 
          className={s.site} 
          id={s.book} 
          onClick={() => setIsBookOpen(true)}
        />
        {/* NPC */}

        <NPC/>
        
        {/* FRONTEND */}
        <button 
          className={`${s.btnTheme} ${s.btnFront} ${s.themeFront}`}
          onClick={(e) => handleOpenCard("front", e)}
        >
          Frontend
        </button>

        <img 
          src={front} 
          alt='Front' 
          className={`${s.site} ${s.themeFront}`}
          id={s.front}
          onClick={(e) => handleOpenCard("front", e)}
        />

        {/* LABORATORIO */}
        <button 
          className={`${s.btnTheme} ${s.btnLab} ${s.themeLab}`}
          onClick={(e) => handleOpenCard("lab", e)}
        >
          Laboratorio
        </button>

        <img 
          src={lab} 
          alt='lab' 
          className={`${s.site} ${s.themeLab}`}
          id={s.lab}
          onClick={(e) => handleOpenCard("lab", e)}
        />

        {/* INTERACTIVE */}
        <button 
          className={`${s.btnTheme} ${s.btnInt} ${s.themeInteractive}`}
          onClick={(e) => handleOpenCard("interactive", e)}
        >
          Entretenimiento
        </button>

        <img 
          src={interative} 
          alt='Interactive' 
          className={`${s.site} ${s.themeInteractive}`}
          id={s.interative}
          onClick={(e) => handleOpenCard("interactive", e)}
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

      {/* BOOK */}
      {isBookOpen && (
        <Book onClose={() => setIsBookOpen(false)} />
      )}
    </>
  );
}