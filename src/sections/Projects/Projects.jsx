import styles from './ProjectsStyles.module.css';
import ProjectOne from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const projectList = [
    {
      src: ProjectOne,
      link: "https://github.com/mariocamarena/flappy_bird_concept_game",
      h3: "Flappy Bird Concept Game",
      p: "This is a description of the Flappy Bird project."
    },
    {
      src: ProjectOne,
      link: "https://github.com/mariocamarena/another_project",
      h3: "Another Project",
      p: "This is a description of another project."
    },
    {
      src: ProjectOne,
      link: "https://github.com/mariocamarena/yet_another_project",
      h3: "Yet Another Project",
      p: "This is a description of yet another project."
    }
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
