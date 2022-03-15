import React from 'react'
import styles from './sections.module.css'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navlogo}>DS</div>
      <div className={styles.navlinks}>
        <a href="#home"><h4>Home</h4></a>
        <a href="#about"><h4>About</h4></a>
        <a href="#skills"><h4>Skills</h4></a>
        <a href="#projects"><h4>Projects</h4></a>
        <a href="#contact"><h4>Contact</h4></a>
      </div>
    </div>
  )
}
