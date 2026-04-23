// NPC.jsx modificado
import { useState, useEffect, useRef } from 'react';
import s from './NPC.module.css';
import sorceressSprite from '../assets/pj2-animacion.png';

export default function NPC() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [frame, setFrame] = useState(0);
  const animationRef = useRef(null);
  
  // Configuración de tu sprite sheet 6x6
  const SPRITE_WIDTH = 96;    // Ancho de cada fotograma
  const SPRITE_HEIGHT = 96;   // Alto de cada fotograma
  const COLS = 6;             // 6 columnas
  const ROWS = 6;             // 6 filas
  const TOTAL_FRAMES = COLS * ROWS; // 36 fotogramas
  const FRAME_DURATION = 50;  // Duración por fotograma en ms (ajústalo)

  // Animación con JavaScript
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame + 1) % TOTAL_FRAMES);
    }, FRAME_DURATION);
    
    return () => clearInterval(interval);
  }, []);

  // Calcular posición del fotograma actual
  const getBackgroundPosition = () => {
    const col = frame % COLS;
    const row = Math.floor(frame / COLS);
    const x = -col * SPRITE_WIDTH;
    const y = -row * SPRITE_HEIGHT;
    return `${x}px ${y}px`;
  };

  return (
    <div className={s.npcContainer}>
      <div 
        className={s.spriteAnimation}
        style={{ 
          backgroundImage: `url(${sorceressSprite})`,
          backgroundPosition: getBackgroundPosition(),
          backgroundSize: `${SPRITE_WIDTH * COLS}px ${SPRITE_HEIGHT * ROWS}px`
        }}
        onClick={() => setIsDialogOpen(!isDialogOpen)}
      >
        <div className={s.clickHint}>💬</div>
      </div>
      
      {/* Resto del componente igual... */}
      <div className={s.npcName}>
        Lyra
        <span className={s.npcTitle}>Hechicera de Código</span>
      </div>

      {isDialogOpen && (
        <div className={s.grimoire}>
          <button className={s.closeBtn} onClick={() => setIsDialogOpen(false)}>✕</button>
          <div className={s.greeting}>✨ ¡Saludos, viajero/a digital! ✨</div>
          <div className={s.intro}>Soy una tejedora de código...</div>
        </div>
      )}
    </div>
  );
}