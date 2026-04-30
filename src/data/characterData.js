// data/characterData.js

export const characterData = {
  name: "Romina Gonzalez",
  title: "Desarrolladora Web & Analista Funcional",
  avatar: "💻",
  level: 27,
  xp: 80,
  
  story: {
    origin: "Inicié mi camino en el mundo de la tecnología combinando desarrollo web con diseño de producto, lo que me permitió construir una base sólida tanto técnica como funcional. Mi enfoque siempre estuvo en entender el problema antes de desarrollar la solución.",
    
    journey: "He trabajado en proyectos end-to-end, participando en análisis de requerimientos, desarrollo e integración de sistemas. Mi experiencia en el sector salud me permitió interactuar con distintos perfiles, traduciendo necesidades del negocio en soluciones técnicas reales.",
    
    mission: "Mi objetivo es desarrollar soluciones eficientes y centradas en el usuario, aportando una visión integral que combine tecnología, procesos y experiencia de usuario."
  },
  
  experience: [
    {
      id: 1,
      role: "💻 Software Developer",
      company: "Rabbitsoft",
      period: "Nov 2024 - Actualidad",
      description: "Desarrollo de soluciones web y herramientas internas utilizando Python y tecnologías web. Trabajo en proyectos completos, desde el análisis hasta la implementación.",
      achievements: [
        "Desarrollo end-to-end de un hub de integración con OSDE",
        "Automatización de procesos internos",
        "Integración de sistemas mediante APIs",
        "Participación en definición de lógica de negocio"
      ],
      technologies: ["Python", "JavaScript", "React", "SQL"]
    },
    {
      id: 2,
      role: "🧠 Product Designer / Web Developer",
      company: "Rabbitsoft",
      period: "Feb 2023 - Nov 2024",
      description: "Diseño UX/UI y desarrollo web, participando en la definición de producto y experiencia de usuario en proyectos digitales.",
      achievements: [
        "Diseño de interfaces y prototipos funcionales",
        "Trabajo con stakeholders y equipos técnicos",
        "Documentación de funcionalidades y procesos",
        "Participación en eventos del sector salud"
      ],
      technologies: ["Figma", "HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      role: "📊 Secretaria Administrativa",
      company: "Consultorios Médicos Sarmiento",
      period: "2019 - 2022",
      description: "Gestión administrativa, organización de información y coordinación de tareas operativas.",
      achievements: [
        "Gestión de agendas y datos de pacientes",
        "Coordinación de equipo administrativo",
        "Optimización de procesos internos",
        "Atención y comunicación con pacientes y proveedores"
      ],
      technologies: ["Excel", "Sistemas administrativos"]
    }
  ],
   // Contacto (NUEVO)
  contact: {
    email: "lyra.codeweaver@example.com",
    linkedin: "https://linkedin.com/in/lyra-codeweaver",
    linkedinUsername: "lyra-codeweaver",
    github: "https://github.com/lyracodeweaver",
    githubUsername: "lyracodeweaver",
    cv: "/cv-lyra-codeweaver.pdf"
  },

  stats: [
    { name: "Análisis Funcional", value: 85, icon: "🧠" },
    { name: "Frontend", value: 80, icon: "🎨" },
    { name: "Backend & Data", value: 75, icon: "⚙️" },
    { name: "Integración de Sistemas", value: 82, icon: "🔗" },
    { name: "UX/UI", value: 78, icon: "📐" },
    { name: "Trabajo en Equipo", value: 90, icon: "🤝" }
  ],
  
  artifacts: [
    { name: "JavaScript", level: "Intermedio", icon: "📜" },
    { name: "React", level: "Intermedio", icon: "⚛️" },
    { name: "Python", level: "Intermedio", icon: "🐍" },
    { name: "SQL Server", level: "Intermedio", icon: "🗄️" },
    { name: "Git", level: "Intermedio", icon: "📦" },
    { name: "Figma", level: "Avanzado", icon: "🎨" },
    { name: "Jira", level: "Intermedio", icon: "📋" },
    { name: "Freshdesk", level: "Intermedio", icon: "🎧" }
  ],
  
  quotes: [
    "💡 'Entender el problema es la base de cualquier solución tecnológica'",
    "⚙️ 'La tecnología funciona mejor cuando está alineada al negocio'",
    "📊 'Los datos cuentan historias, hay que saber interpretarlas'",
    "🤝 'El trabajo en equipo es clave para construir mejores soluciones'"
  ]
};

export const characters = {
  romina: characterData,
};