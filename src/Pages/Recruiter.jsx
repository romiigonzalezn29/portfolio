import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../Components/ThemeContext.jsx";
import { characterData } from "../data/characterData.js";
import { Mail, Phone, FileUser } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./Recruiter.module.css";
import ThemeToggle from "../Components/ThemeToggle.jsx";
import Projects from "../Components/Projects.jsx";

const Recruiter = () => {
  const { isDark } = useTheme();
  const skillRefs = useRef([]);

  // Observer para animaciones de habilidades
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillFills = entry.target.querySelectorAll(
            `.${styles.skillFill}`,
          );
          skillFills.forEach((fill) => {
            const width = fill.style.width;
            fill.style.width = "0";
            setTimeout(() => {
              fill.style.width = width;
            }, 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    skillRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Datos de experiencia
  const experiences = [
  {
    id: 1,
    role: "✦ Software Developer | HealthTech Solutions",
    company: "Health Holders - Rabbitsoft",
    period: "Nov 2024 - Actualidad",
    description:
      "Desarrollo de soluciones digitales para el sector salud, participando en todo el ciclo de vida del software: análisis funcional, diseño técnico, desarrollo, integración de sistemas y puesta en producción. Trabajo de manera autónoma en proyectos end-to-end orientados a optimizar procesos y mejorar la interoperabilidad entre plataformas.",
    achievements: [
      "Lideré el desarrollo integral de un hub de integración con OSDE para validación de prestaciones médicas, desde el relevamiento de requerimientos hasta su implementación",
      "Diseñé e implementé automatizaciones que redujeron tareas operativas y mejoraron la eficiencia de procesos internos",
      "Desarrollé integraciones mediante APIs REST para intercambio seguro de información entre sistemas de salud",
      "Participé en la definición de soluciones técnicas alineadas con necesidades de negocio y experiencia de usuario"
    ],
    tech: ["Python", "JavaScript", "SQL Server", "REST APIs"],
  },

  {
    id: 2,
    role: "✦ Product Designer & Web Developer",
    company: "Health Holders - Rabbitsoft",
    period: "Feb 2023 - Nov 2024",
    description:
      "Participé en la creación y evolución de productos digitales para salud, combinando diseño UX/UI, desarrollo web y definición funcional. Colaboré estrechamente con equipos multidisciplinarios para transformar necesidades de usuarios y stakeholders en soluciones digitales escalables.",
    achievements: [
      "Diseñé experiencias centradas en el usuario, desde investigación y wireframes hasta prototipos interactivos de alta fidelidad",
      "Contribuí a la estrategia y definición funcional del producto, participando en la priorización y validación de funcionalidades",
      "Desarrollé interfaces web responsivas alineadas con criterios de usabilidad y accesibilidad",
      "Representé la plataforma en congresos y eventos del sector salud, presentando funcionalidades y propuestas de valor a audiencias técnicas y de negocio",
      "Capacité usuarios y equipos internos, facilitando la adopción de nuevas funcionalidades y procesos"
    ],
    tech: ["Figma", "React", "JavaScript", "UX/UI", "CSS"],
  },
];

  // Datos de habilidades
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS Modules",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      title: "Backend & Datos",
      skills: ["Python", "SQL", "Pandas", "XML", "Streamlit"],
    },
    {
      title: "UX/UI & Producto",
      skills: [
        "Figma",
        "Wireframing",
        "Prototipado",
        "Design Systems",
        "User Flows",
      ],
    },
    {
      title: "Integraciones",
      skills: [
        "REST APIs",
        "Automatización",
        "Validación Prestacional",
        "Sistemas de Salud",
      ],
    },
  ];

  // Quotes
  const quotes = [
  "Las mejores soluciones aparecen cuando se entiende el problema antes de escribir una sola línea de código.",
  "Disfruto conectar necesidades de negocio, experiencia de usuario y desarrollo en una misma solución.",
  "La tecnología tiene más valor cuando simplifica el trabajo de las personas.",
];

  // Efecto hover en proyectos
  const handleProjectMouseEnter = (e) => {
    e.currentTarget.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
  };
  const handleCvClick = () => {
    console.log(characterData.contact.cv);
  };

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.avatar}>
          <img src={characterData.foto} alt="Avatar" />
        </div>

        <h1 className={styles.name}>Romina Gonzalez</h1>
        <p className={styles.title}>Product Designer & Software Developer</p>
        <p className={styles.location}>
  Buenos Aires, Argentina
</p>

        <div className={styles.contactSection}>
  <a
    href="mailto:rominagonzalezn29@gmail.com"
    className={styles.contactItem}
  >
    <Mail size={16} />
    <div>
      <small>Email</small>
      <span>rominagonzalezn29@gmail.com</span>
    </div>
  </a>

  <a
    href="https://wa.me/5491138096167?text=Hola%20Romina,%20vi%20tu%20portfolio%20y%20quisiera%20contactarte."
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactItem}
  >
    <Phone size={16} />
    <div>
      <small>Teléfono</small>
      <span>+54 9 11 3809-6167</span>
    </div>
  </a>

  <a
    href="https://www.linkedin.com/in/romina-gonzalez-38a196232/"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactItem}
  >
    <FaLinkedinIn size={16} />
    <div>
      <small>LinkedIn</small>
      <span>Ir al perfil</span>
    </div>
  </a>

    <a
    href={characterData.contact.cv}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactItem}
  >
    <FileUser size={16} />
    <div>
      <small>Curriculum</small>
      <span>Ver cv</span>
    </div>
  </a>

         
</div>
        
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Experiencia */}
        <section className={styles.experienceSection}>
          <h2 className={styles.sectionTitle}>Experiencia Profesional</h2>
          <div className={styles.timeline}>
            {experiences.map((exp) => (
              <div key={exp.id} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
                <div className={styles.techStack}>
                  {exp.tech.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos*/}
        <Projects />

        {/* Habilidades */}
        <section className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>

          <div className={styles.skillsGrid}>
            {skillGroups.map((group) => (
              <div key={group.title} className={styles.skillCard}>
                <div className={styles.skillCategory}>{group.title}</div>

                <div className={styles.skillsList}>
                  {group.skills.map((skill) => (
                    <span key={skill} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quotes */}
        <section className={styles.quotesSection}>
          {quotes.map((quote, idx) => (
            <div key={idx} className={styles.quote}>
              "{quote}"
            </div>
          ))}
        </section>
      </main>

      {/* Botón de tema oscuro/claro */}
      <ThemeToggle />
    </div>
  );
};

export default Recruiter;
