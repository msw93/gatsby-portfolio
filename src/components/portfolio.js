import React from "react"
import Header from "../components/header.js"
import Textbox from "../components/textbox.js";
import Fade from 'react-reveal/Fade';

export default function Portfolio() {
  return (
    <Textbox id="portfolio" style={{ color: `black` }}>
      <Fade duration={3000} delay={500} distance="30px">
          <Header headerText="Portfolio" />
        	<p className="">You can find my portfolio at Github</p>
        	<a href='https://github.com/mikewiner'>Click here.</a>
      </Fade>
    </Textbox>
  )
}