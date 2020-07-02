import React from "react"
import Container from "../components/container"
import styles from './about-css-modules.module.css'

console.log(styles)

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
     	<User 
    		username='MICHAEL WINER'
    		excerpt="Hi I am Michael and I from Japan."
    		avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" 
    	/>
   	 	<User 
    		username='JENNIFER WINER'
    		excerpt="Hi I am Jennifer and I from England."
    		avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" 
    	/>
    </Container>
  )
}

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

