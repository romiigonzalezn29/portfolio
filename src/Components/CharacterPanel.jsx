import { useState } from 'react';
import s from './CharacterPanel.module.css';

export default function CharacterPanel({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('story'); // 'story' o 'experience'

  // Datos del personaje
  const character = {
    name: "Lyra",
    title: "Hechicera de Código",
    avatar: "🧙‍♀️",
    level: 8,
    
    // Historia del personaje (versión aventura)
    story: {
      origin: "Nacida entre pergaminos de código y runas digitales, Lyra descubrió su magia a temprana edad cuando logró hacer flotar su primer 'Hola Mundo' en el aire.",
      journey: "Recorrió los nueve reinos del desarrollo, desde los sombríos bosques del Backend hasta las brillantes torres de cristal del Frontend.",
      mission: "Su misión es tejer interfaces que conecten a los mortales con la magia digital, haciendo la tecnología accesible y hermosa."
    },
    
    // Experiencia laboral (versión aventura)
    experience: [
      {
        role: "🛡️ Arquitecta de Hechizos Frontend",
        company: "Reinos Tech",
        period: "2023 - Presente",
        description: "Lidero un gremio de hechiceros construyendo interfaces mágicas con React y TypeScript. He reducido los bugs (criaturas oscuras) en un 40%.",
        achievements: ["Implementé un sistema de diseño que ahorró 100 horas", "Mentoricé a 3 aprendices"]
      },
      {
        role: "⚔️ Guerrero de CSS",
        company: "Gremio Creativo",
        period: "2021 - 2023",
        description: "Domaba bestias de estilos y creaba layouts responsivos que se adaptaban a cualquier pantalla mágica.",
        achievements: ["Creé un sistema de componentes reutilizables", "Optimicé tiempos de carga en un 30%"]
      },
      {
        role: "📜 Aprendiz de JavaScript",
        company: "Torres del Conocimiento",
        period: "2019 - 2021",
        description: "Estudié los fundamentos de la magia digital, dominando los conjuros asíncronos y las estructuras de datos.",
        achievements: ["Certificación en Hechicería Avanzada", "Construí mi primer portal interactivo"]
      }
    ]
  };

  if (!isOpen) return null;

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.panel} onClick={(e) => e.stopPropagation()}>
        
        {/* Header del personaje */}
        <div className={s.header}>
          <div className={s.avatar}>{character.avatar}</div>
          <div className={s.headerInfo}>
            <h2 className={s.name}>{character.name}</h2>
            <p className={s.title}>{character.title}</p>
            <div className={s.levelBar}>
              <span>Nivel {character.level}</span>
              <div className={s.levelFill} style={{ width: `${character.level * 10}%` }}></div>
            </div>
          </div>
          <button className={s.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Pestañas */}
        <div className={s.tabs}>
          <button 
            className={`${s.tab} ${activeTab === 'story' ? s.active : ''}`}
            onClick={() => setActiveTab('story')}
          >
            📜 Historia
          </button>
          <button 
            className={`${s.tab} ${activeTab === 'experience' ? s.active : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            ⚔️ Aventuras Laborales
          </button>
        </div>

        {/* Contenido de Historia */}
        {activeTab === 'story' && (
          <div className={s.storyContent}>
            <div className={s.storySection}>
              <h3>🌍 Origen</h3>
              <p>{character.story.origin}</p>
            </div>
            <div className={s.storySection}>
              <h3>🗺️ Travesía</h3>
              <p>{character.story.journey}</p>
            </div>
            <div className={s.storySection}>
              <h3>✨ Misión</h3>
              <p>{character.story.mission}</p>
            </div>
          </div>
        )}

        {/* Contenido de Experiencia Laboral */}
        {activeTab === 'experience' && (
          <div className={s.experienceContent}>
            {character.experience.map((exp, index) => (
              <div key={index} className={s.experienceCard}>
                <div className={s.expHeader}>
                  <div className={s.expRole}>{exp.role}</div>
                  <div className={s.expPeriod}>{exp.period}</div>
                </div>
                <div className={s.expCompany}>{exp.company}</div>
                <p className={s.expDescription}>{exp.description}</p>
                <div className={s.expAchievements}>
                  {exp.achievements.map((ach, i) => (
                    <span key={i} className={s.achievement}>🏆 {ach}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer con pista visual */}
        <div className={s.footer}>
          <span className={s.hint}>⚡ Habilidades técnicas en el 📚 Libro Mágico</span>
        </div>
      </div>
    </div>
  );
}