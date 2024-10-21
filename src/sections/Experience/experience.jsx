import React from 'react';
import styles from './ExperienceStyles.module.css';

function Experience() {
  const experiences = [
    {
      jobTitle: 'dev',
      company: 'Tech',
      dates: '0000 - Present',
      description: 'des',
    },
    {
        jobTitle: 'dev',
        company: 'Tech',
        dates: '0000 - Present',
        description: 'des',
      },
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.experienceContainer}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experienceCard}>
            <h3 className={styles.jobTitle}>{experience.jobTitle}</h3>
            <p className={styles.company}>{experience.company}</p>
            <p className={styles.dates}>{experience.dates}</p>
            <p className={styles.description}>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
