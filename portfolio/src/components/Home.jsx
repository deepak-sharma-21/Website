import React from 'react'
import styles from './sections.module.css'
import profile from '../RAM_2612.JPG'
import Button from '@mui/material/Button'
import Linkedin from '../Icons/Linkedin2.png';
import github from '../Icons/github2.png'

export const Home = () => {
  return (
    <div className={styles.homediv} id='home'>
      <h1 className={styles.name}>Hi. My Name is <br /> <span>Deepak Sharma</span></h1>
      <img src={profile} alt="profile photo" />
      <div>
        <h3>Aspiring Full Stack Web Developer</h3>
        <div className={styles.buttondiv}>
          <div>
            <a href="http://www.linkedin.com/in/deepak-sharma-7a0a50220/" target="_blank"><img src={Linkedin} alt="" style={{width:'1.5rem'}}/></a>
            &nbsp;
            <a href="https://github.com/deepak-sharma-21" target="_blank"><img src={github} alt="" style={{width:'1.5rem'}}/></a>
          </div>
            <a href="https://1drv.ms/b/s!AkLgFYcOsSRhgxxrOVncGYKbtxwH?e=93b1RD" target="_blank"><Button variant="contained"><span className={styles.button}>Resume</span></Button></a>
        </div>
      </div>
    </div>
  )
}
