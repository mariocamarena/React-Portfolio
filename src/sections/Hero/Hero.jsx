import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  return (
    <section id='hero' className={styles.container}>
      <div>
        <img className={styles.hero} src={heroImg} alt="Main hero img" />
      </div>

      <div className={styles.info}>
        <h1>Mario<br />Camarena</h1>
        <h2>Type of dev</h2>

        <span>
          <a href="https://www.linkedin.com/in/mario-camarena-044ab9255/" target='_blank' rel="noopener noreferrer">
            <img src={linkedinLight} alt="LinkedIn icon" />
          </a>
          <a href="https://github.com/mariocamarena" target='_blank' rel="noopener noreferrer">
            <img src={githubLight} alt="GitHub icon" />
          </a>
        </span>

        <p className={styles.description}>This is a paragraph that is short and to the point.</p>

        <a href={CV}>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
