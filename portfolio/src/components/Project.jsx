import React from 'react'
import { Cards } from './Cards'
import styles from './sections.module.css'
import project1 from '../photos/Screenshot 2022-03-15 022258.png'
export const Project = () => {

  const projects = [
    { title: "Hotel Website clone",duration:"1 Week", image: project1, description: "Website showcasing the luxury hotel services",features:"Website consists of 5 pages (Home, Room, Dining, aboutus & Contacts) each having their own functionalities ", techStack: "HTML, CSS,JavaScript", responsibilites:"implementation of forms and extraction and storing of data",projectLink:"https://hotel-website-clone.herokuapp.com/",codeLink:"https://github.com/bhaskarkrp/Travel_clone"}
  ]

  return (<div className={styles.container} id='projects'>
    <div className={styles.heading}>Project</div>
    <div className={styles.projectdiv}>
      {projects.map((project) => <div><Cards data={project} height={700} width={500} /></div>)}
    </div>
  </div>)
}
