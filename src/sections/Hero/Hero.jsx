import { useState, useEffect } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import arrow_icon from '../../assets/arrow_icon.svg';

import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to handle scroll and show the button after leaving the landing page
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='hero' className={styles.heroContainer}>
      <div className={styles.heroContent}>
        {/* Left Section - Profile Image */}
        <div className={styles.leftSection}>
          <img className={styles.heroImage} src={heroImg} alt="Mario Camarena" />
        </div>

        {/* Right Section - Name, Developer Type, and Social Links */}
        <div className={styles.rightSection}>
          <h1 className={styles.name}>Mario Camarena</h1>
          <p className={styles.devType}>Full-Stack Developer</p>

          <div className={styles.socialAndResume}>
            <a href="https://www.linkedin.com/in/mario-camarena-044ab9255/" target='_blank' rel="noopener noreferrer">
              <img src={linkedinLight} alt="LinkedIn icon" className={styles.icon} />
            </a>
            <a href="https://github.com/mariocamarena" target='_blank' rel="noopener noreferrer">
              <img src={githubLight} alt="GitHub icon" className={styles.icon} />
            </a>
            <a href={CV}>
              <button className={styles.resumeButton}>
                Resume
              </button>
            </a>
          </div>

          <p className={styles.aboutMe}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet tristique ipsum. Nulla facilisi.
          </p>
          <a href="#contact" className={styles.contactButton}>Contact Me</a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className={styles.scrollTopButton} onClick={scrollToTop}>
          <img src={arrow_icon} alt="Scroll to top" /> 
        </button>
      )}
    </section>
  );
}

export default Hero;
