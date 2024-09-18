import React from 'react';
import styles from './NavbarStyles.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#funfacts">Fun Facts</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
