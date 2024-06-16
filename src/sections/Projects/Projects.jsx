import styles from './ProjectsStyles.module.css';
import ProjectOne from '../../assets/viberr.png';
function Projects() {
  return (
    <section id ="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/mariocamarena/flappy_bird_concept_game">
            <img className='hover'src={ProjectOne} alt="project #1 logo" />
            <h3>Flappy Bird</h3>
            <p>Streaming App</p>
        </a>
      </div>
    </section>
  )
}

export default Projects
