import React from 'react';
import styles from './NavbarStyles.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#hero">Mario Camarena</a>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#fun-facts">Fun Facts</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
