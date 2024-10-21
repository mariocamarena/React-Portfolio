import React from 'react';
import styles from './SkillsStyles.module.css';

function Skills() {
  const skills = {
    languages: ['temp', 'temp','temp','temp'],
    frameworks: ['temp','temp','temp','temp'],
    tools: ['temp','temp','temp','temp'],
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.skillsContainer}>
        {/* Languages */}
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Languages</h3>
          <div className={styles.skillList}>
            {skills.languages.map((skill, index) => (
              <span key={index} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Frameworks</h3>
          <div className={styles.skillList}>
            {skills.frameworks.map((skill, index) => (
              <span key={index} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Tools</h3>
          <div className={styles.skillList}>
            {skills.tools.map((skill, index) => (
              <span key={index} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
