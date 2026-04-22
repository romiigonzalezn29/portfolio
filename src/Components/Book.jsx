// Book.jsx
import bookopen from "../assets/book.png";
import s from "./Book.module.css";
import { useState } from "react";

export default function Book({ onClose }) {
  // Añade onClose como prop
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <div className={s.overlay}>
      <div className={s.blur} onClick={onClose}></div>{" "}
      {/* Cierra al hacer click fuera */}
      <div className={s.container}>
        <button className={s.closeButton} onClick={onClose}>
          ✕
        </button>{" "}
        {/* Botón de cerrar */}
        <img src={bookopen} alt="Book" className={s.bookimage} />
        <div className={s.tabs}>
          <button
            className={`${s.tab} ${activeTab === "Skills" ? s.active : ""}`}
            onClick={() => setActiveTab("Skills")}
          >
            Skills
          </button>
          <button
            className={`${s.tab} ${activeTab === "Tools" ? s.active : ""}`}
            onClick={() => setActiveTab("Tools")}
          >
            Tools
          </button>
          <button
            className={`${s.tab} ${activeTab === "Soft" ? s.active : ""}`}
            onClick={() => setActiveTab("Soft")}
          >
            Soft
          </button>
        </div>
        <div className={s.content}>
          {activeTab === "Skills" && (
            <div className={s.skillTab}>
              <div className={s.intro}>
              <h3 className={s.title}>SKILLS</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum deserunt saepe voluptatibus enim tempore voluptas odio dignissimos libero, consequatur similique incidunt explicabo odit error dolores cupiditate! Consequatur, debitis? Deserunt!</p>

              </div>
              
              
              <div className={s.skillsContainer}>
                <h4 className={s.subtitle} >FRONTEND</h4>
                <div className={s.skill}>
                  <span>React</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>

                <div className={s.skill}>
                  <span>Javascript</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>

                <div className={s.skill}>
                  <span>CSS</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>
                <div className={s.skill}>
                  <span>HTML</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>
                <h4 className={s.subtitle} >BACKEND</h4>
                <div className={s.skill}>
                  <span>SQL</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>
                <div className={s.skill}>
                  <span>Phyton</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {activeTab === 'Tools' && (
            <div className={s.skillTab}>
              <div className={s.intro}>
              <h3 className={s.title}>TOOLS</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum deserunt saepe voluptatibus enim tempore voluptas odio dignissimos libero, consequatur similique incidunt explicabo odit error dolores cupiditate! Consequatur, debitis? Deserunt!</p>

              </div>
              
              
              <div className={s.skillsContainer}>
                <h4 className={s.subtitle} >Tools/tecnologias</h4>
                <div className={s.skill}>
                  <span>Git/Github</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>

                <div className={s.skill}>
                  <span>Postman</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>

                <div className={s.skill}>
                  <span>Jira</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>
                <div className={s.skill}>
                  <span>Excel</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>
                <h4 className={s.subtitle} >Product & UX</h4>
                <div className={s.skill}>
                  <span>Prototipado</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>
                <div className={s.skill}>
                  <span>UX/UI Design</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>
                <div className={s.skill}>
                  <span>User Research</span>
                  <div className={s.level}>
                    
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.blockEmpty}></div>
                    <div className={s.blockEmpty}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Soft' && (
            <div className={s.skillTab}>
              <div className={s.intro}>
              <h3 className={s.title}>SOFTSKILLS</h3>
              <p>
  Me enfoco en entender problemas reales y transformarlos en soluciones claras, combinando
  pensamiento analítico, experiencia técnica y una fuerte orientación al usuario.
</p>
              </div>
              
              
              <div className={ `${s.skillsContainer} ${s.soft}`}>
                
       <div className={s.softItem}>
  <h5 className={s.softTitle}>Análisis de requerimientos</h5>
  <p className={s.softDesc}>Interpretación clara de necesidades</p>
</div>

<div className={s.softItem}>
  <h5 className={s.softTitle}>Pensamiento analítico</h5>
  <p className={s.softDesc}>Evaluación lógica de problemas</p>
</div>

<div className={s.softItem}>
  <h5 className={s.softTitle}>Resolución de problemas</h5>
  <p className={s.softDesc}>Soluciones eficientes y prácticas</p>
</div>

<div className={s.softItem}>
  <h5 className={s.softTitle}>Comunicación</h5>
  <p className={s.softDesc}>Ideas claras para usuarios</p>
</div>

<div className={s.softItem}>
  <h5 className={s.softTitle}>Autonomía</h5>
  <p className={s.softDesc}>Gestión independiente de tareas</p>
</div>

<div className={s.softItem}>
  <h5 className={s.softTitle}>Adaptabilidad</h5>
  <p className={s.softDesc}>Aprendizaje rápido y flexible</p>
</div>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
