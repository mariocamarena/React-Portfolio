import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'

import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'

import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id = 'hero' className = {styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero} 
                src={heroImg} 
                alt="Main hero img" 
            />

            <img 
                className={styles.colorMode}
                src={themeIcon} 
                alt="Color mode icon" 
                onClick={toggleTheme}
            />
        </div>

        <div className={styles.info}>
            <h1>
                Mario<br />Camarena
            </h1>
            <h2>Type of dev</h2>

            <span>
                <a href="https://www.linkedin.com/in/mario-camarena-044ab9255/" target='_blank'>
                    <img src={linkedinIcon} alt="linkedin icon" />
                </a>
                <a href="https://github.com/mariocamarena" target='_blank'>
                    <img src={githubIcon} alt="github icon" />
                </a>
            </span>

            <p className={styles.description}>
                This is a paragepah that is short aaaaaaaaaaaaaaa.
            </p>

            <a href={CV}>
                <button className='hover'>
                    Resume
                </button>
            </a>

        </div>
    </section>
  )
}

export default Hero
