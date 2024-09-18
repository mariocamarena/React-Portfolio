import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.nameAndLines}>
        <div className={styles.lineTop}></div> {/* Decorative top line */}
        <div className={styles.nameContainer}>
          <h1 className={styles.firstName}>Mario</h1>
          <h1 className={styles.lastName}>Camarena</h1>
        </div>
        <div className={styles.lineBottom}></div> {/* Decorative bottom line */}
      </div>

      <div className={styles.layoutContainer}>
        <div className={styles.leftSection}>
          <img className={styles.heroImage} src={heroImg} alt="Mario Camarena" />
          <p className={styles.devType}>Full-Stack Developer</p> {/* Type of developer text */}
          <div className={styles.socialAndResume}>
            <a href="https://www.linkedin.com/in/mario-camarena-044ab9255/" target='_blank' rel="noopener noreferrer">
              <img src={linkedinLight} alt="LinkedIn icon" className={styles.icon} />
            </a>
            <a href="https://github.com/mariocamarena" target='_blank' rel="noopener noreferrer">
              <img src={githubLight} alt="GitHub icon" className={styles.icon} />
            </a>
            <a href={CV}>
              <button className='hover'>
                Resume
              </button>
            </a>
          </div>
        </div>

        <div className={styles.centerSection}>
          <div className={styles.aboutMeSection}>
            <p className={styles.aboutMeText}>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
            </p> {/* About Me section */}
          </div>
          <div className={styles.contactSection}>
            <h2>Contact Me</h2>
            {/* Add your contact form or details here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
