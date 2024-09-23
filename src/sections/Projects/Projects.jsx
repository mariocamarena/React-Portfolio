import styles from './ProjectsStyles.module.css';
import ProjectOne from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return (
    <section id="projects" className={styles.projectsContainer}>
      <div className={styles.projectTile}>
        <img src={ProjectOne} alt="Project 1" className={styles.projectImage} />
        <div className={styles.projectDetails}>
          <h3 className={styles.projectTitle}>Project 1</h3>
          <p className={styles.projectDescription}>
            A brief description of the project. This description expands on hover.
          </p>
          <div className={styles.projectLink}>
            <button>View on GitHub</button>
          </div>
        </div>
      </div>

      <div className={styles.projectTile}>
        <img src={ProjectOne} alt="Project 2" className={styles.projectImage} />
        <div className={styles.projectDetails}>
          <h3 className={styles.projectTitle}>Project 2</h3>
          <p className={styles.projectDescription}>
            A brief description of the project. This description expands on hover.
          </p>
          <div className={styles.projectLink}>
            <button>View on GitHub</button>
          </div>
        </div>
      </div>

      <div className={styles.projectTile}>
        <img src={ProjectOne} alt="Project 2" className={styles.projectImage} />
        <div className={styles.projectDetails}>
          <h3 className={styles.projectTitle}>Project 2</h3>
          <p className={styles.projectDescription}>
            A brief description of the project. This description expands on hover.
          </p>
          <div className={styles.projectLink}>
            <button>View on GitHub</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

