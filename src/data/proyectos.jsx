import ruleta from '../assets/ruleta.gif'
import hh from '../assets/hh.gif'
import bioa from '../assets/bioa.gif'
import yo from '../assets/yo.png'
import bariatricline from '../assets/bariatricline.gif'

export const proyectos = {
  interactive: {
    title: "Ruleta Bariátrica",
    description: "Aplicación web diseñada para promover el aprendizaje y la concientización de forma dinámica y accesible, facilitando la incorporación de conocimientos clave relacionados con hábitos y cuidados de salud.",
    technologies: ["React", "CSS"],
    image: ruleta,
    link: "https://bariatric-trivia.vercel.app/"
  },
  house: {
    title: "Sobre mi",
    description: "Hola! Soy una desarrolladora web enfocada en crear interfaces interactivas y experiencias visuales atractivas, combinando diseño y lógica para construir aplicaciones dinámicas y funcionales.",
    technologies: ["Busco seguir creciendo como desarrolladora frontend, participando en proyectos donde pueda aportar soluciones creativas y mejorar la experiencia de las personas."],
    image: yo,
    link: "https://www.linkedin.com/in/romina-gonzalez-38a196232/",
    sectionTitle1: "¿Quién soy?",
    sectionTitle2: "Objetivo"

  },
  lab: {
    title: "Lab Project",
    description: "Herramienta...",
    technologies: ["API"],
    image: '../assets/lab.gif',
    link: "https://bariatric-trivia.vercel.app/"

  },
    front: {
    title: "Frontend Project",
    description: "Desarrollo de sitios web del sector salud con foco en experiencia de usuario, diseño responsivo y navegación intuitiva.",
    technologies: ["React ", "CSS ", "JavaScript ", "Bootstrap "],
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