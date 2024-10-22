import React from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectOne from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Flappy Bird Clone',
      description: 'projectprojectproject',
      image: ProjectOne,
      link: 'https://github.com/mariocamarena/',
    },
    {
      title: 'project',
      description: 'projectprojectprojectproject.',
      image: ProjectOne, // Replace with actual image path
      link: 'https://github.com/mariocamarena/',
    },
    {
      title: 'project',
      description: 'projectprojectprojectproject',
      image: ProjectOne, // Replace with actual image path
      link: 'https://github.com/mariocamarena/',
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;


