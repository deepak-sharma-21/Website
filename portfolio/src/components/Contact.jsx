import React from 'react';
import styles from './sections.module.css'
import Linkedin from '../Icons/Linkedin.png';
import github from '../Icons/github2.png'

export const Contact = () => {
  return (
    <div className={styles.contactdiv} id='contact'>
      <div className={styles.heading}><p>Get In Touch</p></div>
      <div><h2>Deepak Sharma</h2></div>
      <div>
        <div>
          <a href="http://www.linkedin.com/in/deepak-sharma-7a0a50220/" target="_blank"><img src={Linkedin} alt="" style={{width:'1.5rem'}}/></a>
          <a href="https://github.com/deepak-sharma-21" target="_blank"><img src={github} alt="" style={{width:'1.5rem'}}/></a>
          
        </div>
        <div>
          <div className={styles.contactinfo}>Email - deepak.mailme7@gmail.com</div>
          <div className={styles.contactinfo}>contact no. - 9755503895</div>
        </div>
      </div>
    </div>
  )
}
