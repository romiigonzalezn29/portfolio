import cv from "../assets/cv.pdf"
import avatar from "../assets/pjpreview.png"

export const characterData = {
  name: "Romina Gonzalez",
  title: "⚔️ Product Designer & Software Developer",
  avatar: avatar,
  level: 27,
  xp: 85,

  story: {
    origin:
      "Mi aventura comenzó en el Reino de la Salud, donde aprendí a organizar procesos, coordinar equipos y ayudar a las personas a resolver desafíos cotidianos. Con el tiempo descubrí la magia del desarrollo de software y emprendí un nuevo camino para transformar problemas complejos en soluciones digitales.",

    journey:
      "Mi camino me llevó por los reinos del diseño de producto, UX/UI, desarrollo web e integración de sistemas. He acompañado proyectos desde el descubrimiento de oportunidades y la comprensión de las necesidades de los usuarios hasta la construcción e implementación de soluciones digitales. En cada aventura aprendí a unir estrategia, experiencia y tecnología para transformar desafíos complejos en herramientas útiles y significativas.",

    mission:
      "Mi misión es crear herramientas digitales que mejoren la experiencia de quienes las utilizan, combinando análisis, diseño y desarrollo para convertir ideas en productos funcionales, escalables y con impacto real."
  },

  experience: [
    {
      id: 1,
      role: "✦ Software Developer",
      company: "Health Holders - Rabbitsoft",
      period: "Nov 2024 - Actualidad",
      description:
        "Desarrollo de soluciones web, automatizaciones e integraciones para el sector salud. Participación en proyectos completos desde el análisis hasta la puesta en producción.",

      achievements: [
        "Desarrollé un portal de integración con OSDE para validación de prestaciones",
        "Implementé automatizaciones para optimizar procesos internos",
        "Integré sistemas mediante APIs REST",
        "Transformé necesidades de negocio en soluciones técnicas"
      ],

      technologies: ["Python", "JavaScript", "SQL", "APIs REST"]
    },

    {
      id: 2,
      role: "✦ Product Designer & Web Developer",
      company: "Health Holders - Rabbitsoft",
      period: "Feb 2023 - Nov 2024",
      description:
        "Diseño y desarrollo de productos digitales centrados en el usuario, combinando UX/UI, desarrollo web y definición funcional. Colaboración con stakeholders, equipos técnicos y usuarios finales para transformar necesidades de negocio en soluciones digitales.",

      achievements: [
        "Diseñé experiencias UX/UI desde research hasta prototipos",
        "Participé en la definición de funcionalidades y estrategia de producto",
        "Representé la aplicación en congresos del sector salud",
        "Capacité usuarios y equipos en el uso de la plataforma"
      ],

      technologies: ["Figma","Jira", "React", "JavaScript", "SQL", "CSS"]
    },

  ],

  contact: {
    email: "rominagonzalezn29@gmail.com",
    linkedin: "https://www.linkedin.com/in/romina-gonzalez-38a196232",
    linkedinUsername: "romina-gonzalez",
    github: "https://github.com/romiigonzalezn29",
    githubUsername: "romiigonzalezn29",
    cv: cv
  },

  quotes: [
    "☙ 'Todo gran producto comienza entendiendo a las personas.' ❧",
    "☙ 'Cada problema es una misión; cada solución, una nueva habilidad desbloqueada.' ❧",
    "☙ 'La mejor tecnología es la que simplifica la vida de quienes la usan.' ❧",
    "☙ 'Diseño, desarrollo y negocio funcionan mejor cuando avanzan en la misma dirección.' ❧"
  ]
};


export const characters = { romina: characterData, };