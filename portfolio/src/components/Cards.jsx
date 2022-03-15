import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './cards.module.css';
import Link from '@mui/material/Link';

// { title: "Hotel Website clone",duration:"1 Week",
//  image: project1, 
// description: "Website showcasing the luxury hotel services",
// features:"Website consists of 5 pages (Home, Room, Dining, aboutus & Contacts) each having their own functionalities ", 
// techStack: "HTML, CSS,JavaScript", responsibilites:"implementation of forms and extraction and storing of data"}
 

export const Cards = ({data,height,width,type}) => {
  return (
    <Card sx={{maxWidth: width,height,boxShadow:5,p:0,m:'auto',mb:2,mt:2,borderRadius:2}}>
      <CardContent sx={{p:0}}>
        <div className={type === "skill" ? styles.skillCard : styles.projectCard}>
          <img src={data.image}/>
          <div>
            <p className={type === "skill" ? styles.skillheading : styles.projectheading}>{data.title}</p>
          {type === "skill" ? null : <p> <span className={styles.projectTitle}>Description :-</span> {data.description}</p>}
          {type === "skill" ? null : <p> <span className={styles.projectTitle}>Feature :-</span> {data.features}</p>}
          {type === "skill" ? null : <p> <span className={styles.projectTitle}>Duration :-</span> {data.duration}</p>}
          {type === "skill" ? null : <p> <span className={styles.projectTitle}>Tech Stack :-</span> {data.techStack}</p>}
          {type === "skill" ? null : <p> <span className={styles.projectTitle}>Areas of Responsibilites :-</span> {data.responsibilites}</p>}
          </div>
        </div>
        {type === "skill" ? null :
          <div className={styles.projectLinkdiv}>
            <Link href={data.codeLink} target={"_blank"} underline="hover">
            View Code
            </Link>
            <Link href={data.projectLink} target={"_blank"} underline="hover">
            Visit Site
            </Link>
          </div>
        }
        
      </CardContent>
    </Card>
  );
}
