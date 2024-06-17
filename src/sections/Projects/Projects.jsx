import styles from './ProjectsStyles.module.css';
import ProjectOne from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id ="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
        src={ProjectOne} 
        link="https://github.com/mariocamarena/flappy_bird_concept_game"
        h3="flappy_bird_concept_game"
        p = "this is a description"
        />
        <ProjectCard 
        src={ProjectOne} 
        link="https://github.com/mariocamarena/flappy_bird_concept_game"
        h3="flappy_bird_concept_game"
        p = "this is a description"
        />
        <ProjectCard 
        src={ProjectOne} 
        link="https://github.com/mariocamarena/flappy_bird_concept_game"
        h3="flappy_bird_concept_game"
        p = "this is a description"
        />
      </div>
    </section>
  )
}

export default Projects
