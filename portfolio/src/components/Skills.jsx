import React from 'react'
import CSS from '../Icons/CSS.png'
import Express from '../Icons/Expressjs.png'
import HTML from '../Icons/HTML.png'
import JavaScript from '../Icons/JavaScript.png'
import MongoDB from '../Icons/MongoDB.png'
import Nodejs from '../Icons/Nodejs.png'
import MaterialUI from '../Icons/materialui.svg'
import Redux from '../Icons/Redux.png'
import Reactjs from '../Icons/Reactjs.png'
import { Cards } from './Cards'
import styles from './sections.module.css'

export const Skills = () => {
  const frontend =[
    {title:"HTML",image:HTML},
    {title:"CSS",image:CSS},
    {title:"JavaScript",image:JavaScript},
    {title:"React",image:Reactjs},
    {title:"Material-ui",image:MaterialUI},
    {title:"Redux",image:Redux}
  ]

  const backend = [
    {title:"Node.js",image:Nodejs},
    {title:"Express.js",image:Express},
    {title:"MongoDB",image:MongoDB}
  ]
  
  return (
  <div className={styles.container} id='skills'>
    <div className={styles.heading}>Skills</div>
    <div className={styles.skillsdiv}>
      
      <div>
      <h2>Frontend Skills</h2>
      <div className={styles.skillstable}>
        {frontend.map((skill) => <Cards data={skill} height={60} width={500} type={"skill"}/>)}
      </div>
      </div>
      <div>
      <h2>Backend Skills</h2>
      <div className={styles.skillstable}>
        {backend.map((skill) => <Cards data={skill} height={60} width={500} type={"skill"}/>)}
      </div>
      </div>
    </div>
  </div>)
}