import ruleta from '../assets/ruleta.gif'
import hh from '../assets/hh.gif'
import bioa from '../assets/bioa.gif'
import hub from '../assets/Hub.gif'
import yo from '../assets/yo.png'
import bariatricline from '../assets/bariatricline.gif'

export const proyectos = {


  interactive: {
    title: "Ruleta Bariátrica",
    description: "Aplicación web diseñada para promover el aprendizaje y la concientización de forma dinámica y accesible, facilitando la incorporación de conocimientos clave relacionados con hábitos y cuidados de salud.",
    technologies: ["Javascript", "CSS","HTML"],
    image: ruleta,
    link: "https://bariatric-trivia.vercel.app/"
  },

  lab: {
    title: "Hub Prestacional",
    description: "La solución reemplaza tareas manuales realizadas sobre Excel y aplicaciones externas, integrando validación de credenciales, procesamiento de XML médicos y autorización de estudios en una única interfaz. El proyecto permitió reducir errores operativos, mejorar la trazabilidad y optimizar los tiempos administrativos del equipo de facturación.",
    technologies: ["Python", "Pandas", "Streamlit", "XML", "APIs REST"],
    image: hub,
    link: hub

  },
    front: {
    title: "Desarrollo web",
    description: "Desarrollo de plataformas web orientadas al ecosistema de salud, combinando experiencia de usuario, identidad visual y soluciones digitales escalables. Los proyectos incluyen sitios corporativos, plataformas institucionales y e-commerce especializados. Se trabajó en arquitectura frontend moderna, integración de servicios y optimización de experiencia multiplataforma.",
    technologies: ["React ", "JavaScript ", "CSS ", "Bootstrap "],
    image: '../assets/front.gif',
    
    projects: [
    {
      name: "Bariatricline",
      link: "https://bariatricline.com.ar/",
      image:bariatricline,
    },
    {
      name: "HealthHolders",
      link: "https://healthholders.net/",
      image:hh,
    },
    {
      name: "Bioanalitica",
      link: "https://bioanalitica.la/",
      image:bioa,
    }
  ]

    }
};