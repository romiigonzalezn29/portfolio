import styles from "./Projects.module.css";
import { proyectos } from "../data/proyectos";

export default function Projects() {
  const handleProjectMouseEnter = (e) => {
    e.currentTarget.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
  };

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>

      <div className={styles.projectsGrid}>
        {Object.values(proyectos).map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onMouseEnter={handleProjectMouseEnter}
          >
            <div className={styles.projectImage}>
              <img
                src={project.projects?.[0]?.image || project.image}
                alt={project.title}
              />
            </div>

            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>

              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.projectTech}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.projects?.[0]?.link || project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Ver proyecto →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
