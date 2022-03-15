import React from 'react'
import styles from './sections.module.css'

export const About = () => {
  return (
    <div className={styles.container} id='about'>
      <div className={styles.heading}>About</div>
      <div className={styles.para}>
        An aspiring Full-Stack Web Developer who is passionate about programming and coding <br /> interested
        in enhancing the product experience.  ready to learn, unlearn, relearn<br/> and wants to be in an
        organization where skills are nurtured well <br /> and there is a scope of learning a lot.
      </div>
    </div>
  )
}
