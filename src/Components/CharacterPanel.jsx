import { useState, useEffect } from 'react';
import s from './CharacterPanel.module.css';
import panelImage from '../assets/panel.png';
import { characterData } from '../data/characterData.js';

export default function CharacterPanel({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('story');
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    if (isOpen) {
      const quotes = characterData.quotes;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const refreshQuote = () => {
    const quotes = characterData.quotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(characterData.contact.email);
    alert('📧 Email copiado al portapapeles');
  };

  return (
    <div className={s.overlay} onClick={onClose}>
        <img src={panelImage} alt="" className={s.panelImage} />

      <div className={s.panel} 
      onClick={(e) => e.stopPropagation()}>
        {/* Header del personaje */}
        <div className={s.header}>
          <div className={s.avatar}>{characterData.avatar}</div>
          <div className={s.headerInfo}>
            <h2 className={s.name}>{characterData.name}</h2>
            <p className={s.title}>{characterData.title}</p>
            <div className={s.levelBar}>
              <span>Nivel {characterData.level}</span>
              <div className={s.levelFill} style={{ width: `${characterData.xp}%` }}></div>
              <span>{characterData.xp} XP</span>
            </div>
          </div>
          <button className={s.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Cita aleatoria */}
        <div className={s.quote}>
          <span className={s.quoteIcon}>🔮</span>
          <span className={s.quoteText}>{randomQuote}</span>
          <button className={s.quoteRefresh} onClick={refreshQuote}>↻</button>
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
            ⚔️ Aventuras
          </button>
          <button 
            className={`${s.tab} ${activeTab === 'contact' ? s.active : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            📬 Contacto
          </button>
        </div>

        {/* Contenido de Historia */}
        {activeTab === 'story' && (
          <div className={s.storyContent}>
            <div className={s.storySection}>
              <h3>🌍 Origen</h3>
              <p>{characterData.story.origin}</p>
            </div>
            <div className={s.storySection}>
              <h3>🗺️ Travesía</h3>
              <p>{characterData.story.journey}</p>
            </div>
            <div className={s.storySection}>
              <h3>✨ Misión</h3>
              <p>{characterData.story.mission}</p>
            </div>
          </div>
        )}

        {/* Contenido de Experiencia */}
        {activeTab === 'experience' && (
          <div className={s.experienceContent}>
            {characterData.experience.map((exp) => (
              <div key={exp.id} className={s.experienceCard}>
                <div className={s.expHeader}>
                  <div className={s.expRole}>{exp.role}</div>
                  <div className={s.expPeriod}>{exp.period}</div>
                </div>
                <div className={s.expCompany}>{exp.company}</div>
                <p className={s.expDescription}>{exp.description}</p>
                
                {exp.achievements && (
                  <div className={s.expAchievements}>
                    {exp.achievements.map((ach, i) => (
                      <span key={i} className={s.achievement}>🏆 {ach}</span>
                    ))}
                  </div>
                )}
                
                {exp.technologies && (
                  <div className={s.expTechnologies}>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className={s.techBadge}>🔧 {tech}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Contenido de Contacto */}
        {activeTab === 'contact' && (
          <div className={s.contactContent}>
            <div className={s.contactCard}>
              <h3>📫 ¿Cómo contactarme?</h3>
              <p className={s.contactIntro}>
                ¿Te interesa mi trabajo o quieres conversar sobre alguna aventura digital?
                Aquí tienes mis datos de contacto:
              </p>
              
              <div className={s.contactList}>
                <div className={s.contactItem} onClick={handleCopyEmail}>
                  <span className={s.contactIcon}>📧</span>
                  <div className={s.contactInfo}>
                    <span className={s.contactLabel}>Email</span>
                    <span className={s.contactValue}>{characterData.contact.email}</span>
                  </div>
                  <span className={s.copyHint}>Copiar</span>
                </div>

                <a 
                  href={characterData.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={s.contactItem}
                >
                  <span className={s.contactIcon}>🔗</span>
                  <div className={s.contactInfo}>
                    <span className={s.contactLabel}>LinkedIn</span>
                    <span className={s.contactValue}>/in/{characterData.contact.linkedinUsername}</span>
                  </div>
                  <span className={s.linkHint}>→</span>
                </a>

                <a 
                  href={characterData.contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={s.contactItem}
                >
                  <span className={s.contactIcon}>🐙</span>
                  <div className={s.contactInfo}>
                    <span className={s.contactLabel}>GitHub</span>
                    <span className={s.contactValue}>/{characterData.contact.githubUsername}</span>
                  </div>
                  <span className={s.linkHint}>→</span>
                </a>

                <a 
                  href={characterData.contact.cv} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={s.contactItem}
                >
                  <span className={s.contactIcon}>📄</span>
                  <div className={s.contactInfo}>
                    <span className={s.contactLabel}>Curriculum</span>
                    <span className={s.contactValue}>Descargar CV</span>
                  </div>
                  <span className={s.linkHint}>↓</span>
                </a>
              </div>

              <div className={s.contactFooter}>
                <span className={s.contactMagic}>✨ "Que la magia del código nos conecte" ✨</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}